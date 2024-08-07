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
Route::get('/users', [UserController::class, 'index']); // Prikazi sve korisnike
Route::get('/users/{id}', [UserController::class, 'show']); // Prikazi jednog korisnika
Route::put('/users/{id}', [UserController::class, 'update']); // Update za jednog korisnika
Route::delete('/users/{id}', [UserController::class, 'destroy']); // Brisanje jednog korisnika

// Event routes
Route::get('/events/{event}', [EventController::class, 'show']);
Route::post('/events', [EventController::class, 'store']);
Route::put('/events/{event}', [EventController::class, 'update']);
Route::delete('/events/{id}', [EventController::class, 'destroy']);


// Event Category routes
Route::get('/event-categories', [EventCategoryController::class, 'index']); // Prikaz svih kategorija dogadjaja
Route::get('/event-categories/{id}', [EventCategoryController::class, 'show']); // Prikaz jedne kategorije dogadjaja
Route::put('/event-categories/{id}', [EventCategoryController::class, 'update']); // Izmena postojece kategorije dogadjaja

// User Role routes
Route::get('/user-roles', [RoleController::class, 'index']); // Prikazivanje svih uloga korisnika
Route::get('/user-roles/{id}', [RoleController::class, 'show']); // Prikazivanje jedne uloge korisnika


//Registracija
Route::post('/register', [AuthController::class, 'register']); 

//Logovanje
Route::post('/login', [AuthController::class, 'login']);

//Logout
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::resource('events', EventController::class)->only(['update','store','destroy']);
 
    // API route for logout user
    Route::post('/logout', [AuthController::class, 'logout']);
});

 