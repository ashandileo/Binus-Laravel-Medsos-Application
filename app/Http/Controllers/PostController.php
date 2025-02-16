<?php
namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        // Fetch posts with user and comment count
        $posts = Post::with('user')
            ->withCount('comments') // Count the related comments for each post
            ->latest()
            ->get();

        // Pass posts to the 'Post' view
        return Inertia::render('Post', [
            'posts' => $posts,
        ]);
    }

    /**
     * Display the specified post.
     *
     * @param \App\Models\Post $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        // Query comments directly with a where clause for the post_id
        $comments = Comment::where('post_id', $post->id)
            ->with('user') // Load the user who created the comment
            ->oldest()     // Order by the latest comments
            ->get();

        // Return the post and its comments to the Inertia view
        return Inertia::render('PostDetail', [
            'post'     => $post->load('user'), // Load the user who created the post
            'comments' => $comments,           // Pass the filtered comments
        ]);
    }

    /**
     * Store a newly created post in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'title'   => 'required|string|max:255',
            'content' => 'required|string',
            'image'   => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Optional image field
        ]);

        // Handle image upload if present
        $imagePath = null;
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imagePath = $request->file('image')->store('images', 'public'); // Store the image in the 'images' folder in public disk
        }

        // Create a new post
        Post::create([
            'title'   => $validated['title'],
            'content' => $validated['content'],
            'image'   => $imagePath, // Store the image path in the database
            'user_id' => Auth::id(), // Set the user ID
        ]);

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }
}