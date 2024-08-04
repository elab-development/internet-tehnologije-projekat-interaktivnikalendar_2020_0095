<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EventCategory;

class EventCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EventCategory::create(['name' => 'Meeting']);
        EventCategory::create(['name' => 'Trening & development']);
        EventCategory::create(['name' => 'Team building']);
        EventCategory::create(['name' => 'Product launch']);
        EventCategory::create(['name' => 'General']);
    }
}
