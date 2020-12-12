<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'morshed sarwer',
            'email' => 'morshed@softzino.com',
            'password' => bcrypt('12345')
        ]);
    }
}
