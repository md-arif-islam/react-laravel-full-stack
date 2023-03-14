<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;

class DashboardController extends Controller {
    public function index() {

        $managerCount = User::where( 'role', 'manager' )->count();
        $pharmacistCount = User::where( 'role', 'pharmacist' )->count();
        $salesmanCount = User::where( 'role', 'salesman' )->count();

        $data = [
            'managerCount' => $managerCount,
            'pharmacistCount' => $pharmacistCount,
            'salesmanCount' => $salesmanCount,
        ];

        return response()->json( $data );

    }
}
