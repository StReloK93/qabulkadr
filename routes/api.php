<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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

Route::post('login', [AuthController::class, 'login']);


Route::controller(AuthController::class)
->middleware('auth:sanctum')
->group(function () {
    Route::get('user', 'user');
    Route::post('logout', 'logout');
});


Route::middleware('auth:sanctum')->group(function () {
    // Route::apiResource('crud/employes', \App\Http\Controllers\EmployeController::class);
    Route::apiResource('crud/organizations', \App\Http\Controllers\OrganizationController::class);
    Route::apiResource('crud/causes', \App\Http\Controllers\CauseController::class);
});
