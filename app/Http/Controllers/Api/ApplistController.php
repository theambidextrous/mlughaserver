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
use PDF;

use App\Models\User;
use App\Models\Applist;

class ApplistController extends Controller
{
    public function add( Request $req )
    {
        $validator = Validator::make($req->all(), [
            'code' => 'required|string',
            'name' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. Missing input",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        $input['code'] = strtoupper(trim(str_replace(' ', '', $input['code'])));
        $id = Applist::create($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_apps(),
        ], 200);
    }
    public function edit( Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'code' => 'required|string',
            'name' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. Missing input",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        $input['code'] = strtoupper(trim(str_replace(' ', '', $input['code'])));
        Applist::find($id)->update($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_apps(),
        ], 200);
    }
    public function findall()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => $this->find_apps(),
        ], 200);
    }   
    public function drop($id)
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => [],
        ], 200);
    }    
    protected function find_apps()
    {
        $g = Applist::all();
        if(is_null($g))
        {
            return [];
        }
        $g = $g->toArray();
        return $g;
    }
}

