<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Languagesection extends Model
{
    use HasFactory;

    protected $fillable = [
        'group',
        'name',
        'description',
    ];
}
