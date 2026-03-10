<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesNPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Permission::create(['name' => 'create_users']);
        // Permission::create(['name' => 'edit']);
        // Permission::create(['name' => 'edit_all']);

        // $admin = Role::create(['name'=> 'admin']);
        // $teacher = Role::create(['name'=> 'teacher']);

        // $admin->givePermissionTo(['create_users', 'edit', 'edit_all']);
        // $teacher->givePermissionTo(['edit']);

        $user = User::find(2);
        $user->assignRole('teacher');
        
    }
}
