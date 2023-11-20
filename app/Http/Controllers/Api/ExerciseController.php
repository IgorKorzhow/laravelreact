<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\filters\ExerciseFilter;
use App\Http\Requests\StoreExerciseRequest;
use App\Http\Requests\UpdateExerciseRequest;
use App\Models\Exercise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ExerciseFilter $filter)
    {
        $current_page = $filter->request->query('current_page') ?? 0;
        $per_page = $filter->request->query('per_page') ?? 100000;
        $allExercises = Exercise::filter($filter)
            ->with(['images', 'muscleGroup'])
            ->paginate($per_page, ['*'], 'page', $current_page);
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
            $mainImgae = $exercise['main_image'];
            unset($exercise['images']);
            unset($exercise['main_image']);
            $exercise['main_image'] = createAndSaveImage('public/images', $mainImgae)['img_name'];
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
        $exercise = Exercise::with(['images', 'muscleGroup'])->findOrFail($id);
        return response()->json($exercise);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExerciseRequest $request, string $id)
    {
        $fields = $request->validated();
        $exercise = Exercise::findOrFail($id);
        $exercise->name = $fields['name'];
        $exercise->description = $fields['description'];
        $exercise->muscle_id = $fields['muscle_id'];
        $exercise->save();

        return response()->json("Exercise was updated", 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Exercise $exercise)
    {
        $imageName = $exercise->main_image;
        deleteImage("storage/images/", $imageName);
        $images = $exercise->images;
        foreach ($images as $image) {
            deleteImage("storage/images/", $image->img_name);
        }
        $exercise->delete();
        return response()->json("Ok", 201);
    }
}
