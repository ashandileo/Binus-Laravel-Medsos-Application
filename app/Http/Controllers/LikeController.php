<?php
namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function store(Request $request)
    {
        $existingLike = Like::where('user_id', Auth::id())->where('post_id', $request->postId)->first();
        if ($existingLike) {
            // Run destroy method
            $existingLike->delete();
            return redirect()->back()->with('success');
        } else {
            Like::create([
                'user_id' => Auth::id(),
                'post_id' => $request->postId,
            ]);
            return redirect()->back()->with('success');
        }
    }
}