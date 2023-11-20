<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProgramRequest extends FormRequest
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
            'header' => 'required|string|min:4|max:60',
            'description' => 'required|min:4|max:500',
            'features' => 'required|array',
            'features.*' => 'required|string|min:6|max:40',
            'exercises' => 'required|array',
            'exercises.*' => 'required|exists:exercises,id',
        ];
    }
}
