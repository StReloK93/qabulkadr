<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cause;
class CauseController extends BaseCrudController
{
    protected string $model = Cause::class;
}
