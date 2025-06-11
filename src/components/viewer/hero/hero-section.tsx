import { MoveRight } from "lucide-react"
import Link from "next/link"


export const HeroSection = () => {
    return (
        <div className="relative w-full min-h-dvh flex items-center justify-start p-4 sm:p-8 md:p-12 lg:p-16 ">
            <div
                className="absolute -z-10 inset-0 bg-center bg-cover opacity-60"
                style={{ backgroundImage: "url('/background.jpeg')" }}
                aria-hidden="true"
            />
            <div className="z-0 flex flex-col items-start justify-center">
                <h1 className=" text-4xl sm:text-5xl md:text-6xl scale-y-105 tracking-wide font-bold">
                    Crafting Interiors
                    <br />
                    Since 2001
                </h1>
                <p
                    data-delay="300ms"
                    className=" mt-2 text-sm sm:text-base lg:text-lg text-zinc-200 font-lato"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link
                    href='/projects'
                >
                    <div
                        data-delay="500ms"
                        className=" relative group mt-4 px-4 py-1.5 sm:px-6 sm:py-2 bg-transparent border-[1px] font-semibold border-white transition duration-300 text-xs sm:text-sm md:text-base flex items-center gap-2 overflow-hidden"
                    >
                        Explore Projects <MoveRight className="w-7 h-7 transition duration-300" />
                        {/* <span className="absolute -z-10 inset-0 bg-zinc-50 -translate-x-full group-hover:translate-x-0 transition duration-300 " /> */}
                        <span className="absolute -z-20 inset-0 group-hover:bg-white/5 transition duration-300" />
                    </div>
                </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
    )
}