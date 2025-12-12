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
    ];

    protected $fillable = [
        'name',
        'phone',
        'organization_id',
        'cause',
        'profession',
        'creater_id',
    ];

    protected $with = ['organization', 'creater'];


    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function creater()
    {
        return $this->belongsTo(User::class, 'creater_id', 'id')->select('name', 'id');
    }
}
