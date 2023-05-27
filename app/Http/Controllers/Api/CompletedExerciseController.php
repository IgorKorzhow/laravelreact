<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\filters\CompletedExerciseFilter;
use App\Http\Requests\StoreCompletedExerciseRequest;
use App\Models\CompletedExercises;
use App\Models\Exercise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function Webmozart\Assert\Tests\StaticAnalysis\resource;

class CompletedExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CompletedExerciseFilter $filter)
    {
        $userId = $filter->request->user()->id;
        $current_page = $filter->request->query('current_page') ?? 0;
        $per_page = $filter->request->query('per_page') ?? 1000;
        $completedExercises = CompletedExercises::filter($filter)
            ->where("user_id", "=", $userId)
            ->orderBy('date_of_completion', 'desc')
            ->with('muscleGroup')
            ->paginate($per_page, ['*'], 'page', $current_page);
        return response()->json($completedExercises);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompletedExerciseRequest $request)
    {
        $completedExercise = $request->validated();
        $userId = $request->user()->id;
        $completedExercise['user_id'] = $userId;
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
    public function destroy(CompletedExercises $completedExercise)
    {
        $completedExercise->delete();

        return response()->json("Ok", 201);
    }
}
