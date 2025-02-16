<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the posts.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Post');
    }
}