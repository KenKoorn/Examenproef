<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $fillable = ['name', 'description', 'image', 'year_id'];

    public function year(){
        return $this->belongsTo(Year::class);
    }

    public function lessonPlans(){
        return $this->hasMany(LessonPlan::class);
    }

    public function cohortModules(){
        return $this->hasMany(CohortModules::class);
    }
}
