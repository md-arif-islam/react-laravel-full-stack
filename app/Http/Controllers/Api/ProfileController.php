<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class ProfileController extends Controller {
    public function update( UpdateUserRequest $request, $id ) {
        $user = User::find( $id );
        $data = $request->validated();

        if ( isset( $data['password'] ) ) {
            $data['password'] = bcrypt( $data['password'] );
        }

        $user->update( $data );

        if ( $request->hasFile( 'avatar' ) ) {

            $avatarPath = time() . '-' . $request->file( 'avatar' )->getClientOriginalName();
            $request->file( 'avatar' )->storeAs( 'public/avatars', $avatarPath );

            $user->avatar = $avatarPath;
            $user->save();
        }

        return new UserResource( $user->firstOrFail() );
    }
}
