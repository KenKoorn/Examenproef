<?php

namespace App\Http\Controllers;

use App\Models\LessonPlan;
use App\Models\Subject;
use Illuminate\Http\Request;

class LessonPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $this->validateData($request);
        $subject = Subject::find($data['subject_id']);
        $subject->lessonPlans()->create($data);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $this->validateData($request);
        $lessonPlan = LessonPlan::find($id);
        $lessonPlan->update($data);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    
    protected function validateData(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'subject_id' => 'required',
            'module_id' => 'required'
        ]);
        return $data;
    }
}
