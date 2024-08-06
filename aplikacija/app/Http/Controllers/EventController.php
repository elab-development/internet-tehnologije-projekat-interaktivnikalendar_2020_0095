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

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'user_id' => 'required|exists:users,id',
        ]);

        $event = Event::create($validated);

        return new EventResource($event);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        $event->load('user'); // Učitajte povezanog korisnika
        return new EventResource($event);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'date' => 'sometimes|date',
            'user_id' => 'sometimes|exists:users,id',
        ]);

        $event->update($validated);

        return new EventResource($event);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json(null, 204);
    }
}
