import PostCard from "@/Components/PostCard";
import PostCreate from "@/Components/PostCreate";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

export default function Home({ posts }) {
    return (
        <HomeLayout>
            <Head title="Post" />
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-3xl w-full flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-lg font-medium">
                                Explore & Share Moments
                            </p>
                            <span>
                                Upload your favorite moments and show
                                appreciation by liking posts from others. Join
                                the community and express yourself!
                            </span>
                        </div>
                        <PostCreate />
                    </div>
                    {posts?.length > 0
                        ? posts?.map((post) => (
                              <PostCard key={post.id} post={post} />
                          ))
                        : ""}
                </div>
            </div>
        </HomeLayout>
    );
}
