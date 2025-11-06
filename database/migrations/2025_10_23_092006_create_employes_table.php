<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employes', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->date('birth_date');
            $table->integer('education_level_id');
            $table->text('university');
            $table->integer('cause_id');
            $table->text('cause_text')->nullable();

            $table->integer('organization_id');
            $table->text('division')->nullable();
            $table->text('profession');
            $table->text('work_environment_id');
            $table->text('phone')->nullable();
            $table->boolean('company')->default(false);


            $table->integer('disability_type_id')->nullable()->default(null);
            $table->integer('quot_type_id')->nullable()->default(null);
            $table->integer('status_id')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employes');
    }
};
