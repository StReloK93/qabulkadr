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
    Route::apiResource('crud/finished_employes', \App\Http\Controllers\FinishedEmployeController::class);

    Route::apiResource('crud/employes', \App\Http\Controllers\EmployeController::class);
    Route::post('crud/employes/update-status/{employe_id}', [\App\Http\Controllers\EmployeController::class, 'updateStatus']);
    Route::post('crud/employes/success/{employe_id}', [\App\Http\Controllers\EmployeController::class, 'success']);
    // Route::post('crud/employes/get-success', [\App\Http\Controllers\EmployeController::class, 'getSuccess']);



    Route::apiResource('crud/organization', \App\Http\Controllers\OrganizationController::class);
    Route::apiResource('crud/cause', \App\Http\Controllers\CauseController::class);
    Route::apiResource('crud/work_environment', \App\Http\Controllers\WorkEnvironmentController::class);
    Route::apiResource('crud/education_level', \App\Http\Controllers\EducationLevelController::class);
    Route::apiResource('crud/disability_type', \App\Http\Controllers\DisabilityTypeController::class);
    Route::apiResource('crud/quot_type', \App\Http\Controllers\QuotTypeController::class);
    Route::apiResource('crud/status', \App\Http\Controllers\StatusController::class);
    Route::apiResource('crud/yoriqnoma', \App\Http\Controllers\YoriqnomaController::class);


});
