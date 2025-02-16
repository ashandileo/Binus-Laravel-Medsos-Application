import { useEffect } from "react";
import { Head, Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Camera } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Welcome() {
    const {
        url,
        props: {
            auth: { user },
        },
    } = usePage(); // Get the current URL

    return (
        <>
            <Head title="Welcome" />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="container max-w-prose mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex items-center gap-2">
                                    <Camera className="h-6 w-6" />
                                    <span className="texet-md font-medium">
                                        Ashandi-Grams
                                    </span>
                                </div>
                            </CardTitle>
                            <CardDescription>
                                Welcome to Ashandi-Grams
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                asChild
                                className="w-full"
                                variant="outline"
                            >
                                <Link href="/login">
                                    Click here to continue to application
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
