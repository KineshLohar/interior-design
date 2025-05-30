import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"



export const ContactButtonNav = ({ extra }: { extra?: string }) => {
    return (
        <Button
            type='button'
            className={cn("bg-white/10 hover:bg-white/20 text-white/90 mt-1 cursor-pointer px-4 py-2 tracking-wider border-[1px] border-zinc-400 rounded-none text-xs font-lato font-medium",
                extra && extra
            )}
        >
            CONTACT US
        </Button>
    )
}