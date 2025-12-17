<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rahbar;
class RahbarController extends BaseCrudController
{
    protected string $model = Rahbar::class;

    public function all()
    {
        return $this->model::whereIn('id', [1,2])->get();
    }


    public function destroy($id){}
}
