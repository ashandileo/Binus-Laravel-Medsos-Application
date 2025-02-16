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

    /**
     * Display the specified post.
     *
     * @param \App\Models\Post $post
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        // Return the post and its comments to the Inertia view
        return Inertia::render('PostDetail');
    }
}