<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('account_no', 12);
            $table->string('account_name', 55);
            $table->string('address', 55)->nullable();
            $table->string('county', 50)->nullable();
            $table->string('zip', 5)->nullable();
            $table->string('age', 2)->nullable();
            $table->string('g_email', 30);
            $table->string('g_phone', 15);
            $table->boolean('has_paid')->default(false);
            $table->string('period_from', 15)->nullable();
            $table->string('period_to', 15)->nullable();
            $table->string('app', 30)->nullable();
            $table->boolean('is_active')->default(false);
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
        Schema::dropIfExists('accounts');
    }
}
