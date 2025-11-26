<?php
namespace Database\Seeders;

use App\Models\Yoriqnoma;
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
            'name' => "No'monov Shohrux",
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


        Yoriqnoma::insert([
            [
                'title' => "Ichki mehnat tartib qoidalari 
(Boshqarma Kadrlar boʻlimi 3-bino 1-qavat  8-xona)",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Mehnatga haq toʻlash tizimi boʻyicha 
(Boshqarma Mehnatni tashkil etish va ish haqi
boʻlimi 1-bino 1- qavat 305-xona )",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Yongʻinga qarshi tadbirlar 16:00
(Yongʻin xafvsizlik qismi)",
                'text' => "",
                'colspan' => 0
            ],

            [
                'title' => "Favqulodda vaziyatlar xizmati  16:00
(Boshqarma 3-bino 3-qavat 28-xona)",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Mehnat muhofazasi va texnika xavfsizligi boʻlimi
(Boshqarma 3-bino 3- qavat 32-34-xona)",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Ҳарбий-ҳисобга олиш столи 
(Бошқарма 3-бино 1- қават 7А-хона)",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => ' Boʻlinma MTE va IHB',
                'text' => "Mehnatga haq to‘lash:__________________
Ish vaqti rejimi:_______________________
Xodim uchun_______ish haftasi belgilanadi.
              <span style='font-size: 9px'>uzluksiz 2 smenalik, uzluksiz 1 smenalik, 5 kunlik</span>
Xodimning ish vaqti soatbay
1-smena soat_____dan_____gacha hisoblanib
tushlik vaqti soat_____dan_____gacha
hamda soat_____dan_____gacha;
2-smena soat_____dan_____gacha hisoblanib
tushlik vaqti soat_____dan_____gacha
hamda soat_____dan_____gacha belgilanadi.
Bunda ish vaqtining davomiyligi
haftasiga_____soatgacha etib belgilanadi. 

Bo‘linma MTE va IH bo‘yicha mas’ul xodimi 
_____________________              ________
(F.I.SH)                                                 (imzo)",
                'colspan' => 3,
            ],
            [
                'title' => "Tartibot boʻlimi   
(Boshqarma 1-bino 1- qavat 107-xona)",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Markazlashtirilgan buxgalteriya 
(Boshqarma  2-bino 2- qavat)",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Boʻlinma mehnat muhofazasi va texnika xavfsizligi boʻlimi",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Komplayens xizmati 
(Boshqarma 1-bino 1-qavat 110-xona)",
                'text' => "",
                'colspan' => 0
            ],
            [
                'title' => "Boʻlinma kadrlar xizmati",
                'text' => "",
                'colspan' => 0
            ],
        ]);
    }
}
