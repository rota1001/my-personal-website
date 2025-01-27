"use client";

import {Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription, SheetClose} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"; // npm i react-icons

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "blog",
        path: "https://hackmd.io/@rota1001"
    },
    {
        name: "contact",
        path: "/contact"
    }
];

const MobileNav = () => {
    const pathname = usePathname();
    const handleLinkClick = () => {
        console.log("yee");
    };
    return (
        <Sheet>
            <SheetTrigger className="flex jusitify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="sr-only">
                    <SheetTitle>Sidebar</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <SheetClose asChild key="7">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            rota1001<span className="text-accent">.</span>
                        </h1>
                    </Link></SheetClose>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
                                <Link 
                                    href={link.path} 
                                    key={index} 
                                    onClick={handleLinkClick}
                                    className={`${
                                        link.path === pathname &&
                                        "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                                >
                                {link.name}
                            </Link></SheetClose>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
