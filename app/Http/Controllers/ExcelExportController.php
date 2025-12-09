<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\EmployeExport;
use App\Exports\FinishedEmployeExport;
class ExcelExportController extends Controller
{
    public function employes(Request $request)
    {
        return (new EmployeExport($request))->download('Jarayondagi xodimlar.xlsx');
    }

    public function finished_employes(Request $request)
    {
        return (new FinishedEmployeExport($request))->download('Jarayondagi xodimlar.xlsx');
    }
}
