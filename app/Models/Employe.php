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
        'creater_id' => 'integer',
        'quot_type_id' => 'integer',
        'status_id' => 'integer',
        'company' => 'boolean',
    ];
    protected $with = ['organization', 'education_level', 'work_environment', 'cause', 'status', 'creater'];
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
        'status_id',
        'creater_id',

        'buyruq_sanasi',
        'ishga_qabul_luni',
        'buyruq_raqami'
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

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function work_environment()
    {
        return $this->belongsTo(WorkEnvironment::class);
    }

    public function creater()
    {
        return $this->belongsTo(User::class, 'creater_id', 'id')->select('name', 'id');
    }



}
