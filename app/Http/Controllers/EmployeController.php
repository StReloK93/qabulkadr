<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
class EmployeController extends Controller
{

    public function index()
    {
        return Employe::all();
    }
    public function store(Request $request,){
        $employe = Employe::create($request->all());
        return response()->json($employe, 201);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
