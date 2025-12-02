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


    Route::get('crud/finished_employes/all', [\App\Http\Controllers\FinishedEmployeController::class, 'all']);
    Route::get('crud/employes/all', [\App\Http\Controllers\EmployeController::class, 'all']);
    Route::get('crud/organization/all', [\App\Http\Controllers\OrganizationController::class, 'all']);
    Route::get('crud/cause/all', [\App\Http\Controllers\CauseController::class, 'all']);
    Route::get('crud/work_environment/all', [\App\Http\Controllers\WorkEnvironmentController::class, 'all']);
    Route::get('crud/education_level/all', [\App\Http\Controllers\EducationLevelController::class, 'all']);
    Route::get('crud/disability_type/all', [\App\Http\Controllers\DisabilityTypeController::class, 'all']);
    Route::get('crud/quot_type/all', [\App\Http\Controllers\QuotTypeController::class, 'all']);
    Route::get('crud/status/all', [\App\Http\Controllers\StatusController::class, 'all']);
    Route::get('crud/yoriqnoma/all', [\App\Http\Controllers\YoriqnomaController::class, 'all']);



    Route::apiResource('crud/finished_employes', \App\Http\Controllers\FinishedEmployeController::class);

    Route::apiResource('crud/employes', \App\Http\Controllers\EmployeController::class);
    Route::post('crud/employes/update-status/{employe_id}', [\App\Http\Controllers\EmployeController::class, 'updateStatus']);
    Route::post('crud/employes/success/{employe_id}', [\App\Http\Controllers\EmployeController::class, 'success']);


    Route::apiResource('crud/organization', \App\Http\Controllers\OrganizationController::class);
    Route::apiResource('crud/cause', \App\Http\Controllers\CauseController::class);
    Route::apiResource('crud/work_environment', \App\Http\Controllers\WorkEnvironmentController::class);
    Route::apiResource('crud/education_level', \App\Http\Controllers\EducationLevelController::class);
    Route::apiResource('crud/disability_type', \App\Http\Controllers\DisabilityTypeController::class);
    Route::apiResource('crud/quot_type', \App\Http\Controllers\QuotTypeController::class);
    Route::apiResource('crud/status', \App\Http\Controllers\StatusController::class);
    Route::apiResource('crud/yoriqnoma', \App\Http\Controllers\YoriqnomaController::class);




});
