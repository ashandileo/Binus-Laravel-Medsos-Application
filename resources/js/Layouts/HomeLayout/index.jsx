import React from "react";
import Header from "./Header";
import { Toaster } from "@/components/ui/toaster";

const HomeLayout = ({ children }) => {
    return (
        <div className="pb-10">
            <Header />
            <main className="container mx-auto max-w-6xl pt-6">{children}</main>
            <Toaster />
        </div>
    );
};

export default HomeLayout;
