import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import services from '@/constant/services.json';
import { Fragment } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ServicesSection = () => {
    return (
        <section className="relative w-full flex flex-col items-center text-center bg-gradient-to-tr from-[#F4ECF7] via-[#E4D4C8] to-[#F4ECF7] text-black min-h-screen p-4 py-10 sm:p-8 pb-24 sm:pt-16 sm:pb-24 md:p-12 md:py-24 lg:p-24">
            <span className="text-lg font-semibold tracking-wider text-zinc-900">Services</span>
            <Separator className="mt-2 mb-4 w-full bg-zinc-600 max-w-32 min-h-[3px] rounded-full" />
            <h2 className="w-full font-semibold md:w-6/12 text-2xl sm:text-4xl md:text-5xl lg:text-6xl transition-normal duration-300">
                Bringing Your Vision to Life
            </h2>
            <p className=" sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-xs sm:text-sm md:text-base mt-2 font-lato font-medium text-neutral-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ducimus perferendis, accusantium, earum laboriosam amet, maxime quam quod aspernatur reiciendis assumenda esse eaque aperiam ullam harum mollitia expedita laborum ab.</p>
            <div className=" space-y-4 mt-8">
                <Separator className="w-full min-h-0.5 rounded-full bg-neutral-700" />
                {
                    services?.slice(0, 4)?.map(serv => (
                        <Fragment key={serv?.id}>
                            <div className="flex flex-col gap-4 md:gap-8 hover:bg-[#D6AD60]/20 py-4 rounded-xl items-stretch md:flex-row md:items-center md:justify-between px-4">
                                <div className="w-full md:w-6/12 space-y-2">
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-wide">{serv?.title}</h3>
                                    <p className="font-lato text-base text-neutral-800 font-medium">{serv?.description}</p>
                                </div>
                                <div className="relative w-full h-32 md:w-6/12">
                                    <Image
                                        src={serv?.image}
                                        alt="service"
                                        fill
                                        className="object-center object-cover"
                                    />
                                </div>
                            </div>
                            <Separator className="w-full min-h-0.5 rounded-full bg-neutral-700" />
                        </Fragment>
                    ))
                }

            </div>
            <div className="mt-8">
                <Link href='/services'>
                    <Button
                        type="button"
                        className=" w-52 py-5 rounded-md tracking-wider cursor-pointer border-[2px] border-neutral-900 bg-neutral-900 font-semibold text-[#E4D4C8]"
                    >
                        Explore Services <ArrowRight />
                    </Button>
                </Link>
            </div>
        </section>
    )
}