<?php
 
 use Illuminate\Support\Facades\Route;
 use App\Http\Controllers\UserController;
 use App\Http\Controllers\EventController;
 use App\Http\Controllers\EventCategoryController;
 use App\Http\Controllers\RoleController;
 use App\Http\Controllers\API\AuthController;
 
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// User routes
Route::get('/users', [UserController::class, 'index']); // Get all users
Route::get('/users/{id}', [UserController::class, 'show']); // Get a single user
Route::put('/users/{id}', [UserController::class, 'update']); // Update user
Route::delete('/users/{id}', [UserController::class, 'destroy']); // Delete user

// Event routes
Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{event}', [EventController::class, 'show']);
Route::post('/events', [EventController::class, 'store']);
Route::put('/events/{event}', [EventController::class, 'update']);
Route::delete('/events/{event}', [EventController::class, 'destroy']);

// Event Category routes
Route::get('/event-categories', [EventCategoryController::class, 'index']); // Get all event categories
Route::get('/event-categories/{id}', [EventCategoryController::class, 'show']); // Get a single category
Route::put('/event-categories/{id}', [EventCategoryController::class, 'update']); // Update category
Route::delete('/event-categories/{id}', [EventCategoryController::class, 'destroy']); // Delete category

// User Role routes
Route::get('/user-roles', [RoleController::class, 'index']); // Get all user roles
Route::get('/user-roles/{id}', [RoleController::class, 'show']); // Get a single role
Route::put('/user-roles/{id}', [RoleController::class, 'update']); // Update role
Route::delete('/user-roles/{id}', [RoleController::class, 'destroy']); // Delete role

//Registracija
Route::post('/register', [AuthController::class, 'register']); 
 