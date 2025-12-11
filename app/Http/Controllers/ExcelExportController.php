<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\EmployeExport;
use App\Exports\FinishedEmployeExport;
use App\Exports\SuhbatsExport;

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

    public function suhbat(Request $request)
    {
        return (new SuhbatsExport($request))->download('Suhbatdagi.xlsx');
    }
}
