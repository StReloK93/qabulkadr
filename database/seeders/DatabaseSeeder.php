<?php
namespace Database\Seeders;

use Carbon\Carbon;
use Hash;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Organization;
use App\Models\WorkEnvironment;
use App\Models\Cause;
use App\Models\Employe;
use App\Models\Status;
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Shoxa Admin',
            'login' => 'admin',
            'password' => Hash::make('zzzz1111*'),
        ]);

        Organization::insert([
            ['name' => 'Avtomobil transport boshqarmasi', 'shortname' => 'ATB', 'bossname' => 'Boss - 1'],
            ['name' => 'Axborot kommunikatsiya texnologiyalar markazi', 'shortname' => 'AKTM', 'bossname' => 'Boss - 2'],
            ['name' => 'Shimoliy kon boshqarmasi', 'shortname' => 'SHKB', 'bossname' => 'Boss - 3'],
        ]);

        Cause::insert([
            ['name' => 'Qorboboni jiyani'],
            ['name' => 'Tanishi bor'],
            ['name' => 'Kallasi bigiz']
        ]);

        WorkEnvironment::insert([
            ['name' => 'Yengil'],
            ['name' => "Og'ir"],
            ['name' => "O'ta Og'ir"]
        ]);

        \App\Models\EducationLevel::insert([
            ['name' => "O'rta"],
            ['name' => "O'rta maxsus"],
            ['name' => "Oliy"]
        ]);

        \App\Models\DisabilityType::insert([
            ['name' => "1 - Nogironlik"],
            ['name' => "2 - Nogironlik"],
            ['name' => "3 - Nogironlik"]
        ]);

        \App\Models\QuotType::insert([
            ['name' => "1 - Kvota"],
            ['name' => "2 - Kvota"],
            ['name' => "3 - Kvota"]
        ]);


        Status::insert([
            ['name' => "Tibbiy ko'rik"],
            ['name' => "Yo'llanma"],
        ]);

        Employe::insert([
            [
                'full_name' => 'Soliyev Aziz Mardonovich',
                'birth_date' => '2025-11-06',
                'education_level_id' => 1,
                'university' => "TDTU",
                'cause_id' => 1,
                'organization_id' => 1,
                'profession' => 'Dasturchi',
                'work_environment_id' => 1,
                'company' => false,
                'created_at' => Carbon::parse('2025-09-10'),
                'creater_id' => 1,
            ],
            [
                'full_name' => "No'monov Shoxruh",
                'birth_date' => '2025-11-06',
                'education_level_id' => 1,
                'university' => "INST",
                'cause_id' => 1,
                'organization_id' => 1,
                'profession' => 'ABRA KADABRA',
                'work_environment_id' => 1,
                'company' => false,
                'created_at' => Carbon::parse('2025-10-10'),
                'creater_id' => 1,

            ],
            [
                'full_name' => "Mustafoyev Zukhriddin",
                'birth_date' => '2025-11-06',
                'education_level_id' => 1,
                'university' => "INST",
                'cause_id' => 1,
                'organization_id' => 1,
                'profession' => 'KIASI BOR',
                'work_environment_id' => 1,
                'company' => false,
                'created_at' => Carbon::parse('2025-11-10'),
                'creater_id' => 1,

            ],
            [
                'full_name' => "Ravshanov Jamshid",
                'birth_date' => '2025-11-06',
                'education_level_id' => 1,
                'university' => "UNVRSTT",
                'cause_id' => 1,
                'organization_id' => 1,
                'profession' => 'Jumshud',
                'work_environment_id' => 1,
                'company' => false,
                'created_at' => Carbon::parse('2025-12-10'),
                'creater_id' => 1,

            ],
        ]);
    }
}
