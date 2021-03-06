<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mathsomalicontent extends Model
{
    use HasFactory;

    protected $fillable = [
        'section',
        'image',
        'label',
        'btn_left',
        'btn_right',
        'sound_left',
        'sound_right',
        'is_pair',
        'pair_image',
        'pair_label',
        'pair_btn_left',
        'pair_btn_right',
        'pair_sound_left',
        'pair_sound_right',
    ];
}
