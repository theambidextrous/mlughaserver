<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanguagesomalicontentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('languagesomalicontents', function (Blueprint $table) {
            $table->id();
            $table->string('section', 5);
            $table->string('image');
            $table->string('label', 55);
            $table->string('btn_left', 30);
            $table->string('btn_right', 30);
            $table->string('sound_left');
            $table->string('sound_right');
            $table->string('is_pair', 1);
            $table->string('pair_image')->nullable();
            $table->string('pair_label')->nullable();
            $table->string('pair_btn_left', 30)->nullable();
            $table->string('pair_btn_right', 30)->nullable();
            $table->string('pair_sound_left')->nullable();
            $table->string('pair_sound_right')->nullable();
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
        Schema::dropIfExists('languagesomalicontents');
    }
}
