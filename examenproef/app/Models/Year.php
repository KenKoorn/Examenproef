<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Year extends Model
{
    protected $fillable = ['year', 'fase', 'description'];

    public function modules(){
        return $this->hasMany(Module::class);
    }
}
