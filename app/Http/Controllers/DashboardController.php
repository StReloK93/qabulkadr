<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Employe;
class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {

        $currentMonth = Carbon::parse($request->month)->timezone('Asia/Tashkent');


        $currentMonthEmployes = Employe::whereYear('created_at', $currentMonth->year)
            ->whereMonth('created_at', $currentMonth->month)
            ->get();
        return response()->json([
            'message' => 'Invokable controller ishladi',
            'currentMonth' => $currentMonthEmployes->count(),
        ]);
    }
}
