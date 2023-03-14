<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider {
    protected $policies = [
        // // Other model policies...

    ];

    public function boot() {
        $this->registerPolicies();

        Gate::define( 'isAdmin', function ( $user ) {
            return $user->role == 'admin';
        } );

        Gate::define( 'isManager', function ( $user ) {
            return $user->role == 'manager';
        } );

        Gate::define( 'isPharmacist', function ( $user ) {
            return $user->role == 'pharmacist';
        } );

        Gate::define( 'isSalesman', function ( $user ) {
            return $user->role == 'salesman';
        } );

        Gate::define( 'isAdminOrManagerOrPharmacistOrSalesman', function ( $user ) {
            if ( $user->role == 'admin' || $user->role == 'manager' || $user->role == 'pharmacist' || $user->role == 'salesman' ) {
                return true;
            } else {
                return false;
            }
        } );

        Gate::define( 'isAdminOrManagerOrPharmacist', function ( $user ) {
            if ( $user->role == 'admin' || $user->role == 'manager' || $user->role == 'pharmacist' ) {
                return true;
            }

            return false;
        } );

        Gate::define( 'isAdminOrManager', function ( $user ) {
            if ( $user->role == 'admin' || $user->role == 'manager' ) {
                return true;
            }

            return false;
        } );

    }
}
