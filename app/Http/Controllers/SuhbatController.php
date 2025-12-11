<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Suhbat;

class SuhbatController extends BaseCrudController
{
    protected string $model = Suhbat::class;


    public function index(Request $request)
    {

        $query = ($this->model)::query();

        if ($request->filled('search')) {
            $search = $request->search;
            $searchable = ['name', 'id', 'profession'];

            $query->where(function ($q) use ($searchable, $search) {
                foreach ($searchable as $column) {
                    $q->orWhere($column, 'like', "%{$search}%");
                }
            });
        }

        $multiFilters = [
            'organization_id',
            'creater_id',
        ];

        foreach ($multiFilters as $filter) {
            if ($request->filled($filter)) {
                $query->whereIn($filter, $request->$filter);
            }
        }

        return $query->paginate(10)->withQueryString();
    }

    public function store(Request $request)
    {
        $request->merge([
            'creater_id' => $request->user()->id
        ]);

        return $this->model::create($request->all());
    }
}
