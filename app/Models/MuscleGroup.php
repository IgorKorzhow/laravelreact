<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MuscleGroup extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function exercise(): hasMany {
        return $this->hasMany(Exercise::class);
    }

    public function completedExercise(): BelongsTo
    {
        return $this->belongsTo(CompletedExercises::class);
    }
}
