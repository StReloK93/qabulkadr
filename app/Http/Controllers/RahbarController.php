<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rahbar;
class RahbarController extends BaseCrudController
{
    protected string $model = Rahbar::class;
}
