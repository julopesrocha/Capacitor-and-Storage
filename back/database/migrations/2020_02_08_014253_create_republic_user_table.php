<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRepublicUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('republic_user', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->unsignedBigInteger('user_id')->nullable();
          $table->unsignedBigInteger('republic_id')->nullable();
          $table->timestamps();
      });

      //Foreign key
      Schema::table('republic_user', function (Blueprint $table) {
          $table->foreign('republic_id')->references('id')->on('republics')->onDelete('set null');
          $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('republic_user');
    }
}
