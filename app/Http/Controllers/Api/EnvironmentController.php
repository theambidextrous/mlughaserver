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

use App\Models\Account;
use App\Models\User;
use App\Models\Environmentgroup;

class EnvironmentController extends Controller
{
    /** **** groups */
    public function group_add(Request $req)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'name' => 'required|string',
            'label' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Invalid group name",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        if( !$req->hasfile('image') )
        {
            return response([
                'status' => 201,
                'message' => "Invalid image file. Upload a file",
                'errors' => [],
            ], 403);
        }
        $input = $req->all();
        $file_content = $req->file('image');
        $exten = strtolower($file_content->getClientOriginalExtension());
        $file_content_name = $file_uuid . '.' . $exten;
        Storage::disk('local')
            ->putFileAs('cls/trt/content', $file_content, $file_content_name);
        $input['image'] = $file_content_name;
        $input['name'] = ucwords(strtolower($input['name']));
        $id = Environmentgroup::create($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_groups(),
        ], 200);

    }
    public function group_edit(Request $req, $id)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'name' => 'required|string',
            'label' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Invalid group name",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        if( $req->hasfile('image') )
        {
            $file_content = $req->file('image');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . '.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['image'] = $file_content_name;
        }
        $input['name'] = ucwords(strtolower($input['name']));
        Environmentgroup::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_groups(),
        ], 200);
    }
    public function group_findall()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => $this->find_groups(),
        ], 200);
    }
    public function group_drop()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => [],
        ], 200);
    }
    protected function find_groups()
    {
        $g = Environmentgroup::all();
        if(is_null($g))
        {
            return [];
        }
        $g = $g->toArray();
        return $this->format_groups_data($g);
    }
    protected function format_groups_data($data)
    {
        $rtn = [];
        foreach( $data as $_data ):
            $_data['image'] = route('stream', ['file' => $_data['image']]);
            array_push($rtn, $_data);
        endforeach;

        return $rtn;
    }
}
