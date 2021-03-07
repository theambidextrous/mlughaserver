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
use App\Models\Languageboranacontent;
use App\Models\Languagesomalicontent;
use App\Models\Languagemaasaicontent;

use App\Models\Mathboranacontent;
use App\Models\Mathsomalicontent;
use App\Models\Mathmaasaicontent;

use App\Models\Languagevideo;
use App\Models\Mathvideo;
use App\Models\Environmentvideo;

/** mail */
use Illuminate\Support\Facades\Mail;
use App\Mail\NewSignUp;
use App\Mail\Code;

class WebDataController extends Controller
{
    protected function is_expired($account_no)
    {
        $account_meta = Account::where('account_no', $account_no)->first();
        if(is_null($account_meta))
        {
            return true;
        }
        $nowdate = date('Y-m-d');
        $enddate = date('Y-m-d', strtotime($account_meta->period_to));
        if( $nowdate > $enddate )
        {
            $account_meta->has_paid = false;
            $account_meta->is_active = false;
            $account_meta->save();
            return true;
        }
        return false;
    }
    protected function is_paid_active()
    {
        $user = Auth::user();
        $this->is_expired($user->email);
        $account = Account::where('account_no', $user->email)->first();
        if(is_null($account))
        {
            return 0;
        }
        if( ! $account->has_paid )
        {
            return 0;
        }
        return 1;
    }
    public function lang_data(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), ['app' => 'required|string']);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Error: No app specified',
                    'errors' => [],
                ], 403);
            }
            $input = $req->all();
            $data = $this->pull_lang_data_by_app($input['app']);
            return response([
                'status' => 200,
                'message' => null,
                'data' => $data,
                'active' => $this->is_paid_active(),
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
        }catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    public function math_data(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), ['app' => 'required|string']);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Error: No app specified',
                    'errors' => [],
                ], 403);
            }
            $input = $req->all();
            $data = $this->pull_math_data_by_app($input['app']);
            return response([
                'status' => 200,
                'message' => null,
                'data' => $data,
                'active' => $this->is_paid_active(),
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
        }catch ( \Throwable $e) {
            return response([
                'status' => 201,
                'message' => $e->getMessage(),
                'errors' => [],
            ], 403);
        }
    }
    protected function pull_lang_data_by_app($app)
    {
        if( $this->is_paid_active() == 0 )
        {
            return [];
        }
        switch($app)
        {
            case 'ENGBORANA':
                $nouns_p1 = Languageboranacontent::where('section', 1)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p2 = Languageboranacontent::where('section', 2)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p3 = Languageboranacontent::where('section', 3)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p4 = Languageboranacontent::where('section', 4)
                    ->orderBy('id', 'asc')
                    ->get();
                $reading_p1 = Languageboranacontent::where('section', 5)
                    ->orderBy('id', 'asc')
                    ->get();
                $reading_p2 = Languageboranacontent::where('section', 6)
                    ->orderBy('id', 'asc')
                    ->get();
                $days_p1 = Languageboranacontent::where('section', 7)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns = [
                    'p1' => $this->format_all_web_content($nouns_p1),
                    'p2' => $this->format_all_web_content($nouns_p2),
                    'p3' => $this->format_all_web_content($nouns_p3),
                    'p4' => $this->format_all_web_content($nouns_p4),
                ];
                $readings = [
                    'p1' => $this->format_all_web_content($reading_p1),
                    'p2' => $this->format_all_web_content($reading_p2),
                ];
                $days = [
                    'p1' => $this->format_all_web_content($days_p1),
                ];
                return ['a' => $nouns, 'b' => $readings, 'c' => $days ];
            break;

            case 'ENGSOMALI':
                $nouns_p1 = Languagesomalicontent::where('section', 1)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p2 = Languagesomalicontent::where('section', 2)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p3 = Languagesomalicontent::where('section', 3)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p4 = Languagesomalicontent::where('section', 4)
                    ->orderBy('id', 'asc')
                    ->get();
                $reading_p1 = Languagesomalicontent::where('section', 5)
                    ->orderBy('id', 'asc')
                    ->get();
                $reading_p2 = Languagesomalicontent::where('section', 6)
                    ->orderBy('id', 'asc')
                    ->get();
                $days_p1 = Languagesomalicontent::where('section', 7)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns = [
                    'p1' => $this->format_all_web_content($nouns_p1),
                    'p2' => $this->format_all_web_content($nouns_p2),
                    'p3' => $this->format_all_web_content($nouns_p3),
                    'p4' => $this->format_all_web_content($nouns_p4),
                ];
                $readings = [
                    'p1' => $this->format_all_web_content($reading_p1),
                    'p2' => $this->format_all_web_content($reading_p2),
                ];
                $days = [
                    'p1' => $this->format_all_web_content($days_p1),
                ];
                return ['a' => $nouns, 'b' => $readings, 'c' => $days ];
            break;

            case 'ENGMAASAI':
                $nouns_p1 = Languagemaasaicontent::where('section', 1)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p2 = Languagemaasaicontent::where('section', 2)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p3 = Languagemaasaicontent::where('section', 3)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns_p4 = Languagemaasaicontent::where('section', 4)
                    ->orderBy('id', 'asc')
                    ->get();
                $reading_p1 = Languagemaasaicontent::where('section', 5)
                    ->orderBy('id', 'asc')
                    ->get();
                $reading_p2 = Languagemaasaicontent::where('section', 6)
                    ->orderBy('id', 'asc')
                    ->get();
                $days_p1 = Languagemaasaicontent::where('section', 7)
                    ->orderBy('id', 'asc')
                    ->get();
                $nouns = [
                    'p1' => $this->format_all_web_content($nouns_p1),
                    'p2' => $this->format_all_web_content($nouns_p2),
                    'p3' => $this->format_all_web_content($nouns_p3),
                    'p4' => $this->format_all_web_content($nouns_p4),
                ];
                $readings = [
                    'p1' => $this->format_all_web_content($reading_p1),
                    'p2' => $this->format_all_web_content($reading_p2),
                ];
                $days = [
                    'p1' => $this->format_all_web_content($days_p1),
                ];
                return ['a' => $nouns, 'b' => $readings, 'c' => $days ];
            break;

            default:
                throw new \Exception('app not found');
            break;
        }
    }
    protected function pull_math_data_by_app($app)
    {
        if( $this->is_paid_active() == 0 )
        {
            return [];
        }
        switch($app)
        {
            case 'MATHBORANA':
                $activities_p1 = Mathboranacontent::where('section', 1)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p2 = Mathboranacontent::where('section', 2)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p3 = Mathboranacontent::where('section', 3)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p4 = Mathboranacontent::where('section', 4)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities = [
                    'p1' => $this->format_all_web_content($activities_p1),
                    'p2' => $this->format_all_web_content($activities_p2),
                    'p3' => $this->format_all_web_content($activities_p3),
                    'p4' => $this->format_all_web_content($activities_p4),
                ];
                return [ 'a' => $activities ];
            break;

            case 'MATHSOMALI':
                $activities_p1 = Mathsomalicontent::where('section', 1)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p2 = Mathsomalicontent::where('section', 2)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p3 = Mathsomalicontent::where('section', 3)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p4 = Mathsomalicontent::where('section', 4)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities = [
                    'p1' => $this->format_all_web_content($activities_p1),
                    'p2' => $this->format_all_web_content($activities_p2),
                    'p3' => $this->format_all_web_content($activities_p3),
                    'p4' => $this->format_all_web_content($activities_p4),
                ];
                return [ 'a' => $activities ];
            break;

            case 'MATHMAASAI':
                $activities_p1 = Mathmaasaicontent::where('section', 1)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p2 = Mathmaasaicontent::where('section', 2)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p3 = Mathmaasaicontent::where('section', 3)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities_p4 = Mathmaasaicontent::where('section', 4)
                    ->orderBy('id', 'asc')
                    ->get();
                $activities = [
                    'p1' => $this->format_all_web_content($activities_p1),
                    'p2' => $this->format_all_web_content($activities_p2),
                    'p3' => $this->format_all_web_content($activities_p3),
                    'p4' => $this->format_all_web_content($activities_p4),
                ];
                return [ 'a' => $activities ];
            break;

            default:
                throw new \Exception('app not found');
            break;
        }
    }
    protected function format_all_web_content($data)
    {
        if( $this->is_paid_active() == 0 )
        {
            return [];
        }
        
        if(is_null($data))
        {
            return [];
        }
        $data = $data->toArray();

        $rtn = [];
        foreach( $data as $_data ):
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
    public function lang_videos(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), ['app' => 'required|string']);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Error: No app specified',
                    'errors' => [],
                ], 403);
            }
            $input = $req->all();
            $locale = $this->extract_locale($input['app']);
            $data = Languagevideo::select('video')
                ->where('locale', $locale)
                ->orderBy('id', 'asc')
                ->get();
            $video = [ 'abc' => null, 'abcd' => null ];
            if( !is_null( $data ) )
            {
                $video = $this->formatLangVideos($data);
            }
            return response([
                'status' => 200,
                'message' => null,
                'data' => $video,
                'active' => $this->is_paid_active(),
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
    public function math_videos(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), ['app' => 'required|string']);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Error: No app specified',
                    'errors' => [],
                ], 403);
            }
            $input = $req->all();
            $locale = $this->extract_locale($input['app']);
            $data = Mathvideo::select('video')
                ->where('locale', $locale)
                ->first();
            $video = [ 'abc' => null, 'abcd' => null ];
            if( !is_null( $data ) )
            {
                $video = [
                    'abc' => route('stream', ['file' => $data->video]),
                ];
            }
            if( $this->is_paid_active() == 0 )
            {
                $video = [];
            }
            return response([
                'status' => 200,
                'message' => null,
                'data' => $video,
                'active' => $this->is_paid_active(),
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
        }
    }

    public function env_videos(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), ['app' => 'required|string']);
            if( $validator->fails() ){
                return response([
                    'status' => 201,
                    'message' => 'Error: No app specified',
                    'errors' => [],
                ], 403);
            }
            $input = $req->all();
            $locale = $this->extract_locale($input['app']);
            $data = Environmentvideo::select('video')
                ->where('locale', $locale)
                ->first();
            $video = [ 'abc' => null, 'abcd' => null ];
            if( !is_null( $data ) )
            {
                $video = [
                    'abc' => route('stream', ['file' => $data->video]),
                ];
            }
            if( $this->is_paid_active() == 0 )
            {
                $video = [];
            }
            return response([
                'status' => 200,
                'message' => null,
                'data' => $video,
                'active' => $this->is_paid_active(),
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
        }
    }
    protected function formatLangVideos($data)
    {
        if( $this->is_paid_active() == 0 )
        {
            return [];
        }
        $data = $data->toArray();
        $rtn = [];
        foreach( $data as $_data ):
            $video = route('stream', ['file' => $_data['video']]);
            array_push($rtn, $video);
        endforeach;

        return [ 'abc' => $rtn[0], 'abcd' => $rtn[1] ];
    }
    protected function extract_locale($app)
    {
        switch($app)
        {
            case 'ENGBORANA':
                return 'Borana';
            break;

            case 'ENGSOMALI':
                return 'Somali';
            break;

            case 'ENGMAASAI':
                return 'Maasai';
            break;

            case 'MATHBORANA':
                return 'Borana';
            break;

            case 'MATHSOMALI':
                return 'Somali';
            break;

            case 'MATHMAASAI':
                return 'Maasai';
            break;

            case 'ENVBORANA':
                return 'Borana';
            break;

            case 'ENVSOMALI':
                return 'Somali';
            break;

            case 'ENVMAASAI':
                return 'Maasai';
            break;

            default:
                throw new \Exception('app not found');
            break;
        }
    }
}
