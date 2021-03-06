<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mathboranatest extends Model
{
    use HasFactory;

    protected $fillable = [
        'group',
        'label',
        'label_inner',
        'question_label',
        'question_sound',
        'question_sound_b',
        'image_left',
        'image_right',
        'opt_left',//e.g. A
        'opt_right',//e.g. B
        'correct',
        'score',
    ];
}
