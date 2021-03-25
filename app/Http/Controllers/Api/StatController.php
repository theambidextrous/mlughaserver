<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Validator;
use Storage;
use Config;
use Carbon\Carbon;
use PDF;


use App\Models\Setup;
use App\Models\Subscription;
use App\Models\Account;
use App\Models\User;

class StatController extends Controller
{
    public function dashboard()
    {
        
        $stat = [
            'msub' => 'KES. ' . $this->find_subscription_avr(),
            'acc' => $this->find_accounts_count(),
            'inactive' => $this->find_inactive_acc_count(),
            'allsum' => 'KES. ' . $this->find_sum_all_sub(),
            'toptentrucks' => [],
            'top_five_exp' => [],
            'top_five_loads' => [],
            'top_five_mileage' => [],
        ];
        return response([
            'status' => 200,
            'data' => $stat,
        ], 200);
    }
    protected function find_sum_all_sub()
    {
        $d = Subscription::where('is_paid', true)->sum('paid_amount');
        $avr = $this->format_ks($d);
        return $avr;
    }
    protected function find_six_m_ago()
    {
        return [
            date('Y-m-d'),
            date("Y-m-d", strtotime("-1 months")),
            date("Y-m-d", strtotime("-2 months")),
            date("Y-m-d", strtotime("-3 months")),
            date("Y-m-d", strtotime("-4 months")),
            date("Y-m-d", strtotime("-5 months")),
        ];
    }
    protected function find_subscription_avr()
    {
        $now = date('Y-m-d');
        $first_contr_date = Subscription::where('id', '!=', 0)
            ->orderBy('id', 'asc')->first();
        if(is_null($first_contr_date))
        {
            return 0;
        }
        $first_contr_date = $first_contr_date->created_at;
        $months_count = $this->count_months($first_contr_date, $now);
        $sum_loads = Subscription::where('id', '!=', 0)->sum('cost');
        $avr = $sum_loads/$months_count;
        $avr = $this->format_ks($avr);
        return $avr;
    }
    protected function find_inactive_acc_count()
    {
        return Account::where('is_active', false)->count();
    }
    protected function find_accounts_count()
    {
        return Account::where('is_active', true)->count();
    }
    protected function count_months($fdate, $sdate)
    {
        $ts1 = strtotime($fdate);
        $ts2 = strtotime($sdate);

        $year1 = date('Y', $ts1);
        $year2 = date('Y', $ts2);
        
        $month1 = intval(date('m', $ts1));
        $month2 = intval(date('m', $ts2));

        $diff = (($year2 - $year1) * 12) + ($month2 - $month1);
        if( $diff == 0 )
        {
            return 1;
        }
        return $diff;
    }
    protected function format_ks($k)
    {
        if(intval($k) > 1000 )
        {
            return number_format($k/1000, 2) . 'k';
        }
        return number_format($k, 2);
    }
}
