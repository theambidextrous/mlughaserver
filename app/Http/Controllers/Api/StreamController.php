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

class StreamController extends Controller
{
    
    public function stream($file)
    {
        $filename = ('app/cls/trt/content/' . $file);
        return response()->download(storage_path($filename), null, [], null);
    }
}
