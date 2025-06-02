import { Carousel } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

const slideData = [
    {
      client: "Emma Thompson",
      location: "Seattle, Washington",
      feedback:
        "Absolutely loved the attention to detail. The final layout exceeded all my expectations!",
      image:
        "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      client: "Lucas Rodriguez",
      location: "Miami, Florida",
      feedback:
        "My living room went from drab to fab—couldn’t be happier. Would recommend 10/10!",
      image:
        "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      client: "Priya Singh",
      location: "Austin, Texas",
      feedback:
        "Their creative vision is unmatched—I love how they captured my style. Fantastic service!",
      image:
        "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      client: "Michael Nguyen",
      location: "Denver, Colorado",
      feedback:
        "From concept to completion, everything was seamless. My home now feels like a true retreat!",
      image:
        "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  

export const Testimonials = () => {
    return (
        <section className="relative w-full flex flex-col items-center text-center bg-gradient-to-tl from-[#F4ECF7] via-[#E4D4C8] to-[#F4ECF7] text-black p-4 py-10 sm:p-8 pb-24 sm:pt-16 sm:pb-24 md:p-12 md:py-24 lg:p-24 overflow-hidden">
            <span className="text-lg font-semibold tracking-wider text-zinc-900">Testimonials</span>
            <Separator className="mt-2 mb-4 w-full bg-zinc-600 max-w-32 min-h-[3px] rounded-full" />
            <h2 className="w-full font-semibold md:w-6/12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-normal duration-300">
                Hear Directly from Our Clients
            </h2>
            <Carousel
            slides={slideData}
            />
        </section>
    )
}