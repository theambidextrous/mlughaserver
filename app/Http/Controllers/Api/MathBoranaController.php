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
use App\Models\Subscription;
use App\Models\Mathboranacontent;
use App\Models\Mathvideo;
use App\Models\Mathboranatest;
use App\Models\Mathsection;
use App\Models\Mathgroup;

/** mail */
use Illuminate\Support\Facades\Mail;
use App\Mail\NewSignUp;
use App\Mail\Code;

class MathBoranaController extends Controller
{
    public function content_add(Request $req)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'section' => 'required|string|not_in:nn',
            'label' => 'required|string',
            'btn_left' => 'required|string',
            'btn_right' => 'required|string',
            'is_pair' => 'required|string',
            'pair_label' => 'string',
            'pair_btn_left' => 'string',
            'pair_btn_right' => 'string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. There are missing fields please check and try again." . json_encode($validator->errors()->all()),
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        if( !$req->hasfile('image') )
        {
            return response([
                'status' => 201,
                'message' => "Invalid image file. Upload a file",
                'errors' => [],
            ], 403);
        }
        if( !$req->hasfile('sound_left') )
        {
            return response([
                'status' => 201,
                'message' => "Invalid audio file for sound left",
                'errors' => [],
            ], 403);
        }
        if( !$req->hasfile('sound_right') )
        {
            return response([
                'status' => 201,
                'message' => "Invalid audio file for sound right",
                'errors' => [],
            ], 403);
        }
        /** image */
        $file_content = $req->file('image');
        $exten = strtolower($file_content->getClientOriginalExtension());
        $file_content_name = $file_uuid . 'img.' . $exten;
        Storage::disk('local')
            ->putFileAs('cls/trt/content', $file_content, $file_content_name);
        $input['image'] = $file_content_name;
        /** sound left */
        $file_content = $req->file('sound_left');
        $exten = strtolower($file_content->getClientOriginalExtension());
        if( $exten != 'mp3')
        {
            return response([
                'status' => 201,
                'message' => "Error. MP3 file required for sound left",
                'errors' => [],
            ], 403);
        }
        $file_content_name = $file_uuid . 'sl.' . $exten;
        Storage::disk('local')
            ->putFileAs('cls/trt/content', $file_content, $file_content_name);
        $input['sound_left'] = $file_content_name;
        /** sound right */
        $file_content = $req->file('sound_right');
        $exten = strtolower($file_content->getClientOriginalExtension());
        if( $exten != 'mp3')
        {
            return response([
                'status' => 201,
                'message' => "Error. MP3 file required for sound right",
                'errors' => [],
            ], 403);
        }
        $file_content_name = $file_uuid . 'sr.' . $exten;
        Storage::disk('local')
            ->putFileAs('cls/trt/content', $file_content, $file_content_name);
        $input['sound_right'] = $file_content_name;
        if( intval($input['is_pair']) == 1)
        {
            if( !$req->hasfile('pair_image') )
            {
                return response([
                    'status' => 201,
                    'message' => "Invalid pair image file. Upload a file",
                    'errors' => [],
                ], 403);
            }
            if( !$req->hasfile('pair_sound_left') )
            {
                return response([
                    'status' => 201,
                    'message' => "Invalid audio file for pair sound left",
                    'errors' => [],
                ], 403);
            }
            if( !$req->hasfile('pair_sound_right') )
            {
                return response([
                    'status' => 201,
                    'message' => "Invalid audio file for pair sound right",
                    'errors' => [],
                ], 403);
            }
            /** image */
            $file_content = $req->file('pair_image');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . 'pimg.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['pair_image'] = $file_content_name;
            /** sound left */
            $file_content = $req->file('pair_sound_left');
            $exten = strtolower($file_content->getClientOriginalExtension());
            if( $exten != 'mp3')
            {
                return response([
                    'status' => 201,
                    'message' => "Error. MP3 file required for pair sound left",
                    'errors' => [],
                ], 403);
            }
            $file_content_name = $file_uuid . 'psl.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['pair_sound_left'] = $file_content_name;
            /** sound right */
            $file_content = $req->file('pair_sound_right');
            $exten = strtolower($file_content->getClientOriginalExtension());
            if( $exten != 'mp3')
            {
                return response([
                    'status' => 201,
                    'message' => "Error. MP3 file required for pair sound right",
                    'errors' => [],
                ], 403);
            }
            $file_content_name = $file_uuid . 'psr.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['pair_sound_right'] = $file_content_name;
        }
        $id = Mathboranacontent::create($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_borana_math_content(),
        ], 200);
    }
    public function content_edit(Request $req, $id)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'section' => 'required|string|not_in:nn',
            'label' => 'required|string',
            'btn_left' => 'required|string',
            'btn_right' => 'required|string',
            'is_pair' => 'required|string',
            'pair_label' => 'string',
            'pair_btn_left' => 'string',
            'pair_btn_right' => 'string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. There are missing fields please check and try again.",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        if( $req->hasfile('image') )
        {
            /** image */
            $file_content = $req->file('image');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . 'img.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['image'] = $file_content_name;
        }
        if( $req->hasfile('sound_left') )
        {
            /** sound left */
            $file_content = $req->file('sound_left');
            $exten = strtolower($file_content->getClientOriginalExtension());
            if( $exten != 'mp3')
            {
                return response([
                    'status' => 201,
                    'message' => "Error. MP3 file required for sound left",
                    'errors' => [],
                ], 403);
            }
            $file_content_name = $file_uuid . 'sl.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['sound_left'] = $file_content_name;
        }
        if( $req->hasfile('sound_right') )
        {
            /** sound right */
            $file_content = $req->file('sound_right');
            $exten = strtolower($file_content->getClientOriginalExtension());
            if( $exten != 'mp3')
            {
                return response([
                    'status' => 201,
                    'message' => "Error. MP3 file required for sound right",
                    'errors' => [],
                ], 403);
            }
            $file_content_name = $file_uuid . 'sr.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['sound_right'] = $file_content_name;
        }
        if( intval($input['is_pair']) == 1)
        {
            if( $req->hasfile('pair_image') )
            {
                /** image */
                $file_content = $req->file('pair_image');
                $exten = strtolower($file_content->getClientOriginalExtension());
                $file_content_name = $file_uuid . 'pimg.' . $exten;
                Storage::disk('local')
                    ->putFileAs('cls/trt/content', $file_content, $file_content_name);
                $input['pair_image'] = $file_content_name;
            }
            if( $req->hasfile('pair_sound_left') )
            {
                /** sound left */
                $file_content = $req->file('pair_sound_left');
                $exten = strtolower($file_content->getClientOriginalExtension());
                if( $exten != 'mp3')
                {
                    return response([
                        'status' => 201,
                        'message' => "Error. MP3 file required for pair sound left",
                        'errors' => [],
                    ], 403);
                }
                $file_content_name = $file_uuid . 'psl.' . $exten;
                Storage::disk('local')
                    ->putFileAs('cls/trt/content', $file_content, $file_content_name);
                $input['pair_sound_left'] = $file_content_name;
            }
            if( $req->hasfile('pair_sound_right') )
            {
                /** sound right */
                $file_content = $req->file('pair_sound_right');
                $exten = strtolower($file_content->getClientOriginalExtension());
                if( $exten != 'mp3')
                {
                    return response([
                        'status' => 201,
                        'message' => "Error. MP3 file required for pair sound right",
                        'errors' => [],
                    ], 403);
                }
                $file_content_name = $file_uuid . 'psr.' . $exten;
                Storage::disk('local')
                    ->putFileAs('cls/trt/content', $file_content, $file_content_name);
                $input['pair_sound_right'] = $file_content_name;
            }
        }
        Mathboranacontent::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_borana_math_content(),
        ], 200);
    }
    public function content_findall()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => $this->find_borana_math_content(),
        ], 200);
    }
    public function content_drop(Request $req)
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => [],
        ], 200);
    }
    protected function find_borana_math_content()
    {
        $s = Mathboranacontent::where('id', '!=', 0)->orderBy('id', 'desc')->get();
        if(is_null($s))
        {
            return [];
        }
        $s = $s->toArray();
        return $this->format_borana_math_content($s);
    }
    protected function format_borana_math_content($data)
    {
        $rtn = [];
        foreach( $data as $_data ):
            $_data['slabel'] = Mathsection::find($_data['section'])->name;
            $_data['image'] = route('stream', ['file' => $_data['image']]);
            $_data['sound_left'] = route('stream', ['file' => $_data['sound_left']]);
            $_data['sound_right'] = route('stream', ['file' => $_data['sound_right']]);
            if(intval($_data['is_pair']) == 1)
            {
                $_data['pair_sound_right'] = route('stream', ['file' => $_data['pair_sound_right']]);
                $_data['pair_sound_left'] = route('stream', ['file' => $_data['pair_sound_left']]);
                $_data['pair_image'] = route('stream', ['file' => $_data['pair_image']]);
            }
            array_push($rtn, $_data);
        endforeach;

        return $rtn;
    }

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
        $id = Mathvideo::create($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_math_video(),
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
        Mathvideo::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_math_video(),
        ], 200);
    }
    public function video_findall()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => $this->find_math_video(),
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
    protected function find_math_video()
    {
        $s = Mathvideo::all();
        if(is_null($s))
        {
            return [];
        }
        $s = $s->toArray();
        return $this->format_math_video($s);
    }
    protected function format_math_video($data)
    {
        $rtn = [];
        foreach( $data as $_data ):
            $_data['glabel'] = Mathgroup::find($_data['group'])->name;
            $_data['video'] = route('stream', ['file' => $_data['video']]);
            array_push($rtn, $_data);
        endforeach;
        return $rtn;
    }

    /** Quiz */
    public function quiz_add(Request $req)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'group' => 'required|string|not_in:nn',
            'label' => 'required|string',
            'question_label' => 'required|string',
            'opt_left' => 'required|string',
            'opt_right' => 'required|string',
            'correct' => 'required|string',
            'score' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. There are missing fields please check and try again." . json_encode($validator->errors()->all()),
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        if( !$req->hasfile('image_left') )
        {
            return response([
                'status' => 201,
                'message' => "File error. Upload image left",
                'errors' => [],
            ], 403);
        }
        if( !$req->hasfile('image_right') )
        {
            return response([
                'status' => 201,
                'message' => "File error. Upload image right",
                'errors' => [],
            ], 403);
        }
        if( !$req->hasfile('question_sound') )
        {
            return response([
                'status' => 201,
                'message' => "File error. Upload quiz question audio",
                'errors' => [],
            ], 403);
        }
        if( !$req->hasfile('question_sound_b') )
        {
            return response([
                'status' => 201,
                'message' => "File error. Upload quiz question vernacular audio",
                'errors' => [],
            ], 403);
        }
        $input = $req->all();
        $input['label'] = trim($input['label']);
        $input['opt_left'] = trim(strtoupper($input['opt_left']));
        $input['opt_right'] = trim(strtoupper($input['opt_right']));
        $input['correct'] = trim(strtoupper($input['correct']));
        $input['label_inner'] = 'BORANA ' . trim(strtoupper($input['label']));
        /**image left*/
        $file_content = $req->file('image_left');
        $exten = strtolower($file_content->getClientOriginalExtension());
        $file_content_name = $file_uuid . 'image_left.' . $exten;
        Storage::disk('local')
            ->putFileAs('cls/trt/content', $file_content, $file_content_name);
        $input['image_left'] = $file_content_name;
         /**image right */
         $file_content = $req->file('image_right');
         $exten = strtolower($file_content->getClientOriginalExtension());
         $file_content_name = $file_uuid . 'image_right.' . $exten;
         Storage::disk('local')
             ->putFileAs('cls/trt/content', $file_content, $file_content_name);
         $input['image_right'] = $file_content_name;
         /**question_sound */
         $file_content = $req->file('question_sound');
         $exten = strtolower($file_content->getClientOriginalExtension());
         $file_content_name = $file_uuid . 'question_sound.' . $exten;
         Storage::disk('local')
             ->putFileAs('cls/trt/content', $file_content, $file_content_name);
         $input['question_sound'] = $file_content_name;
         /**question_sound_b */
         $file_content = $req->file('question_sound_b');
         $exten = strtolower($file_content->getClientOriginalExtension());
         $file_content_name = $file_uuid . 'question_sound_b.' . $exten;
         Storage::disk('local')
             ->putFileAs('cls/trt/content', $file_content, $file_content_name);
         $input['question_sound_b'] = $file_content_name;
        $id = Mathboranatest::create($input)->id;
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_borana_math_quiz(),
        ], 200);
    }
    public function quiz_edit(Request $req, $id)
    {
        $file_uuid = (string) Str::uuid();
        $validator = Validator::make($req->all(), [
            'group' => 'required|string|not_in:nn',
            'label' => 'required|string',
            'question_label' => 'required|string',
            'opt_left' => 'required|string',
            'opt_right' => 'required|string',
            'correct' => 'required|string',
            'score' => 'required|string',
        ]);
        if( $validator->fails() ){
            return response([
                'status' => 201,
                'message' => "Form error. There are missing fields please check and try again.",
                'errors' => $validator->errors()->all(),
            ], 403);
        }
        $input = $req->all();
        $input['label'] = trim($input['label']);
        $input['opt_left'] = trim(strtoupper($input['opt_left']));
        $input['opt_right'] = trim(strtoupper($input['opt_right']));
        $input['correct'] = trim(strtoupper($input['correct']));
        $input['label_inner'] = 'BORANA ' . trim(strtoupper($input['label']));
        if( $req->hasfile('image_left') )
        {
            /**image left*/
            $file_content = $req->file('image_left');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . 'image_left.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['image_left'] = $file_content_name;
        }
        if( $req->hasfile('image_right') )
        {
            /**image right */
            $file_content = $req->file('image_right');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . 'image_right.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['image_right'] = $file_content_name;
        }
        if( $req->hasfile('question_sound') )
        {
            /**question_sound */
            $file_content = $req->file('question_sound');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . 'question_sound.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['question_sound'] = $file_content_name;
        }
        if( $req->hasfile('question_sound_b') )
        {
            /**question_sound_b */
            $file_content = $req->file('question_sound_b');
            $exten = strtolower($file_content->getClientOriginalExtension());
            $file_content_name = $file_uuid . 'question_sound_b.' . $exten;
            Storage::disk('local')
                ->putFileAs('cls/trt/content', $file_content, $file_content_name);
            $input['question_sound_b'] = $file_content_name;
        }
        Mathboranatest::find($id)->update($input);
        return response([
            'status' => 200,
            'message' => "done",
            'id' => $id,
            'data' => $this->find_borana_math_quiz(),
        ], 200);
    }
    public function quiz_findall()
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => $this->find_borana_math_quiz(),
        ], 200);
    }
    public function quiz_drop(Request $req)
    {
        return response([
            'status' => 200,
            'message' => "done",
            'data' => [],
        ], 200);
    }
    protected function find_borana_math_quiz()
    {
        $s = Mathboranatest::all();
        if(is_null($s))
        {
            return [];
        }
        $s = $s->toArray();
        return $this->format_borana_math_quiz($s);
    }
    protected function format_borana_math_quiz($data)
    {
        $rtn = [];
        foreach( $data as $_data ):
            $_data['glabel'] = Mathgroup::find($_data['group'])->name;
            $_data['image_right'] = route('stream', ['file' => $_data['image_right']]);
            $_data['image_left'] = route('stream', ['file' => $_data['image_left']]);
            $_data['question_sound'] = route('stream', ['file' => $_data['question_sound']]);
            $_data['question_sound_b'] = route('stream', ['file' => $_data['question_sound_b']]);
            array_push($rtn, $_data);
        endforeach;
        return $rtn;
    }
}
