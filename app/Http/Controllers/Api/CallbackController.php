<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

use App\Models\User;
use App\Models\Subscription;
use App\Models\Account;

use Validator;
use Storage;
use Config;
/** mail */
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderReceived;
use App\Mail\OrderDelivered;
/** mpesa */
use App\Http\Controllers\Api\MpesaExpressController;

class CallbackController extends Controller
{
    /**
     * Mpesa call backs 
     */
    public function express()
    {
        $data = file_get_contents("php://input");
        if(!$data)
        {
            return response(['ResultCode' => '1', 'ResultDesc' => 'Failed']);
        }
        else
        {
            Storage::disk('local')->prepend('mpesalog_exp.log', $data);
            /** callback urls */
            $paylog = json_decode($data, true);
            $stkCallback = $paylog['Body']['stkCallback'];
            $CheckoutRequestID = $stkCallback['CheckoutRequestID'];

            $order = Subscription::where('reference', $CheckoutRequestID)->where('is_paid', false)->first();
            if( $stkCallback['ResultCode'] == '0' )//success
            {
                $account_no = $order->account_no;
                $stk_meta_data = $stkCallback['CallbackMetadata']['Item'];
                $order->is_paid = true;
                $order->reference = $stk_meta_data[1]['Value'];
                $order->paid_amount = $stk_meta_data[0]['Value'];
                $order->pay_log = json_encode($paylog);
                $order->save();
                //
                $user_account = Account::where('account_no', $account_no)->first();
                $user_account->has_paid = true;
                $user_account->is_active = true;
                $user_account->period_from = date('Y-m-d');
                $user_account->period_to = date('Y-m-d', strtotime('+365 days'));
                $user_account->save();
            }
            /** end callbacks */
            return response(['ResultCode' => '0', 'ResultDesc' => 'Accepted Successfully']);
        }
    }
    public function status_check($account_no)
    {
        $sub = Subscription::where('account_no', $account_no)->orderBy('id', 'desc')->first();
        if( $sub->is_paid )
        {
            return response([
                'status' => 200,
                'message' => 'Payment complete.',
                'errors' => [],
            ], 200);
        }
        else
        {
            return response([
                'status' => 201,
                'message' => 'Processing payment...',
                'errors' => [],
            ], 403);
        }
    }
}
