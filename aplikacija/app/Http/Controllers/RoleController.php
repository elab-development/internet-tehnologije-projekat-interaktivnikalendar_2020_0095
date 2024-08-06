<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return response()->json($roles, 200);
    }

    public function show($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['error' => 'User Role not found'], 404);
        }
        return response()->json($role, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:user_roles'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $role = Role::create($request->all());

        return response()->json($role, 201);
    }

    public function update(Request $request, $id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['error' => 'User Role not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255|unique:user_roles,name,' . $id
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $role->update($request->all());

        return response()->json($role, 200);
    }

    public function destroy($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['error' => 'User Role not found'], 404);
        }

        $role->delete();
        return response()->json(null, 204);
    }
}
