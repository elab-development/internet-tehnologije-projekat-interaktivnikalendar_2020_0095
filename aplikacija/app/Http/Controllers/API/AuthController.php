<?php
 
namespace App\Http\Controllers\API;
 
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
 
 
class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => $request->role,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json($user, 201);
    }

 
    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message'=> 'Unauthorized'], 401);
        }
 
        $user = User::where('email', $request['email'])->firstOrFail();
 
        $token = $user->createToken('auth_token')->plainTextToken;
 
        return response()->json(['message'=> 'Hi '.$user->name.' welcome to your business calendar!','token' => $token]);
    }
 
    public function logout(Request $request)
    {
       $request->user()->tokens()->delete();
       return response()->json(['message'=> 'Successfully logged out!']);
    }
}