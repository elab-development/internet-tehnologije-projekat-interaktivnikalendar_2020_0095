<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::create([
            'title' => 'Laravel Conference',
            'description' => 'Annual Laravel Conference',
            'start_time' => now(),
            'end_time' => now()->addHours(2),
            'user_id' => 1,
            'category_id' => 1 
        ]);

        Event::create([
            'title' => 'React Workshop',
            'description' => 'Hands-on React Workshop',
            'start_time' => now()->addDay(),
            'end_time' => now()->addDay()->addHours(2),
            'user_id' => 2,
            'category_id' => 2 
        ]);

        Event::create([
            'title' => 'Developer Meetup',
            'description' => 'Monthly Developer Meetup',
            'start_time' => now()->addWeek(),
            'end_time' => now()->addWeek()->addHours(3),
            'user_id' => 3,
            'category_id' => 3 
        ]);
    }
}
