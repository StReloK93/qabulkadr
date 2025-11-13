<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
use Carbon\Carbon;
class EmployeController extends BaseCrudController
{
    protected string $model = Employe::class;


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
}
