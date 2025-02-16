import PostCard from "@/Components/PostCard";
import PostCreate from "@/Components/PostCreate";
import HomeLayout from "@/Layouts/HomeLayout";
import { usePage } from "@inertiajs/react";

export default function Home({ posts }) {
    const {
        props: {
            auth: { user },
        },
    } = usePage(); // Get the current URL

    return (
        <HomeLayout>
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
                    <PostCard
                        post={{
                            id: 1,
                            user: {
                                name: "Ashandi Leonadi",
                            },
                            title: "Title",
                            content: "Content",
                        }}
                        isDetail={true}
                        comments={[
                            {
                                id: 1,
                                user: {
                                    name: "Ashandi Leonadi",
                                },
                                content: "Comment Item",
                            },
                        ]}
                    />
                </div>
            </div>
        </HomeLayout>
    );
}
