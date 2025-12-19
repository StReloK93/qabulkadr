<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Employe;
use App\Models\Status;
class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $currentDate = Carbon::parse($request->month)->timezone('Asia/Tashkent');


        $currentMonthEmployes = Employe::whereYear('created_at', $currentDate->year)
            ->whereMonth('created_at', $currentDate->month)
            ->get();

        $statuses = Status::all();

        $activeEmployes = Employe::where(function ($q) {
            $q->whereNull('buyruq_raqami')
                ->orWhereNull('ishga_qabul_kuni')
                ->orWhereNull('buyruq_sanasi');
        })->get();



        $groupByStatus = $activeEmployes->groupBy('status_id')->map(fn($items) => $items->count());
        foreach ($statuses as $stat) {
            $stat->employes_count = $groupByStatus[$stat->id];
        }

        return response()->json([
            'currentMonth' => $currentMonthEmployes,
            'active' => $activeEmployes,
            'statuses' => $statuses
        ]);
    }
}
