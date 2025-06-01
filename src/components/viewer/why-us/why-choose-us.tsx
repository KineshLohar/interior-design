import { Separator } from "@/components/ui/separator"
import { Building2, CalendarCheck, CheckCircle, Hammer, Users, Workflow } from "lucide-react";

const features = [
    {
        id: 1,
        title: "20+ Years of Experience",
        description: "Two decades of mastering the art of interior design and construction, refining our craft with every project.",
        icon: CalendarCheck
    },
    {
        id: 2,
        title: "In-House Skilled Team",
        description: "A dedicated team of architects, designers, and craftsmen working seamlessly together under one roof.",
        icon: Users
    },
    {
        id: 3,
        title: "100+ Successful Projects",
        description: "A proven track record of delivering exceptional results across diverse residential and commercial spaces.",
        icon: CheckCircle
    },
    {
        id: 4,
        title: "Residential & Commercial Expertise",
        description: "Versatile design solutions tailored to both intimate homes and large-scale commercial environments.",
        icon: Building2
    },
    {
        id: 5,
        title: "End-to-End Execution",
        description: "Complete project management from initial concept through final installation and handover.",
        icon: Workflow
    },
    {
        id: 6,
        title: "Custom Furniture & Detailing",
        description: "Bespoke furniture pieces and intricate details crafted by master artisans to complement every design.",
        icon: Hammer
    }
];


export const WhyChooseUsSection = () => {
    return (
        <div className="w-full min-h-dvh p-4 py-10 sm:p-8 pb-24 sm:pt-16 sm:pb-24 md:p-12 md:py-24 lg:p-28 ">
            <div className="w-full flex flex-col items-center gap-4 text-center">
                <span className="tracking-wide text-amber-300 font-medium text-sm sm:text-base">OUR EXPERTISE</span>
                <h2 className="w-full font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-normal duration-300 -mt-2">
                    What Sets Us Apart
                </h2>
                <Separator
                    className="min-h-1 max-w-40 rounded-full bg-amber-400"
                />
                <p className=" sm:max-w-xl md:max-w-2xl text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita distinctio quas, aspernatur corporis autem tenetur nobis odit architecto, nemo vel exercitationem consequuntur similique consectetur fugiat nesciunt ipsam eos soluta!</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-12">
                {
                    features?.map(item => {
                        const Icon = item?.icon;
                        return (
                            <div
                                key={item?.id}
                                className="flex flex-col gap-3 items-stretch justify-center bg-neutral-900 p-8"
                            >
                                <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-amber-400" />
                                <h3 className="text-xl font-semibold tracking-wider">{item?.title}</h3>
                                <p className="text-xs md:text-sm text-zinc-200 tracking-wide">{item?.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}