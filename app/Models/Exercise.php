<?php

namespace App\Models;

use App\Http\filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Exercise extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'muscle_id', 'main_image'];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function muscleGroup(): BelongsTo
    {
        return $this->belongsTo(MuscleGroup::class, 'muscle_id', 'id');
    }

    public function images(): hasMany
    {
        return $this->hasMany(Image::class);
    }

    public function scopeFilter(Builder $builder, QueryFilter $filter)
    {
        $filter->apply($builder);
    }

    public function programs(): BelongsToMany
    {
        return $this->belongsToMany(Program::class, 'program_exercise');
    }
}
