import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const TitleSection = ({ title, location }: { title: string; location: string; }) => {
    return (
        <>
            <div className="absolute z-20 p-4 bottom-0 left-0 right-0 flex items-center justify-between gap-4 opacity-70">
                <div className="flex flex-col">
                    <h4 className=" font-medium tracking-wider text-lg">{title}</h4>
                    <p className="flex items-center text-sm gap-1 font-lato tracking-wide"><MapPin className="h-4 w-4" /> {location}</p>
                </div>
                <ArrowUpRight className="bg-amber-50/70 text-black p-1 cursor-pointer rounded-full h-8 w-8 hover:-translate-y-0.5 transition duration-200" />
            </div>
            <div className="absolute inset-y-1/2 left-0 right-0 bottom-0 bg-gradient-to-t from-neutral-950 to-transparent z-10" />
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-30 bg-black transition duration-200" />
        </>

    )
}

export const ProjectsSection = () => {
    return (
        <div className="relative w-full min-h-dvh p-4 py-10 sm:p-8 pb-24 sm:pt-16 sm:pb-24 md:p-12 md:py-24 lg:p-28 space-y-8">
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black via-black/30 to-transparent" />
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <h2 className="w-full font-semibold md:w-6/12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-normal duration-300">
                    Explore Our Work <br />Collection
                </h2>
                <div className="flex flex-col-reverse md:flex-col gap-4 text-left md:text-right md:items-end w-full md:w-6/12 mt-4 ">
                    <Link href='/projects'>
                        <Button
                            type="button"
                            className=" w-36 py-5 rounded-md tracking-wider cursor-pointer bg-transparent border-[1px] border-zinc-100"
                        >
                            Our Work <ArrowRight />
                        </Button>
                    </Link>
                    <p className="text-xs sm:text-sm font-lato text-zinc-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, eum libero impedit odio blanditiis atque eligendi minima facilis possimus sint quis ducimus.</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-12 md:gap-6 items-stretch md:flex-row md:items-stretch md:justify-between">
                <div className="h-[600px] w-full md:w-4/12 space-y-4">
                    <div className="group relative w-full h-5/12 overflow-hidden cursor-pointer">
                        <Image
                            src='/background.jpeg'
                            alt="p1"
                            fill
                            className="object-center object-cover group-hover:scale-105 transition duration-300"
                        />

                        <TitleSection
                            title="Project Name"
                            location="location"
                        />
                    </div>
                    <div className="group relative w-full h-7/12 overflow-hidden cursor-pointer">
                        <Image
                            src='/background.jpeg'
                            alt="p1"
                            fill
                            className="object-center object-cover group-hover:scale-105 transition duration-300"
                        />
                        <TitleSection
                            title="Project Name"
                            location="location"
                        />
                    </div>
                </div>
                <div className="h-[600px] w-full md:w-4/12 space-y-4">
                    <div className="group relative w-full h-7/12 overflow-hidden cursor-pointer">
                        <Image
                            src='/background.jpeg'
                            alt="p1"
                            fill
                            className="object-center object-cover group-hover:scale-105 transition duration-300"
                        />
                        <TitleSection
                            title="Project Name"
                            location="location"
                        />
                    </div>
                    <div className="group relative w-full h-5/12 overflow-hidden cursor-pointer">
                        <Image
                            src='/background.jpeg'
                            alt="p1"
                            fill
                            className="object-center object-cover group-hover:scale-105 transition duration-300"
                        />
                        <TitleSection
                            title="Project Name"
                            location="location"
                        />
                    </div>
                </div>
                <div className="h-[600px] w-full md:w-4/12 space-y-4">
                    <div className="group relative w-full h-5/12 overflow-hidden cursor-pointer">
                        <Image
                            src='/background.jpeg'
                            alt="p1"
                            fill
                            className="object-center object-cover group-hover:scale-105 transition duration-300"
                        />
                        <TitleSection
                            title="Project Name"
                            location="location"
                        />
                    </div>
                    <div className="group relative w-full h-7/12 overflow-hidden cursor-pointer">
                        <Image
                            src='/background.jpeg'
                            alt="p1"
                            fill
                            className="object-center object-cover group-hover:scale-105 transition duration-300"
                        />
                        <TitleSection
                            title="Project Name"
                            location="location"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}