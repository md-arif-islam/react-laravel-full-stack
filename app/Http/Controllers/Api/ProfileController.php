<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class ProfileController extends Controller {
    public function update( UpdateUserRequest $request, User $user, $id ) {

        $data = $request->validated();

        if ( isset( $data['password'] ) ) {
            $data['password'] = bcrypt( $data['password'] );
        }

        $user->where( "id", $id )->update( $data );

        return new UserResource( $user->where( 'id', $id )->firstOrFail() );
    }
}
