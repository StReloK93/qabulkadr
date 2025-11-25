<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Yoriqnoma extends Model
{
    use HasFactory;

    public $timestamps = false;


    protected $fillable = [
        'title',
        'text',
        'colspan',
    ];


    protected $casts = [
        'colspan' => 'integer'
    ];
}
