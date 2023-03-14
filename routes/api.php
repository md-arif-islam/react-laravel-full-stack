<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ManagerController;
use App\Http\Controllers\Api\PharmacistController;
use App\Http\Controllers\Api\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware( 'auth:sanctum' )->group( function () {
    Route::get( '/user', function ( Request $request ) {
        return $request->user();
    } );
    Route::post( "/logout", [AuthController::class, "logout"] );

    Route::get( "/managers", [ManagerController::class, "index"] );
    Route::post( "/managers", [ManagerController::class, "store"] );
    Route::get( "/managers/{id}", [ManagerController::class, "show"] );
    Route::post( "/managers/{id}", [ManagerController::class, "update"] );
    Route::delete( "/managers/{id}", [ManagerController::class, "destroy"] );

    Route::get( "/pharmacists", [PharmacistController::class, "index"] );
    Route::post( "/pharmacists", [PharmacistController::class, "store"] );
    Route::get( "/pharmacists/{id}", [PharmacistController::class, "show"] );
    Route::post( "/pharmacists/{id}", [PharmacistController::class, "update"] );
    Route::delete( "/pharmacists/{id}", [PharmacistController::class, "destroy"] );

    Route::put( "/profile/{id}", [ProfileController::class, "update"] );

    // Route::apiResource( "/managers", ManagerController::class );
} );

Route::post( "/login", [AuthController::class, "login"] );
