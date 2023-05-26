<?php

namespace App\Http\filters;

class CompletedExerciseFilter extends QueryFilter
{
    public function group_of_muscles(?string $muscleId = null)
    {
        if ($muscleId != null)
            return $this->builder->where('muscle_group_id', '=', $muscleId);
    }

    public function name_exercise(?string $name_exercise = null)
    {
        if ($name_exercise != null)
            return $this->builder->where('name_exercise', '=', $name_exercise);
    }

    public function date(?string $date = null)
    {
        if ($date != null) {
            $dateArray = explode(",", $date);
            if (count($dateArray) == 2) {
                return $this->builder->whereBetween('date_of_completion', $dateArray);
            } else {
                return $this->builder->where('date_of_completion', "=",  $dateArray[0]);
            }
        }
    }
}
