<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\MpesaExpressController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Validator;
use Storage;
use Config;
use Carbon\Carbon;

use App\Models\User;
use App\Models\Account;
use App\Models\Subscription;
use App\Models\Applist;

/** mail */
use Illuminate\Support\Facades\Mail;
use App\Mail\NewSignUp;
use App\Mail\Code;

class SubscriptionController extends Controller
{
    public function register(Request $req)
    {
        $clean_up_acc = null;
        try {
            $validator = Validator::make($req->all(), [
                'account_name' => 'required|string',
                'app' => 'required|string|not_in:nn',
                'g_email' => 'required|string',
                'g_phone' => 'required|string',
            ]);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Error. Missing information. Type name, guardian email & phone.',
                    'errors' => $validator->errors()->all(),
                ], 403);
            }
            $input = $req->all();
            $input['account_no'] = $this->gen_acc_no();
            $input['app'] = trim($input['app']);
            $input['g_phone'] = $this->format_phone($input['g_phone']);
            $input['has_paid'] = false;
            $input['is_active'] = false;
            if( $this->exists_mail($input['g_email']) )
            {
                return response([
                    'status' => 201,
                    'message' => 'Email address already used. Try another.',
                    'errors' => [],
                ], 403);
            }
            if( $this->exists_phone($input['g_phone']) )
            {
                return response([
                    'status' => 201,
                    'message' => 'Phone number already used. Try another.',
                    'errors' => [],
                ], 403);
            }
            $created = Account::create($input);
            $clean_up_acc = $input['account_no'];
            $user_input = [
                'password' => Hash::make($input['account_no']),
                'email' => $input['account_no'],
                'fname' => $input['account_name'],
                'lname' => $input['account_name'],
                'is_admin' => false,
            ];
            $user = User::create($user_input);
            $access_token = $user->createToken('authToken')->accessToken;
            $user['token'] = $access_token;
            $user['account_no'] = $input['account_no'];
            $user['account_name'] = $input['account_name'];
            $user['info'] = $this->findChildAccountInfo($input['account_no']);
            $user['app'] = $input['app'];
            $user['app_label'] = $this->find_app_meta($input['app'], 'name');
            /** payment initiation */
            $mpesa_phone = $input['g_phone'];
            $account_no = $user['account_no'];
            $input['amount'] = 10;//Config::get('app.price');
            $express = new MpesaExpressController(
                Config::get('app.app_mpesa_c_key'),
                Config::get('app.app_mpesa_c_secret'),
                Config::get('app.app_mpesa_paybill'),
                Config::get('app.app_mpesa_passkey'),
                [Config::get('app.app_mpesa_env')],
                Config::get('app.app_mpesa_trans_type'),
                $input['amount'],
                $mpesa_phone,
                route('express'),
                $account_no,
                Config::get('app.name'),
                'happy ordering'
            );
            $a = $express->TriggerStkPush();
            if(json_decode($a)->ResponseCode == '0'){
                $subscription_input = [
                    'account_no' => $account_no,
                    'cost' => $input['amount'],
                    'pay_method' => 'MPExp',
                    'reference' => json_decode($a)->CheckoutRequestID,
                    'paid_amount' => 0,
                    'is_paid' => false,
                ];
                $sb = Subscription::create($subscription_input)->id;
                return response([
                    'status' => 200,
                    'message' => 'A payment notification has been sent to your phone. Simply enter your PIN to complete your order. It expires in 1 MINUTE',
                    'data' => $user
                ],200);
            }else{
                return response([
                    'status' => 204,
                    'message' => 'Payment notification to ' .$mpesa_phone . ' FAILED. Make sure your phone is switched on and try again.',
                    'data' => $user
                ],403);
            }
        } catch (\Illuminate\Database\QueryException $e) {
            $this->clean_up_acc($clean_up_acc);
            return response([
                'status' => 201,
                'message' => "Server error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (PDOException $e) {
            $this->clean_up_acc($clean_up_acc);
            return response([
                'status' => 201,
                'message' => "Db error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            $this->clean_up_acc($clean_up_acc);
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        } catch ( \Throwable $e) {
            $this->clean_up_acc($clean_up_acc);
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    protected function clean_up_acc($account)
    {
        Account::where('account_no', $account)->delete();
        User::where('email', $account)->delete();
        Subscription::where('account_no', $account)->delete();
        return;
    }
    protected function findChildAccountInfo($account)
    {
        $meta = Account::where('account_no', $account)->first();
        if( is_null($meta) )
        {
            return [];
        }
        return $meta->toArray();
    }
    public function returning(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                'account_no' => 'required|string',
                'is_account' => 'required|string',
            ]);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Error. Missing information. Enter a valid 10 digit account number',
                    'errors' => [],
                ], 403);
            }
            $input = $req->all();
            if( intval($input['is_account']) == 1 )
            {
                $login = [
                    'email' => $input['account_no'],
                    'password' => $input['account_no'],
                ];
                if( !Auth::attempt( $login ) )
                {
                    return response([
                        'status' => 201,
                        'message' => "Invalid account number. Try using phone number",
                        'errors' => [],
                    ], 403);
                }
                $accessToken = Auth::user()->createToken('authToken')->accessToken;
                $user = Auth::user();
                $user['token'] = $accessToken;
                $meta = Account::where('account_no', $input['account_no'])->first();
                $user['account_no'] = $meta->account_no;
                $user['account_name'] = $meta->account_name;
                $user['app'] = $meta->app;
                $user['is_active'] = $meta->is_active;
                $user['info'] = $this->findChildAccountInfo($user['account_no']);
                $user['app_label'] = $this->find_app_meta($user['app'], 'name');
                return response([
                    'status' => 200,
                    'message' => 'Success. logged in',
                    'data' => $user,
                ], 200);
            }
            if( intval($input['is_account']) == 0 )
            {
                $input['account_no'] = $this->format_phone($input['account_no']);
                $meta = Account::where('g_phone', $input['account_no'])->first();
                if(is_null($meta))
                {
                    return response([
                        'status' => 201,
                        'message' => "Entry error. Try using account number",
                        'errors' => [],
                    ], 403);
                }
                $login = [
                    'email' => $meta->account_no,
                    'password' => $meta->account_no,
                ];
                if( !Auth::attempt( $login ) )
                {
                    return response([
                        'status' => 201,
                        'message' => "Invalid phone number. Try using account number",
                        'errors' => [],
                    ], 403);
                }
                $accessToken = Auth::user()->createToken('authToken')->accessToken;
                $user = Auth::user();
                $user['token'] = $accessToken;
                $user['account_no'] = $meta->account_no;
                $user['account_name'] = $meta->account_name;
                $user['app'] = $meta->app;
                $user['info'] = $this->findChildAccountInfo($user['account_no']);
                $user['app_label'] = $this->find_app_meta($user['app'], 'name');
                $user['is_active'] = $meta->is_active;
                return response([
                    'status' => 200,
                    'message' => 'Success. logged in',
                    'data' => $user,
                ], 200);
            }
        } catch (\Illuminate\Database\QueryException $e) {
            return response([
                'status' => 201,
                'message' => "Server error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (PDOException $e) {
            return response([
                'status' => 201,
                'message' => "Db error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        } catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    protected function find_app_meta($code, $attr = '')
    {
        $l = Applist::where('code', $code)->first();
        if(!is_null($l))
        {
            if(strlen($attr))
            {
                return $l->$attr;
            }
            return $l->toArray();
        }
        return [];
    }
    public function is_paid_acc()
    {
        try {
            $user = Auth::user();
            $user['account_no'] = Auth::user()->email;
            $accountInfo = $this->findChildAccountInfo($user['account_no']);
            $access_token = $user->createToken('authToken')->accessToken;
            $user['token'] = $access_token;
            $user['account_name'] = $accountInfo['account_name'];
            $user['info'] = $accountInfo;
            $user['app'] = $accountInfo['app'];
            $user['app_label'] = $this->find_app_meta($accountInfo['app'], 'name');
            $account_no = Auth::user()->email;
            $status = Account::where('account_no', $account_no)->where('has_paid', true)->where('is_active', true)->count();
            if( $status )
            {
                return response([
                    'status' => 200,
                    'message' => 'Success. paid',
                    'data' => $user,
                    'paid' => 1,
                ], 200);
            }
            return response([
                'status' => 200,
                'message' => 'not paid',
                'data' => $user,
                'paid' => 0,
            ], 200);
        } catch (\Illuminate\Database\QueryException $e) {
            return response([
                'status' => 201,
                'message' => "Server error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (PDOException $e) {
            return response([
                'status' => 201,
                'message' => "Db error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        } catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    public function renew_done()
    {
        try
        {
            $data = Subscription::where('account_no', Auth::user()->email)
                ->orderBy('id', 'desc')
                ->first();
            if(is_null($data))
            {
                return response([
                    'status' => 201,
                    'message' => 'Payment not found',
                    'done' => null,
                ], 403);
            }
            if( $data->is_paid )
            {
                $accessToken = Auth::user()->createToken('authToken')->accessToken;
                $user = Auth::user();
                $account_no = Auth::user()->email;
                $user['token'] = $accessToken;
                $meta = Account::where('account_no', $account_no)->first();
                $user['account_no'] = $account_no;
                $user['account_name'] = $meta->account_name;
                $user['app'] = $meta->app;
                $user['is_active'] = 1;
                $user['info'] = $this->findChildAccountInfo($user['account_no']);
                $user['app_label'] = $this->find_app_meta($user['app'], 'name');
                return response([
                    'status' => 200,
                    'message' => 'Payment not found',
                    'data' => $user,
                    'done' => 1,
                ], 200);
            }
            return response([
                'status' => 201,
                'message' => 'Payment not completed yet',
                'done' => null,
            ], 403);
        } catch (\Illuminate\Database\QueryException $e) {
            return response([
                'status' => 201,
                'message' => "Server error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (PDOException $e) {
            return response([
                'status' => 201,
                'message' => "Db error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        } catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    public function renew_acc(Request $req)
    {
        try{
            $validator = Validator::make($req->all(), [
                'phone' => 'required|string',
            ]);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Phone number error. Enter valid mpesa phone number',
                    'errors' => $validator->errors()->all(),
                ], 403);
            }
            $mpesa_phone = $this->format_phone($req->get('phone'));
            $account_no = Auth::user()->email;
            $input['amount'] = 10;//Config::get('app.price');
            $express = new MpesaExpressController(
                Config::get('app.app_mpesa_c_key'),
                Config::get('app.app_mpesa_c_secret'),
                Config::get('app.app_mpesa_paybill'),
                Config::get('app.app_mpesa_passkey'),
                [Config::get('app.app_mpesa_env')],
                Config::get('app.app_mpesa_trans_type'),
                $input['amount'],
                $mpesa_phone,
                route('express'),
                $account_no,
                Config::get('app.name'),
                'happy ordering'
            );
            $a = $express->TriggerStkPush();
            if(json_decode($a)->ResponseCode == '0'){
                $checkoutReq = json_decode($a)->CheckoutRequestID;
                $subscription_input = [
                    'account_no' => $account_no,
                    'cost' => $input['amount'],
                    'pay_method' => 'MPExp',
                    'reference' => $checkoutReq,
                    'paid_amount' => 0,
                    'is_paid' => false,
                ];
                $sb = Subscription::create($subscription_input)->id;
                return response([
                    'status' => 200,
                    'payid' => $checkoutReq,
                    'message' => 'A payment notification has been sent to your phone. Simply enter your PIN to complete your order. It expires in 1 MINUTE',
                    'log' => []
                ]);
            }else{
                return response([
                    'status' => 201,
                    'payid' => '',
                    'message' => 'Payment notification to ' .$mpesa_phone . ' FAILED. Make sure your phone is switched on and try again.',
                    'log' => []
                ]);
            }
        } catch (\Illuminate\Database\QueryException $e) {
            return response([
                'status' => 201,
                'message' => "Server error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (PDOException $e) {
            return response([
                'status' => 201,
                'message' => "Db error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        } catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    public function pay_mpesa(Request $req)
    {
        try{
            $validator = Validator::make($req->all(), [
                'phone' => 'required|string|not_in:nn',
            ]);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Phone number error. Enter valid mpesa phone number',
                    'errors' => $validator->errors()->all(),
                ], 403);
            }
            $mpesa_phone = $this->format_phone($req->get('phone'));
            $account_no = Auth::user()->email;
            $input['amount'] = 10;//Config::get('app.price');
            $express = new MpesaExpressController(
                Config::get('app.app_mpesa_c_key'),
                Config::get('app.app_mpesa_c_secret'),
                Config::get('app.app_mpesa_paybill'),
                Config::get('app.app_mpesa_passkey'),
                [Config::get('app.app_mpesa_env')],
                Config::get('app.app_mpesa_trans_type'),
                $input['amount'],
                $mpesa_phone,
                route('express'),
                $account_no,
                Config::get('app.name'),
                'happy ordering'
            );
            $a = $express->TriggerStkPush();
            if(json_decode($a)->ResponseCode == '0'){
                $subscription_input = [
                    'account_no' => $account_no,
                    'cost' => $input['amount'],
                    'pay_method' => 'MPExp',
                    'reference' => json_decode($a)->CheckoutRequestID,
                    'paid_amount' => 0,
                    'is_paid' => false,
                ];
                $sb = Subscription::create($subscription_input)->id;
                return response([
                    'status' => 200,
                    'message' => 'A payment notification has been sent to your phone. Simply enter your PIN to complete your order. It expires in 1 MINUTE',
                    'log' => []
                ]);
            }else{
                return response([
                    'status' => 201,
                    'message' => 'Payment notification to ' .$mpesa_phone . ' FAILED. Make sure your phone is switched on and try again.',
                    'log' => []
                ]);
            }
        } catch (\Illuminate\Database\QueryException $e) {
            return response([
                'status' => 201,
                'message' => "Server error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (PDOException $e) {
            return response([
                'status' => 201,
                'message' => "Db error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        } catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    public function pay_card(Request $req)
    {
        return response([
            'status' => 200,
            'message' => 'Am not ready yet. I\'m still being set up.',
            'log' => []
        ]);
    }
    public function is_expired($account_no)
    {
        try{
            $account_meta = Account::where('account_no', $account_no)->first();
            $nowdate = date('Y-m-d');
            $enddate = date('Y-m-d', strtotime($account_meta->period_to));
            if( $nowdate > $enddate )
            {
                $account_meta->has_paid = false;
                $account_meta->is_active = false;
                $account_meta->save();
                return response([
                    'status' => 200,
                    'message' => 'Account status checked',
                    'expired' => 1,
                    'expires' => 'expired'
                ]);
            }
            return response([
                'status' => 200,
                'message' => 'Account status checked',
                'expired' => 0,
                'expires' => date('m/d/Y', strtotime($account_meta->period_to)),
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            return response([
                'status' => 201,
                'message' => "Server error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (PDOException $e) {
            return response([
                'status' => 201,
                'message' => "Db error. Invalid data",
                'errors' => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        } catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    /** email */
    protected function exists_mail($email, $id = 0)
    {
        if( $id > 0 )
        {
            return Account::where('g_email', $email)->where('id', '!=', $id)->count() > 0;
        }
        return Account::where('g_email', $email)->count() > 0;
    }
    protected function exists_phone($phone, $id = 0)
    {
        if( $id > 0 )
        {
            return Account::where('g_phone', $phone)->where('id', '!=', $id)->count() > 0;
        }
        return Account::where('g_phone', $phone)->count() > 0;
    }
    protected function format_phone($phone)
    {
        return '254' . substr($phone, -9);
    }
    protected function gen_acc_no($length = 10)
    {
        $characters = '0123456789';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        if( $this->exists_acc_no($randomString) )
        {
            $this->gen_acc_no();
        }
        return $randomString;
    }
    protected function exists_acc_no($ac)
    {
        return Account::where('account_no', $ac)->count() > 0;
    }
}
