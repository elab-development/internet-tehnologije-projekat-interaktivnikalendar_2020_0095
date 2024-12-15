<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->title(), 
            'description' => $this->faker->paragraph(), 
            'start_time'=> $this->faker->time(), 
            'end_time' => $this->faker->time(), 
            'user_id'=> User::factory(), 
            'category_id'=> EventCategory::factory(),
        ];
    }
}
