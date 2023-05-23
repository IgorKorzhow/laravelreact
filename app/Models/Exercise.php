<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Exercise extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'muscle_id'];

    public function exercise(): BelongsTo
    {
        return $this->belongsTo(MuscleGroup::class);
    }

    public function images(): hasMany
    {
        return $this->hasMany(Image::class);
    }
}
