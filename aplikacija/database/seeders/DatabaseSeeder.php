<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       User::factory(1)->create();

       /*User::factory(1)->create([
            'name' => 'Marko',
            'email' => 'marko@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('marko123'),
            'remember_token' => Str::random(10),
            'last_name' => 'Markovic', 
        ]);*/

        $this->call([
            RoleSeeder::class,
            EventCategorySeeder::class,
            EventSeeder::class,
        ]);

        
    }
}
