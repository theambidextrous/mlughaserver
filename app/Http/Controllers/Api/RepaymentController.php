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

use App\Models\Member;
use App\Models\Board;
use App\Models\Loan;
use App\Models\Repayment;

/** mail */
use Illuminate\Support\Facades\Mail;
use App\Mail\NewSignUp;
use App\Mail\Code;

class RepaymentController extends Controller
{
    public function add(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'loan' => 'required|string|not_in:nn',
            'paid' => 'required|string',
            'paid_by' => 'required|string|not_in:nn',
            'received_by' => 'required|string|not_in:nn',
            'pay_date' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => 'A required field was not found',
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        $input['loan'] = intval(trim($input['loan']));
        if( !$this->isUserLoan($input['loan'], $input['paid_by']) )
        {
            return response([
                'status' => 201,
                'message' => 'Data error. The loan number you entered does not belong to the selected user',
                'errors' => [],
            ], 403);
        }
        $created = Repayment::create($input)->id;
        return response([
            'status' => 200,
            'message' => 'Entry created successfully.',
            'id' => $created,
            'data' => $this->find_repayments(),
        ], 200);
    }
    public function edit(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'loan' => 'required|string|not_in:nn',
            'paid' => 'required|string',
            'paid_by' => 'required|string|not_in:nn',
            'received_by' => 'required|string|not_in:nn',
            'pay_date' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => 'A required field was not found',
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        Repayment::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => 'Entry updated successfully.',
            'id' => $id,
            'data' => $this->find_repayments(),
        ], 200);
    }
    public function find($id)
    {
        $data = Repayment::find($id);
        if(is_null($data))
        {
            return [];
        }
        return response([
            'status' => 200,
            'message' => 'Entry fetched successfully.',
            'id' => $id,
            'data' => $data->toArray(),
        ], 200);
    }
    public function findall()
    {
        return response([
            'status' => 200,
            'message' => 'Entries fetched successfully.',
            'data' => $this->find_repayments(),
        ], 200);
    }
    public function drop($id)
    {
        Repayment::find($id)->delete();
        return response([
            'status' => 200,
            'message' => 'Entry deleted successfully.',
            'id' => $id,
            'data' => [],
        ], 200);
    }
    protected function find_repayments()
    {
        $d = Repayment::where('id', '!=', 0)
            ->orderBy('pay_date', 'desc')->get();
        if(is_null($d))
        {
            return [];
        }
        return $d->toArray();
    }
    protected function format_repaymnt($data)
    {
        $rtn = [];
        return $rtn;
    }
    protected function isUserLoan($loan, $user)
    {
        $count = Loan::where('id', $loan)
            ->where('member', $user)->count();
        if($count)
        {
            return true;
        }
        return false;
    }
}
