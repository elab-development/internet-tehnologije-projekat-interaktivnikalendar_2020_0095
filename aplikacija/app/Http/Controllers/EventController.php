<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\EventResource;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('user')->get(); // Load related users
        return EventResource::collection($events);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        $event->load('user'); // Load related user
        return new EventResource($event);
    }

    /**
     * Store a newly created resource in storage.
     */
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
     * Update the specified resource in storage.
     */
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

    /**
     * Get all events for a user by their email.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getEventsByUserEmail(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
        ]);

        $email = $validated['email'];

        // Find the user by email
        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Retrieve events for the found user
        $events = Event::where('user_id', $user->id)->get();

        return EventResource::collection($events);
    }

    public function getEventsByCategory(Request $request)
{
    $category = $request->input('category');

    // Fetch events by category
    $events = Event::where('category_id', $category)->get();

    return response()->json(['data' => $events]);
}

}

