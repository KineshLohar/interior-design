'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"



export const ContactButtonNav = ({ extra }: { extra?: string }) => {

    const pathname = usePathname()
    const router = useRouter()

    const onClick = () => {
        if (pathname === '/') {
            // If already on the homepage, just scroll to the section
            const contactSection = document.getElementById('contact')
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // If not on the homepage, navigate to it with hash
            router.push('/#contact')
        }
    }

    return (
        <Button
            type='button'
            onClick={onClick}
            className={cn("bg-white/10 hover:bg-white/20 text-white/90 mt-1 cursor-pointer px-4 py-2 tracking-wider border-[1px] border-zinc-400 rounded-none text-xs font-lato font-medium",
                extra && extra
            )}
        >
            CONTACT US
        </Button>

    )
}