<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Resources\EventResource;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('user')->get(); // Učitajte povezane korisnike
        return EventResource::collection($events);
    }

    public function show(Event $event)
    {
        $event->load('user'); // Učitajte povezanog korisnika
        return new EventResource($event);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after:start_time',
            'user_id' => 'required|exists:users,id',
            'category_id' => 'required|exists:event_categories,id',
        ]);

        $event = Event::create($validated);

        return $event;
        
    }

    /**
     * Remove the specified resource from storage.
     */
   

    public function destroy($id)
    {
        $event = Event::find($id);
        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }
        $event->delete();
        return response()->json($event, 200);
    }

    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|nullable|string',
            'start_time' => 'sometimes|required|date',
            'end_time' => 'sometimes|required|date|after:start_time',
            'user_id' => 'sometimes|required|exists:users,id',
            'category_id' => 'sometimes|required|exists:event_categories,id',
        ]);

        $event->update($validated);
        return $event;
    }
}
