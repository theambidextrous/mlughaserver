<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('account_no', 16);
            $table->string('cost', 4);
            $table->string('pay_method', 25);
            $table->string('reference', 100);
            $table->string('phone', 15)->nullable();
            $table->string('paid_amount', 4)->nullable();
            $table->text('pay_log')->nullable();
            $table->boolean('is_paid')->default(false);
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscriptions');
    }
}
