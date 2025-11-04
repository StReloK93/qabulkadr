<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    use HasFactory;

    protected $casts = [
        'education_level_id' => 'integer',
        'organization_id' => 'integer',
        'cause_id' => 'integer',
        'work_environment_id' => 'integer',
        'disability_type_id' => 'integer',
        'quot_type_id' => 'integer',
        'company' => 'boolean',
        // 'birth_date' => 'datetime:d.m.Y',
    ];
    protected $with = ['organization', 'education_level', 'cause'];
    protected $fillable = [
        'full_name',
        'cause_text',
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


    public function education_level()
    {
        return $this->belongsTo(EducationLevel::class);
    }

    public function cause()
    {
        return $this->belongsTo(Cause::class);
    }

}
