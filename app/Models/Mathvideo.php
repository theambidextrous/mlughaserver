<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mathvideo extends Model
{
    use HasFactory;

    protected $fillable = [
        'group',
        'locale',
        'video',
    ];
}
