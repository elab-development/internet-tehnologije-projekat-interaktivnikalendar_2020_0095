<?php

namespace App\Http\Controllers;

use App\Models\EventCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventCategoryController extends Controller
{
    public function index()
    {
        $categories = EventCategory::all();
        return response()->json($categories, 200);
    }

    public function show($id)
    {
        $category = EventCategory::find($id);
        if (!$category) {
            return response()->json(['error' => 'Event Category not found'], 404);
        }
        return response()->json($category, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:event_categories'
            
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $category = EventCategory::create($request->all());

        return response()->json($category, 201);
    }

    public function update(Request $request, $id)
    {
        $category = EventCategory::find($id);
        if (!$category) {
            return response()->json(['error' => 'Event Category not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255|unique:event_categories,name,' . $id
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $category->update($request->all());

        return response()->json($category, 200);
    }

    public function destroy($id)
    {
        $category = EventCategory::find($id);
        if (!$category) {
            return response()->json(['error' => 'Event Category not found'], 404);
        }

        $category->delete();
        return response()->json(null, 204);
    }
}
