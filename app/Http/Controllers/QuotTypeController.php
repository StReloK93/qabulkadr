<?php

namespace App\Http\Controllers;

use App\Models\QuotType;
use Illuminate\Http\Request;

class QuotTypeController extends BaseCrudController
{
    protected string $model = QuotType::class;
}
