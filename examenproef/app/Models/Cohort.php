<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cohort extends Model
{
    protected $fillable = ['year'];

    public function cohortModules(){
        return $this->hasMany(CohortModules::class);
    }
}
