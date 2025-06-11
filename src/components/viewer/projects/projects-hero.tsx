import { Separator } from "@/components/ui/separator"


export const ProjectsHero = () => {
    return (
        <section className="relative w-full text-center flex bg-transparent flex-col items-center justify-center gap-4 min-h-[70vh] p-4 sm:p-8 md:p-12 lg:p-16 ">
            <div
                className="absolute -z-20 inset-0 bg-center bg-cover opacity-30"
                style={{ backgroundImage: "url('/services/1.jpg')" }}
                aria-hidden="true"
            />
            <div
                className="absolute -z-20 inset-0 bg-center bg-cover bg-black/40"
                aria-hidden="true"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl scale-y-105 tracking-wide font-bold">Project Gallery</h1>
            <Separator className="w-full max-w-32 min-h-[3px] rounded-full bg-[#CBB57B]" />
            <p className=" sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-xs sm:text-sm md:text-base font-lato font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ducimus perferendis, accusantium, earum laboriosam amet, maxime quam quod aspernatur reiciendis assumenda esse eaque aperiam ullam harum mollitia expedita laborum ab.
            </p>
        </section>
    )
}