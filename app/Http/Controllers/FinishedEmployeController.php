<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
use Carbon\Carbon;

class FinishedEmployeController extends BaseCrudController
{
    protected string $model = Employe::class;

    public function index(Request $request)
    {
        $query = ($this->model)::query();

        // Qidiruv
        if ($request->filled('search')) {
            $search = $request->search;
            // Qidirish kerak bo‘lgan ustunlar
            $searchable = ['full_name', 'id', 'cause_text'];

            $query->where(function ($q) use ($searchable, $search) {
                foreach ($searchable as $column) {
                    $q->orWhere($column, 'like', "%{$search}%");
                }
            });
        }

        $multiFilters = [
            'organization_id',
            'education_level_id',
            'rahbar_id',
            'cause_id',
            'work_environment_id',
            'disability_type_id',
            'quot_type_id',
            'status_id',
        ];

        foreach ($multiFilters as $filter) {
            if ($request->filled($filter)) {
                $query->whereIn($filter, $request->$filter);
            }
        }

        /** -------------------------
         *   3) SIMPLE EQUAL FILTER
         * ------------------------ */
        if ($request->filled('company')) {
            $query->where('company', $request->company);
        }

        if ($request->filled('created_at')) {
            $time = Carbon::parse($request->created_at);
            dd($time);
            $query->whereMonth('created_at', $request->created_at);
        }


        return $query->whereNotNull(['buyruq_raqami', 'ishga_qabul_kuni', 'buyruq_sanasi'])->paginate(10)->withQueryString();
    }

    public function store(Request $request)
    {
        $request->merge([
            'birth_date' => Carbon::parse($request->birth_date)
                ->timezone('Asia/Tashkent')
                ->format('Y-m-d'),
            'creater_id' => $request->user()->id
        ]);

        return $this->model::create($request->all());
    }
}
