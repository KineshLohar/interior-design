'use client';


import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ContactButtonNav } from "./contact-button-nav";


export const MobileMenu = ({ routes }: { routes: {  href: string, label: string }[] }) => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <Menu
                className={cn(`md:hidden w-7 h-7 cursor-pointer`,
                    openMenu && "hidden"
                )}
                data-open="false"  // Initial state is closed
                onClick={() => setOpenMenu(true)}
            />
            <div className={cn(` md:hidden fixed right-0 top-0 w-full
             min-h-screen bg-[#222D52]/90 translate-x-full transition duration-300
             p-4 flex flex-col items-center`,
                openMenu && 'translate-x-0',
            )}>
                <X className="w-10 h-10 ml-auto font-bold cursor-pointer rounded-full mr-4 sm:mr-8" onClick={() => setOpenMenu(false)} />

                <div className=" flex flex-col items-center justify-center mt-8 w-full text-2xl ml-2 font-medium space-y-12 pt-20">
                    {
                        routes?.map((route, i: number) => (
                            <Link key={i} href={route?.href} className="">
                                {route.label}
                            </Link>
                        ))
                    }
                    <ContactButtonNav />
                </div>
            </div>
        </>
    )
}