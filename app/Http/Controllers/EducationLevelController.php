<?php

namespace App\Http\Controllers;

use App\Models\EducationLevel;
use Illuminate\Http\Request;

class EducationLevelController extends BaseCrudController
{
    protected string $model = EducationLevel::class;
}
