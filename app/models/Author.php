<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Author extends Eloquent
{
    protected $fillable = [
        'name'
    ];

    public $timestamp = false;
}
