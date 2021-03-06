<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMathsomalitestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mathsomalitests', function (Blueprint $table) {
            $table->id();
            $table->string('group', 10);
            $table->string('label', 55);
            $table->string('label_inner', 55);
            $table->string('question_label', 55);
            $table->string('image_left');
            $table->string('image_right');
            $table->string('question_sound');
            $table->string('question_sound_b');
            $table->string('opt_left', 10);
            $table->string('opt_right', 10);
            $table->string('correct', 10);
            $table->string('score', 2);
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
        Schema::dropIfExists('mathsomalitests');
    }
}
