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
