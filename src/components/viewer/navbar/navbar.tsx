import { ContactButtonNav } from "./contact-button-nav";
import { NavItem } from "./nav-item";
import { MobileMenu } from "./nav-mobile";


export default function Navbar() {

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Work' },
        { href: '/services', label: 'Services' }
    ];

    return (
        <nav className="absolute z-50 top-0 right-0 left-0 w-full h-20 bg-transparent flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
            <div
                className="absolute -z-10 inset-0 bg-gradient-to-b from-neutral-900 via-black/30 to-transparent"
            />
            <div>
                Logo
            </div>
            <ul className="ml-auto hidden md:flex items-center justify-center gap-8">
                {
                    navLinks?.map((item: { href: string; label: string }, i: number) => (
                        <NavItem
                            key={i}
                            route={item}
                        />
                    ))
                }
                <ContactButtonNav />
            </ul>
            <div className="ml-8 flex items-center">
                <MobileMenu routes={navLinks} />
            </div>
        </nav>
    )
}