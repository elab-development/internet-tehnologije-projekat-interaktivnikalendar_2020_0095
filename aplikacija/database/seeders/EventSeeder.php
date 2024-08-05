<?php

namespace Database\Seeders;
 
use Illuminate\Database\Seeder;
use App\Models\Event;
use App\Models\User;
use App\Models\EventCategory; 
class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for ($i = 0; $i < 10; $i++) {
            
            $randomUserId = User::inRandomOrder()->first()->id;
 
            
            $randomCategoryId = EventCategory::inRandomOrder()->first()->id;
 
            Event::create([
                'title' => 'Event ' . ($i + 1),
                'description' => 'Description for Event ' . ($i + 1),
                'start_time' => now()->addDays($i),
                'end_time' => now()->addDays($i)->addHours(2),
                'user_id' => $randomUserId,
                'category_id' => $randomCategoryId,
            ]);
        }
    }
}

