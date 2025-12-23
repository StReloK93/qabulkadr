<?php

namespace App\Http\Controllers;

use Hash;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends BaseCrudController
{
    protected string $model = User::class;



    public function store(Request $request)
    {
        $request->merge([
            'password' => Hash::make('zzzz1111*'),
        ]);

        return $this->model::create($request->all());
    }

}
