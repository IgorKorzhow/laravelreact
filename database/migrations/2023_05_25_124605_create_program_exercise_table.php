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
        Schema::create('program_exercise', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger("exercise_id");
            $table->unsignedInteger("program_id");
            $table->foreign("exercise_id")
                ->references("id")
                ->on("exercises")
                ->onDelete("cascade");
            $table->foreign("program_id")
                ->references("id")
                ->on("programs")
                ->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('program_exercise');
    }
};
