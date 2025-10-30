<?php

namespace App\Http\Controllers;

use App\Models\WorkEnvironment;
use Illuminate\Http\Request;

class WorkEnvironmentController extends BaseCrudController
{
    protected string $model = WorkEnvironment::class;
}
