<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Hash;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::create([
        //     'name' => 'Shoxa Admin',
        //     'login' => 'admin',
        //     'password' => Hash::make('zzzz1111*'),
        // ]);


        \App\Models\Organization::create([
            'name' => 'Avtomobil transport boshqarmasi',
            'shortname' => 'ATB',
        ]);

        \App\Models\Organization::create([
            'name' => 'Shimoliy kon boshqarmasi',
            'shortname' => 'SHKB',
        ]);


        // \App\Models\Cause::create([
        //     'name' => 'Qorboboni jiyani',
        // ]);

        // \App\Models\Cause::create([
        //     'name' => 'Tanishi bor',
        // ]);

        // \App\Models\Cause::create([
        //     'name' => 'Kallasi bigiz',
        // ]);
    }
}
