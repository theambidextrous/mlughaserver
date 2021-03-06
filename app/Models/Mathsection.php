<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mathsection extends Model
{
    use HasFactory;

    protected $fillable = [
        'group',
        'name',
        'description',
    ];
}
