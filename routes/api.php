<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\SetupController;
use App\Http\Controllers\Api\AccountController;
use App\Http\Controllers\Api\CallbackController;
use App\Http\Controllers\Api\StatController;
use App\Http\Controllers\Api\SubscriptionController;
use App\Http\Controllers\Api\MathController;
use App\Http\Controllers\Api\MathBoranaController;
use App\Http\Controllers\Api\StreamController;
use App\Http\Controllers\Api\MathSomaliController;
use App\Http\Controllers\Api\MathMaasaiController;
use App\Http\Controllers\Api\ApplistController;
use App\Http\Controllers\Api\EnvironmentController;
use App\Http\Controllers\Api\EnvVideoController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\LanguageVideoController;
use App\Http\Controllers\Api\LanguageBoranaController;
use App\Http\Controllers\Api\LanguageSomaliController;
use App\Http\Controllers\Api\LanguageMaasaiController;
use App\Http\Controllers\Api\WebDataController;

/** stream */
Route::prefix('/downloads')->group( function() {
    Route::get('/get/rpt/file/{file}', [StreamController::class, 'stream'])->name('stream');
});
/** admins */
Route::prefix('/users')->group( function() {
    Route::post('/signup', [AdminController::class, 'signup']);
    Route::post('/signin', [AdminController::class, 'signin']);
    Route::post('/request/reset/{email}', [AdminController::class, 'reqreset']);
    Route::post('/verify/{code}/reset/{email}', [AdminController::class, 'verifyreset']);
    Route::post('/finish/reset', [AdminController::class, 'finishreset']);
    Route::middleware('auth:api')->group( function(){
        Route::post('/update/info', [AdminController::class, 'update_info']);
        Route::post('/update/pwd', [AdminController::class, 'update_pwd']);
        Route::post('/update/pic', [AdminController::class, 'update_pic']);
    });
});
/** Setup */
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/setups')->group( function() {
        Route::post('/set', [SetupController::class, 'set']);
        Route::get('/find', [SetupController::class, 'find']);
        Route::get('/refresh', [SetupController::class, 'refresh']);
    });
});
/** Apps list */
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/appslist')->group( function() {
        Route::post('/add', [ApplistController::class, 'add']);
        Route::get('/edit/{id}', [ApplistController::class, 'edit']);
        Route::get('/findall', [ApplistController::class, 'findall']);
        Route::get('/drop/{id}', [ApplistController::class, 'refresh']);
    });
});
/** child accounts */
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/children')->group( function() {
        Route::post('/add', [AccountController::class, 'add']);
        Route::post('/edit/{id}', [AccountController::class, 'edit']);
        Route::get('/find/{id}', [AccountController::class, 'find']);
        Route::get('/findall', [AccountController::class, 'findall']);
        Route::put('/drop/{id}', [AccountController::class, 'drop']);
    });
});
/** subscriptions */
Route::prefix('/subscriptions')->group( function() {
    Route::post('/register', [SubscriptionController::class, 'register']);
    Route::post('/returning', [SubscriptionController::class, 'returning']);
    Route::post('/is/expired', [SubscriptionController::class, 'is_expired']);
});

Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/subscriptions')->group( function() {
        Route::post('/pay_mpesa', [SubscriptionController::class, 'pay_mpesa']);
        Route::post('/renew/account', [SubscriptionController::class, 'renew_acc']);
        Route::post('/renew/done', [SubscriptionController::class, 'renew_done']);
        Route::post('/is/paid', [SubscriptionController::class, 'is_paid_acc']);
        Route::post('/pay_card', [SubscriptionController::class, 'pay_card']);
    });
});
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/webdata')->group( function() {
        Route::post('/lang/videos', [WebDataController::class, 'lang_videos']);
        Route::post('/lang/data', [WebDataController::class, 'lang_data']);
        Route::post('/math/videos', [WebDataController::class, 'math_videos']);
        Route::post('/env/videos', [WebDataController::class, 'env_videos']);
        Route::post('/math/data', [WebDataController::class, 'math_data']);
    });
});
/** Math */
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/math')->group( function() {
        /**groups */
        Route::post('/group/add', [MathController::class, 'group_add']);
        Route::post('/group/edit/{id}', [MathController::class, 'group_edit']);
        Route::get('/group/findall', [MathController::class, 'group_findall']);
        Route::post('/group/drop', [MathController::class, 'group_drop']);
        /** sections */
        Route::post('/section/add', [MathController::class, 'section_add']);
        Route::post('/section/edit/{id}', [MathController::class, 'section_edit']);
        Route::get('/section/findall', [MathController::class, 'section_findall']);
        Route::post('/section/drop', [MathController::class, 'section_drop']);
        /** video */
        Route::post('/video/add', [MathBoranaController::class, 'video_add']);
        Route::post('/video/edit/{id}', [MathBoranaController::class, 'video_edit']);
        Route::get('/video/findall', [MathBoranaController::class, 'video_findall']);
        Route::post('/video/drop', [MathBoranaController::class, 'video_drop']);

        Route::prefix('/borana')->group( function() {
            /** content */
            Route::post('/content/add', [MathBoranaController::class, 'content_add']);
            Route::post('/content/edit/{id}', [MathBoranaController::class, 'content_edit']);
            Route::get('/content/findall', [MathBoranaController::class, 'content_findall']);
            Route::post('/drop/content', [MathBoranaController::class, 'content_drop']);
            /** quiz */
            Route::post('/quiz/add', [MathBoranaController::class, 'quiz_add']);
            Route::post('/quiz/edit/{id}', [MathBoranaController::class, 'quiz_edit']);
            Route::get('/quiz/findall', [MathBoranaController::class, 'quiz_findall']);
            Route::post('/quiz/drop', [MathBoranaController::class, 'quiz_drop']);
        });
        Route::prefix('/somali')->group( function() {
            /** content */
            Route::post('/content/add', [MathSomaliController::class, 'content_add']);
            Route::post('/content/edit/{id}', [MathSomaliController::class, 'content_edit']);
            Route::get('/content/findall', [MathSomaliController::class, 'content_findall']);
            Route::post('/drop/content', [MathSomaliController::class, 'content_drop']);
            /** quiz */
            Route::post('/quiz/add', [MathSomaliController::class, 'quiz_add']);
            Route::post('/quiz/edit/{id}', [MathSomaliController::class, 'quiz_edit']);
            Route::get('/quiz/findall', [MathSomaliController::class, 'quiz_findall']);
            Route::post('/quiz/drop', [MathSomaliController::class, 'quiz_drop']);
        });
        Route::prefix('/maasai')->group( function() {
            /** content */
            Route::post('/content/add', [MathMaasaiController::class, 'content_add']);
            Route::post('/content/edit/{id}', [MathMaasaiController::class, 'content_edit']);
            Route::get('/content/findall', [MathMaasaiController::class, 'content_findall']);
            Route::post('/drop/content', [MathMaasaiController::class, 'content_drop']);
            /** quiz */
            Route::post('/quiz/add', [MathMaasaiController::class, 'quiz_add']);
            Route::post('/quiz/edit/{id}', [MathMaasaiController::class, 'quiz_edit']);
            Route::get('/quiz/findall', [MathMaasaiController::class, 'quiz_findall']);
            Route::post('/quiz/drop', [MathMaasaiController::class, 'quiz_drop']);
        });
    });
});

