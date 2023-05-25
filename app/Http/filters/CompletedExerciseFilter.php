<?php

namespace App\Http\filters;

class CompletedExerciseFilter extends QueryFilter
{
    public function group_of_muscles(?string $muscleId = null)
    {
        if ($muscleId != null)
            return $this->builder->where('muscle_id', '=', $muscleId);
    }
}
