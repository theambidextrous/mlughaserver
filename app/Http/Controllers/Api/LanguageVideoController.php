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
use App\Models\User;
use App\Models\Languagevideo;
use App\Models\Languagegroup;

/** mail */
use Illuminate\Support\Facades\Mail;
use App\Mail\NewSignUp;
use App\Mail\Code;

class LanguageVideoController extends Controller
{
    /** Video */
    public function video_add(Request $req)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'group' => 'required|string|not_in:nn',
            'locale' => 'required|string|not_in:nn',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. There are missing fields please check and try again.",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        if( !$req->hasfile('video') )
        {
            return response([
                'status' => 201,
                'message' => "Invalid video file. Upload a file",
                'errors' => [],
            ], 403);
        }
        $input = $req->all();
        $file_content = $req->file('video');
        $exten = strtolower($file_content->getClientOriginalExtension());
        $file_content_name = $file_uuid . '.' . $exten;
        Storage::disk('local')
            ->putFileAs('cls/trt/content', $file_content, $file_content_name);
        $input['video'] = $file_content_name;
        $id = Languagevideo::create($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_environment_video(),
        ], 200);
    }
    public function video_edit(Request $req, $id)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'group' => 'required|string|not_in:nn',
            'locale' => 'required|string|not_in:nn',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. There are missing fields please check and try again.",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        if( $req->hasfile('video') )
        {
            $file_content = $req->file('video');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . '.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['video'] = $file_content_name;
        }
        Languagevideo::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_environment_video(),
        ], 200);
    }
    public function video_findall()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => $this->find_environment_video(),
        ], 200);
    }
    public function video_drop(Request $req)
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => [],
        ], 200);
    }
    protected function find_environment_video()
    {
        $s = Languagevideo::all();
        if(is_null($s))
        {
            return [];
        }
        $s = $s->toArray();
        return $this->format_environment_video($s);
    }
    protected function format_environment_video($data)
    {
        $rtn = [];
        foreach( $data as $_data ):
            $_data['glabel'] = Languagegroup::find($_data['group'])->name;
            $_data['video'] = route('stream', ['file' => $_data['video']]);
            array_push($rtn, $_data);
        endforeach;
        return $rtn;
    }
}
