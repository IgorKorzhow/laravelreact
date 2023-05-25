<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompletedExerciseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required|exists:users,id',
            'muscle_group_id' => 'required|exists:muscle_groups,id',
            'date_of_completion' => 'required|date',
            'number_of_approaches' => 'required|int',
            'avg_number_of_repetitions' => 'required|decimal:2',
        ];
    }
}
