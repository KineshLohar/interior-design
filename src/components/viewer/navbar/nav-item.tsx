'use client'

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

interface NavItemProps {
    href: string;
    label: string;
}

export const NavItem = ({ route }: { route: NavItemProps }) => {

    const pathname = usePathname();
    const isActive = pathname === route.href;

    return (
        <li>
            <Link href={route.href}
                className={cn("group relative opacity-90 hover:opacity-100 transition-opacity duration-200",
                    isActive && "opacity-100"
                )}
            >
                {route.label}
                <span
                    className={`absolute -bottom-1.5 h-[2px] bg-white transition-all duration-300 ease-in-out
                    ${isActive ? 'left-0 w-full' : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'}
                `}
                />
            </Link>
        </li>
    )
}