import PostCard from "@/Components/PostCard";
import HomeLayout from "@/Layouts/HomeLayout";

export default function PostDetail({ post, comments }) {
    return (
        <HomeLayout>
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-3xl w-full flex flex-col gap-4">
                    <PostCard
                        isDetail
                        post={{
                            id: 1,
                            user: {
                                name: "Ashandi Leonadi",
                            },
                            title: "Title",
                            content: "Content",
                        }}
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
