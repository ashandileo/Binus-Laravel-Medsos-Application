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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');                                                 // Title of the post
            $table->text('content');                                                 // Content of the post
            $table->string('image')->nullable();                                     // Image path or filename (nullable)
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key reference to 'users' table
            $table->softDeletes();                                                   // Deleted at column for soft deletes
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};