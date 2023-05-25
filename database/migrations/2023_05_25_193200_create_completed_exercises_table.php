<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('completed_exercises', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger("muscle_group_id");
            $table->foreign("muscle_group_id")
                ->references("id")
                ->on("muscle_groups")
                ->onDelete("cascade");
            $table->unsignedInteger("user_id");
            $table->foreign("user_id")
                ->references("id")
                ->on("users")
                ->onDelete("cascade");
            $table->date("date_of_completion");
            $table->unsignedInteger("number_of_approaches");
            $table->float("avg_number_of_repetitions");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('completed_exercises');
    }
};
