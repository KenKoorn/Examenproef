<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CohortModules extends Model
{
    protected $fillable = ['cohort_id', 'module_id'];

    public function cohort(){
        return $this->belongsTo(Cohort::class);
    }

    public function module(){
        return $this->belongsTo(Module::class);
    }
}
