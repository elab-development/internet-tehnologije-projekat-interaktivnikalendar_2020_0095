<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::all();
        return response()->json($events, 200);
    }

    public function show($id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }
        return response()->json($event, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|exists:event_categories,id',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after_or_equal:start_time'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $event = Event::create($request->all());

        return response()->json($event, 201);
    }

    public function update(Request $request, $id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'category_id' => 'sometimes|required|exists:event_categories,id',
            'start_time' => 'sometimes|required|date',
            'end_time' => 'sometimes|required|date|after_or_equal:start_time'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $event->update($request->all());

        return response()->json($event, 200);
    }

    public function destroy($id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        $event->delete();
        return response()->json(null, 204);
    }
}
