<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// User Posts Routes
Route::resource('posts', PostController::class)->middleware(['auth', 'verified'])->names([
    'index' => 'posts.index',
    'show'  => 'posts.show',
    'store' => 'posts.store',
]);

// Comment Routes
Route::resource('comments', CommentController::class)->middleware(['auth', 'verified'])->names([
    'store'   => 'comments.store',
    'destroy' => 'comments.destroy',
]);

// Like Routes
Route::resource('likes', LikeController::class)->middleware(['auth', 'verified'])->names([
    'store'   => 'likes.store',
    'destroy' => 'likes.destroy',
]);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';