<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExerciseRequest;
use App\Models\Exercise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function Webmozart\Assert\Tests\StaticAnalysis\resource;

class ExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $current_page = $request->query('current_page');
        $per_page = $request->query('per_page');
        $allExercises = Exercise::paginate($per_page, ['*'], 'page', $current_page);
        return response()->json($allExercises);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExerciseRequest $request)
    {
        $exercise = $request->validated();
        DB::transaction(function() use ($exercise) {
            $images = $exercise['images'];
            unset($exercise['images']);
            $exercise = Exercise::create($exercise);
            foreach ($images as $image) {
                $exercise->images()->save(createAndSaveImage('public/images', $image));
            }
        }, 3);
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
