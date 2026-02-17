<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LessonPlan extends Model
{
    protected $fillable = ['name', 'description', 'subject_id', 'module_id'];
}
