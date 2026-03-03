<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LessonPlanController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\YearController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\Role;

// Route::get('/', function () {
//     // return Inertia::render('Welcome', [
//     //     'canLogin' => Route::has('login'),
//     //     'canRegister' => Route::has('register'),
//     //     'laravelVersion' => Application::VERSION,
//     //     'phpVersion' => PHP_VERSION,
//     // ]);
// });

// Route::get('/', function () {
//     return Inertia::render('Welcome');
// })->middleware(['auth', 'verified'])->name('welcome');

Route::get('/', [HomeController::class,'index'])->name('home.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    

    Route::middleware([Role::class. ':admin'])->group(function(){  
        // year route for admin
        Route::resource('years', YearController::class);

        // module route for admin
        Route::resource('modules', ModuleController::class);
        Route::post('/year/{year}/module', [ModuleController::class,'store'])->name('module.store');

        // register routes for admin
        Route::get('register', [RegisteredUserController::class, 'create'])
            ->name('register');
        Route::post('register', [RegisteredUserController::class, 'store']);
    });

    Route::resource('subjects', SubjectController::class);
    Route::resource('lessonPlans', LessonPlanController::class);
});

// year routes
Route::get('/year', [YearController::class, 'index'])->name('year.index');
Route::get('/year/{year}', [YearController::class, 'show'])->name('year.show');

// subject routes
Route::get('/subject', [SubjectController::class,'show'])->name('subject.show');
Route::get('/lessonPlans', [SubjectController::class,'show'])->name('lessonPlan.show');

// module route
// Route::get('/years/{year}/modules')

require __DIR__.'/auth.php';
