<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\filters\CompletedExerciseFilter;
use App\Http\Requests\StoreCompletedExerciseRequest;
use App\Models\CompletedExercises;
use App\Models\Exercise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompletedExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CompletedExerciseFilter $filter)
    {

       /* $current_page = $filter->request->query('current_page') ?? 0;
        $per_page = $filter->request->query('per_page') ?? 100000;
        $allExercises = Exercise::filter($filter)
            ->with(['images', 'muscleGroup'])
            ->paginate($per_page, ['*'], 'page', $current_page);
        return response()->json($allExercises); */
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompletedExerciseRequest $request)
    {
        $completedExercise = $request->validated();
        CompletedExercises::create($completedExercise);
        return response(["message" => 'Everything is ok'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
