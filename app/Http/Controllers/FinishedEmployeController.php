<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;

class FinishedEmployeController extends BaseCrudController
{
    protected string $model = Employe::class;

    public function index()
    {
        return $this->model::whereNotNull(['buyruq_raqami', 'ishga_qabul_kuni', 'buyruq_sanasi'])->get();
    }
}
