<?php

namespace App\Http\filters;

class ExerciseFilter extends QueryFilter
{
    public function search(?string $search = null)
    {
        if ($search != null)
            return $this->builder->where('name', 'like', $search.'%');
    }

    public function group_of_muscles(?string $muscleId = null)
    {
        if ($muscleId != null)
            return $this->builder->where('muscle_id', '=', $muscleId);
    }
}
