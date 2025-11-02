<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('login', [AuthController::class, 'login']);


Route::controller(AuthController::class)
->middleware('auth:sanctum')
->group(function () {
    Route::get('user', 'user');
    Route::post('logout', 'logout');
});


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('crud/employes', \App\Http\Controllers\EmployeController::class);

    Route::apiResource('crud/organization', \App\Http\Controllers\OrganizationController::class);
    Route::apiResource('crud/cause', \App\Http\Controllers\CauseController::class);
    Route::apiResource('crud/work_environment', \App\Http\Controllers\WorkEnvironmentController::class);
    Route::apiResource('crud/education_level', \App\Http\Controllers\EducationLevelController::class);
    Route::apiResource('crud/disability_type', \App\Http\Controllers\DisabilityTypeController::class);
    Route::apiResource('crud/quot_type', \App\Http\Controllers\QuotTypeController::class);
});
