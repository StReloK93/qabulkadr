<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Suhbat extends Model
{
    use HasFactory;


    protected $casts = [
        'organization_id' => 'integer',
        'creater_id' => 'integer',
        'suhbatsarlavha_id' => 'integer',
    ];

    protected $fillable = [
        'name',
        'phone',
        'organization_id',
        'suhbatsarlavha_id',
        'profession',
        'creater_id',
    ];

    protected $with = ['organization', 'creater', 'suhbatsarlavha'];


    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }


    public function suhbatsarlavha()
    {
        return $this->belongsTo(SuhbatSarlavha::class);
    }
    public function creater()
    {
        return $this->belongsTo(User::class, 'creater_id', 'id')->select('name', 'id', 'phone');
    }
}
