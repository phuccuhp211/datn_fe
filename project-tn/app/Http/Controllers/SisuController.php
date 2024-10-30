<?php

namespace App\Http\Controllers;

use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SisuController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:40',
            'account' => 'required|string|max:40|unique:users',
            'phone' => 'required|string|max:20',
            'email' => 'required|string|email|max:50|unique:users',
            'address' => 'required|string',
            'role' => 'required|string|max:12',
            'password' => 'required|string|min:6',
        ]);

        $user = $this->userRepository->register($data);
        return response()->json(['user' => $user], 201);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = $this->userRepository->login($data);
        if ($user) {
            return response()->json(['user' => $user, 'token' => $user->createToken('API Token')->plainTextToken]);
        }
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    public function getUser($id)
    {
        $user = $this->userRepository->getUserById($id);
        return response()->json(['user' => $user]);
    }

    public function updateUserStatus($id, Request $request)
    {
        $status = $request->input('status');
        $user = $this->userRepository->updateUserStatus($id, $status);
        return response()->json(['user' => $user]);
    }
}
