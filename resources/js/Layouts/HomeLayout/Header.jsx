import React from "react";
import { Button } from "@/Components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/Components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Camera, ChevronDown, MenuIcon } from "lucide-react";
import { usePage } from "@inertiajs/react";
import { Link as LinkIntertia } from "@inertiajs/react";

const Header = () => {
    const {
        url,
        props: {
            auth: { user },
        },
    } = usePage(); // Get the current URL

    const links = [
        {
            href: "/posts",
            label: "Posts",
            isActive: url?.includes("posts"),
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
                <LinkIntertia href="/posts" className="flex items-center gap-2">
                    <Camera className="h-6 w-6" />
                    <span className="texet-md font-medium">Ashandi-Grams</span>
                </LinkIntertia>
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                    {/* Map over the links for desktop navigation */}
                    {links.map((link) => {
                        return (
                            <LinkIntertia
                                key={link.href}
                                href={link.href}
                                className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-md ${
                                    link.isActive
                                        ? "text-gray-900 dark:text-gray-50"
                                        : ""
                                }`} // Apply active style
                            >
                                {link.label}
                            </LinkIntertia>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-4">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarFallback>
                                            {user?.name}
                                        </AvatarFallback>
                                    </Avatar>
                                    <p className="texet-md font-medium">
                                        {user?.name}
                                    </p>
                                    <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <LinkIntertia
                                    href={route("profile.edit")}
                                    method="get"
                                    as="button"
                                    className="w-full"
                                >
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                </LinkIntertia>
                                <LinkIntertia
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="w-full"
                                >
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </LinkIntertia>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <LinkIntertia href="/login">
                            <Button variant="ghost">Login</Button>
                        </LinkIntertia>
                    )}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full md:hidden"
                            >
                                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="md:hidden">
                            <div className="grid gap-4 p-4">
                                {/* Map over the links for mobile navigation */}
                                {links.map((link) => {
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className={`text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                                                link.isActive
                                                    ? "text-gray-900 dark:text-gray-50"
                                                    : ""
                                            }`} // Apply active style
                                        >
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
