<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LessonPlan extends Model
{
    protected $fillable = ['name', 'description', 'subject_id', 'module_id'];

    public function subject(){
        return $this->belongsTo(Subject::class);
    }

    public function module(){
        return $this->belongsTo(Module::class);
    }
}
