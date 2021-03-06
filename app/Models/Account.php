<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
   
    protected $fillable = [
        'account_no',
        'account_name',
        'address',
        'county',
        'zip',
        'age',
        'g_email',
        'g_phone',
        'has_paid',
        'period_from',
        'period_to',
        'app',
        'is_active',
    ];
}
