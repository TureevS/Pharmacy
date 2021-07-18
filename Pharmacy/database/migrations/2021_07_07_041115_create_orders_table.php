<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',120);
            $table->string('phone', 12);
            $table->string('mail',120);
            $table->string('city',20);
            $table->string('street',20);
            $table->string('house',20);
            $table->integer('flat');
            $table->text('comments')->nullable();
            $table->float('cost', 10, 2);
            $table->integer('order_id')->nullable()->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
