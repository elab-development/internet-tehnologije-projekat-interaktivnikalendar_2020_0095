<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;


class EventResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'start_time' => $this->start_time,
            'end_time' => $this->end_time,
            'user_id' => new UserResource($this->whenLoaded('user')),
            'category_id' => new EventCategoryResource($this->whenLoaded('category')),
        ];
    }
}



