<?php

use App\Http\Controllers\Api\ExerciseController;
use App\Http\Controllers\Api\MuscleGroupController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
use App\Http\Controllers\API\PassportAuthController;

Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);
Route::get('exercises', [ExerciseController::class, 'index']);


Route::middleware('auth:api')->group(function () {
    Route::post('logout', [PassportAuthController::class, 'logout']);
    Route::get('get-user', [PassportAuthController::class, 'userInfo']);
    Route::post('change-password', [PassportAuthController::class, 'changePassword']);

    Route::get('muscleGroup/index', [MuscleGroupController::class, 'index']);

    Route::resource('exercises', ExerciseController::class)->except(['index']);
});
