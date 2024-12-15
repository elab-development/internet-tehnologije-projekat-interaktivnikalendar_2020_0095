<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];

    protected $guarded = [ 
        'id' //ovo smo dodale da user ne moze da unosi sam svoj ID
    ];

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}
