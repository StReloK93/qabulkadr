<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
class OrganizationController extends BaseCrudController
{
    protected string $model = Organization::class;

    
}
