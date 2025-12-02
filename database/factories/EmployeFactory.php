<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employe>
 */
class EmployeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $professions = [
            'Shifokor',
            "O'qituvchi",
            'Dasturchi',
            'Haydovchi',
            'Hisobchi'
        ];

        $causes = [
            'Omadi kelgan',
            "Qorboboni tanishi",
            'Hokimni jiyani',
            'Oldin ishlagan',
            'Qandaydir sabab'
        ];

        $uchastka = [
            '1 - Uchastka',
            "2 - Uchastka",
            '3 - Uchastka',
        ];

        return [
            'full_name' => fake()->name(),
            'birth_date' => fake()->date(),
            'education_level_id' => fake()->numberBetween(1, 3),
            'university' => fake()->streetName(),
            'cause_id' => fake()->numberBetween(1, 3),
            'cause_text' => fake()->randomElement($causes),
            'organization_id' => fake()->numberBetween(1, 3),
            'division' => fake()->randomElement($uchastka),
            'profession' => fake()->randomElement($professions),
            'work_environment_id' => fake()->numberBetween(1, 3),
            'company' => false,
            'status_id' => fake()->numberBetween(1, 3),

            'created_at' => fake()->dateTime(),
            'creater_id' => 1,
        ];
    }
}
