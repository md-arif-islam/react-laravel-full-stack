<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class PharmacistController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {

        return UserResource::collection(
            User::where( "role", "pharmacist" )->orderBy( "id", "DESC" )->paginate( 10 )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store( StoreUserRequest $request ) {

        $data = $request->validated();
        $data['password'] = bcrypt( $data['password'] );
        $data['role'] = "pharmacist";
        $user = User::create( $data );

        if ( $request->hasFile( 'avatar' ) ) {

            $avatarPath = time() . '-' . $request->file( 'avatar' )->getClientOriginalName();
            $request->file( 'avatar' )->storeAs( 'public/avatars', $avatarPath );

            $user->avatar = $avatarPath;
            $user->save();
        }

        return response( new UserResource( $user ), 201 );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show( User $user, $id ) {

        return new UserResource( $user->where( 'id', $id )->firstOrFail() );

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update( UpdateUserRequest $request, User $user, $id ) {

        $pharmacist = User::find( $id );
        $data = $request->validated();

        if ( isset( $data['password'] ) ) {
            $data['password'] = bcrypt( $data['password'] );
        }

        $pharmacist->update( $data );

        if ( $request->hasFile( 'avatar' ) ) {

            $avatarPath = time() . '-' . $request->file( 'avatar' )->getClientOriginalName();
            $request->file( 'avatar' )->storeAs( 'public/avatars', $avatarPath );

            $pharmacist->avatar = $avatarPath;
            $pharmacist->save();
        }

        return new UserResource( $pharmacist->firstOrFail() );

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy( User $user, $id ) {

        $user->where( "id", $id )->delete();
        return response( "", 204 );
    }
}
