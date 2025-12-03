<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
use Carbon\Carbon;
class EmployeController extends BaseCrudController
{
    protected string $model = Employe::class;

    public function index(Request $request)
    {

        $query = ($this->model)::query();

        if ($request->filled('search')) {
            $search = $request->search;
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

        return $query->where(function ($q) {
            $q->whereNull('buyruq_raqami')
                ->orWhereNull('ishga_qabul_kuni')
                ->orWhereNull('buyruq_sanasi');
        })->paginate(10)->withQueryString();
    }

    public function getSuccess()
    {
        return $this->model::whereNotNull(['buyruq_raqami', 'ishga_qabul_kuni', 'buyruq_sanasi'])->get();
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

    public function update(Request $request, $id)
    {
        $item = $this->model::findOrFail($id);
        $request->merge([
            'birth_date' => Carbon::parse($request->birth_date)
                ->timezone('Asia/Tashkent')
                ->format('Y-m-d'),
        ]);
        $item->update($request->all());
        return $item;
    }


    public function updateStatus(Request $request, $employe_id)
    {
        $item = $this->model::findOrFail($employe_id);
        $item->status_id = $request->status_id;
        $item->save();
    }

    public function success(Request $request, $employe_id)
    {
        $item = $this->model::findOrFail($employe_id);

        $item->buyruq_sanasi = $request->buyruq_sanasi;
        $item->ishga_qabul_kuni = $request->ishga_qabul_kuni;
        $item->buyruq_raqami = $request->buyruq_raqami;
        $item->save();
    }
}
