// import PostCard from "@/Components/PostCard";
// import PostCreate from "@/Components/PostCreate";
import { Button } from "@/Components/ui/button";
import { usePage } from "@inertiajs/react";

export default function Home({ posts }) {
    const {
        props: {
            auth: { user },
        },
    } = usePage(); // Get the current URL

    return (
        <div>
            Welcome
            <Button>Button ShadCN</Button>
        </div>
    );
}
