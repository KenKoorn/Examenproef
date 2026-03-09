<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = ['name', 'description', 'teachers'];

    protected $casts = [
        'teachers' => 'array'
    ];

    public function lessonPlans(){
        return $this->hasMany(LessonPlan::class);
    }
}
