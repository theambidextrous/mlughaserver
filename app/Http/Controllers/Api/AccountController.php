<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Validator;
use Storage;
use Config;
use Carbon\Carbon;

use App\Models\Account;
use App\Models\Subscription;
use App\Models\User;

/** mail */
use Illuminate\Support\Facades\Mail;
use App\Mail\NewSignUp;
use App\Mail\Code;

class AccountController extends Controller
{
    protected function is_admin()
    {
        return Auth::user()->is_admin == 1;
    }
    public function add(Request $req)
    {
        if( !$this->is_admin() )
        {
            return response([
                'status' => 201,
                'message' => 'Permission Denied',
            ], 403);
        }
        $validator = Validator::make($req->all(), [
            'account_name' => 'required|string',
            'app' => 'required|string|not_in:nn',
            'address' => 'required|string',
            'county' => 'required|string|not_in:nn',
            'zip' => 'required|string',
            'age' => 'required|string',
            'g_email' => 'required|string',
            'g_phone' => 'required|string',
            'has_paid' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => 'A required field was not found',
                'errors' => $validator->errors()->all(),
                'payload' => $req->all(),
            ], 403);
        }
        $input = $req->all();
        $input['account_no'] = $this->gen_acc_no();
        $input['age'] = round($input['age']);
        $input['app'] = trim($input['app']);
        if( intval($input['has_paid']) == 1 )
        {
            $input['has_paid'] = true;
            $input['is_active'] = true;
            $input['period_from'] = date('Y-m-d');
            $input['period_to'] = date('Y-m-d', strtotime('+365 days'));
        }
        $input['g_phone'] = $this->format_phone($input['g_phone']);
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
        $created = Account::create($input)->id;
        $user_input = [
            'password' => Hash::make($input['account_no']),
            'email' => $input['account_no'],
            'fname' => $input['account_name'],
            'lname' => $input['account_name'],
            'is_admin' => false,
        ];
        User::create($user_input);
        return response([
            'status' => 200,
            'message' => 'Account entry created successfully.',
            'id' => $created,
            'data' => $this->find_accounts(),
        ], 200);
    }
    public function edit(Request $req, $id)
    {
        if( !$this->is_admin() )
        {
            return response([
                'status' => 201,
                'message' => 'Permission Denied',
            ], 403);
        }
        $validator = Validator::make($req->all(), [
            'account_name' => 'required|string',
            'app' => 'required|string|not_in:nn',
            'address' => 'required|string',
            'county' => 'required|string|not_in:nn',
            'zip' => 'required|string',
            'age' => 'required|string',
            'g_email' => 'required|string',
            'g_phone' => 'required|string',
            'has_paid' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => 'A required field was not found',
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        $input['age'] = round($input['age']);
        $input['app'] = trim($input['app']);
        if( intval($input['has_paid']) == 1 )
        {
            $input['has_paid'] = true;
            $input['is_active'] = true;
            $input['period_from'] = date('Y-m-d');
            $input['period_to'] = date('Y-m-d', strtotime('+365 days'));
        }
        $input['g_phone'] = $this->format_phone($input['g_phone']);
        if( $this->exists_mail($input['g_email'], $id) )
        {
            return response([
                'status' => 201,
                'message' => 'Email address already used. Try another.',
                'errors' => [],
            ], 403);
        }
        if( $this->exists_phone($input['g_phone'], $id) )
        {
            return response([
                'status' => 201,
                'message' => 'Phone number already used. Try another.',
                'errors' => [],
            ], 403);
        }
        Account::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => 'Account entry updated successfully.',
            'id' => $id,
            'data' => $this->find_accounts(),
        ], 200);
    }
    public function find($id)
    {
        if( !$this->is_admin() )
        {
            return response([
                'status' => 201,
                'message' => 'Permission Denied',
            ], 403);
        }
        $data = Account::find($id);
        return response([
            'status' => 200,
            'message' => 'Account entry fetched successfully',
            'data' => $data,
        ], 200);
    }
    public function findall()
    {
        if( !$this->is_admin() )
        {
            return response([
                'status' => 201,
                'message' => 'Permission Denied',
            ], 403);
        }
        $data = [];
        $p = Account::where('id', '!=', 0)->orderBy('id', 'desc')->get();
        if(!is_null($p))
        {
            $data = $p->toArray();
        }
        return response([
            'status' => 200,
            'message' => 'Account entries fetched successfully',
            'data' => $data,
        ], 200);
    }
    public function drop($id)
    {
        if( !$this->is_admin() )
        {
            return response([
                'status' => 201,
                'message' => 'Permission Denied',
            ], 403);
        }
        Account::find($id)->update([ 'is_active' => false, 'has_paid' => false ]);
        return response([
            'status' => 200,
            'message' => 'Entry deleted successfully',
            'id' => null,
        ], 200);
    }
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
    protected function find_accounts()
    {
        $data = [];
        $p = Account::where('id', '!=', 0)->orderBy('id', 'desc')->get();
        if(!is_null($p))
        {
            $data = $p->toArray();
        }
        return $data;
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
