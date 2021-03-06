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
use App\Models\Subscription;
use App\Models\Mathgroup;
use App\Models\Mathsection;

class MathController extends Controller
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
        $id = Mathgroup::create($input)->id;
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
        Mathgroup::find($id)->update($input);
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
        $g = Mathgroup::all();
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
    /** **** section */
    public function section_add(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'group' => 'required|string',
            'name' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Invalid data. All fields are required",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        $input['name'] = strtoupper($input['name']);
        $id = Mathsection::create($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_sections(),
        ], 200);

    }
    public function section_edit(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'group' => 'required|string',
            'name' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Invalid data. All fields are required",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        $input['name'] = strtoupper($input['name']);
        Mathsection::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_sections(),
        ], 200);
    }
    public function section_findall()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => $this->find_sections(),
        ], 200);
    }
    public function section_drop()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => [],
        ], 200);
    }
    protected function find_sections()
    {
        $s = Mathsection::all();
        if(is_null($s))
        {
            return [];
        }
        $s = $s->toArray();
        return $this->format_section_data($s);
    }
    protected function format_section_data($data)
    {
        $rtn = [];
        foreach( $data as $_data ):
            $_data['glabel'] = Mathgroup::find($_data['group'])->name;
            array_push($rtn, $_data);
        endforeach;

        return $rtn;
    }
}
