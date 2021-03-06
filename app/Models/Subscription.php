<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_no',
        'cost',
        'pay_method',
        'reference',
        'paid_amount',
        'pay_log',
        'is_paid',
    ];
}
