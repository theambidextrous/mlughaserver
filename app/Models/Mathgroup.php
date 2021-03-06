<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mathgroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'label',
        'image',
    ];
}
