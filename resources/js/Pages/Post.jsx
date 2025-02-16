import { Button } from "@/Components/ui/button";
import HomeLayout from "@/Layouts/HomeLayout";
import { usePage } from "@inertiajs/react";

export default function Home({ posts }) {
    const {
        props: {
            auth: { user },
        },
    } = usePage(); // Get the current URL

    return <HomeLayout>Welcome</HomeLayout>;
}
