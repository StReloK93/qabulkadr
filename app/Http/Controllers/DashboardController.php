<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Employe;
use App\Models\Status;
use App\Models\Organization;
use App\Models\Cause;
use App\Models\QuotType;
class DashboardController extends Controller
{
	public function __invoke()
	{


		$activeEmployes = Employe::where(function ($q) {
			$q->whereNull('buyruq_raqami')
				->orWhereNull('ishga_qabul_kuni')
				->orWhereNull('buyruq_sanasi');
		})->get();


		$finishedEmployes = Employe::where(function ($q) {
			$q->whereNotNull(['buyruq_raqami', 'ishga_qabul_kuni', 'buyruq_sanasi']);
		})->get();


		return response()->json([
			'statuses' => $this->groupBy(Status::all(), $activeEmployes, 'status_id'),
			'causes' => $this->groupBy(Cause::all(), $activeEmployes, 'cause_id'),
			'organizations' => $this->groupBy(Organization::all(), $activeEmployes, 'organization_id'),
			'month' => $this->byMonthArray($activeEmployes),
			'causes_finished' => $this->groupBy(Cause::all(), $finishedEmployes, 'cause_id'),
			'month_finished' => $this->byMonthArray($finishedEmployes),
			'quot_type_finished' => $this->groupBy(QuotType::all(), $finishedEmployes, 'quot_type_id'),
		]);
	}



	public function groupBy($selectedModel, $activeEmployes, $type)
	{
		$group = $activeEmployes->groupBy($type)->map(fn($items) => $items->count());

		foreach ($selectedModel as $stat) {
			$stat->count = isset($group[$stat->id]) ? $group[$stat->id] : 0;
		}

		return $selectedModel;
	}

	public function byMonthArray($activeEmployes)
	{
		return $activeEmployes
			->groupBy(fn($item) => optional($item->created_at)->format('Y-m'))
			->map(fn($group, $key) => [
				'month' => $key,
				'count' => $group->count(),
			])
			->sortBy('month')
			->values()
			->toArray();

	}
}