/** Environment */
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/environment')->group( function() {
        /**groups */
        Route::post('/group/add', [EnvironmentController::class, 'group_add']);
        Route::post('/group/edit/{id}', [EnvironmentController::class, 'group_edit']);
        Route::get('/group/findall', [EnvironmentController::class, 'group_findall']);
        Route::post('/group/drop', [EnvironmentController::class, 'group_drop']);
        /** video */
        Route::post('/video/add', [EnvVideoController::class, 'video_add']);
        Route::post('/video/edit/{id}', [EnvVideoController::class, 'video_edit']);
        Route::get('/video/findall', [EnvVideoController::class, 'video_findall']);
        Route::post('/video/drop', [EnvVideoController::class, 'video_drop']);
    });
});

/** Language */
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/language')->group( function() {
        /**groups */
        Route::post('/group/add', [LanguageController::class, 'group_add']);
        Route::post('/group/edit/{id}', [LanguageController::class, 'group_edit']);
        Route::get('/group/findall', [LanguageController::class, 'group_findall']);
        Route::post('/group/drop', [LanguageController::class, 'group_drop']);
        /** sections */
        Route::post('/section/add', [LanguageController::class, 'section_add']);
        Route::post('/section/edit/{id}', [LanguageController::class, 'section_edit']);
        Route::get('/section/findall', [LanguageController::class, 'section_findall']);
        Route::post('/section/drop', [LanguageController::class, 'section_drop']);
        /** video */
        Route::post('/video/add', [LanguageVideoController::class, 'video_add']);
        Route::post('/video/edit/{id}', [LanguageVideoController::class, 'video_edit']);
        Route::get('/video/findall', [LanguageVideoController::class, 'video_findall']);
        Route::post('/video/drop', [LanguageVideoController::class, 'video_drop']);

        Route::prefix('/borana')->group( function() {
            /** content */
            Route::post('/content/add', [LanguageBoranaController::class, 'content_add']);
            Route::post('/content/edit/{id}', [LanguageBoranaController::class, 'content_edit']);
            Route::get('/content/findall', [LanguageBoranaController::class, 'content_findall']);
            Route::post('/drop/content', [LanguageBoranaController::class, 'content_drop']);
        });
        Route::prefix('/somali')->group( function() {
            /** content */
            Route::post('/content/add', [LanguageSomaliController::class, 'content_add']);
            Route::post('/content/edit/{id}', [LanguageSomaliController::class, 'content_edit']);
            Route::get('/content/findall', [LanguageSomaliController::class, 'content_findall']);
            Route::post('/drop/content', [LanguageSomaliController::class, 'content_drop']);
        });
        Route::prefix('/maasai')->group( function() {
            /** content */
            Route::post('/content/add', [LanguageMaasaiController::class, 'content_add']);
            Route::post('/content/edit/{id}', [LanguageMaasaiController::class, 'content_edit']);
            Route::get('/content/findall', [LanguageMaasaiController::class, 'content_findall']);
            Route::post('/drop/content', [LanguageMaasaiController::class, 'content_drop']);
        });
    });
});
/** statistics */
Route::middleware(['auth:api'])->group( function(){
    Route::prefix('/statistics')->group( function() {
        /** weekly */
        Route::get('/dashboard', [StatController::class, 'dashboard']);
    });
});

/** callback */
Route::any('/input-streams/pay/c2b', [CallbackController::class, 'c2b'])->name('callback');
Route::any('/input-streams/pay/express', [CallbackController::class, 'express'])->name('express');
Route::any('/input-streams/status/{order}', [CallbackController::class, 'status_check'])->name('status_check');

/** fallback */
Route::fallback(function () {
    return response()->json(['status' => 404,'softbct_error' => 'Not Found!'], 404);
});
Route::get('/', function (Request $request) {
    return response(['status' => 499, 'message' => 'point of no return']);
});
Route::fallback(function () {
    return response(['status'=> 499, 'message' => 'oops! Congrats! you\'ve reached point of no return']);
});