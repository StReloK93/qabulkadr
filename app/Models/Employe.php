<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    use HasFactory;

    protected $with = ['organization'];
    protected $fillable = [
        'full_name',
        'birth_date',
        'education_level_id',
        'university',
        'cause_id',
        'organization_id',
        'division',
        'profession',

        'work_environment_id',
        'phone',
        'company',
        'disability_type_id',
        'quot_type_id',
        'status',
    ];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

}
