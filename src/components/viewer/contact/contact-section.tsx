import Image from "next/image"
import { ContactForm } from "./contact-form"


export const ContactSection = () => {
    return (
        <div id="contact" className="relative w-full flex flex-col bg-gradient-to-tr from-[#F4ECF7] via-[#E4D4C8] to-[#F4ECF7] md:flex-row md:items-stretch md:justify-between gap-4 md:gap-8 p-4 py-24 sm:p-8 sm:py-24 md:p-12 md:py-24 lg:p-28">
            <div className="relative w-full md:w-6/12 h-[400px] md:h-auto rounded-2xl overflow-hidden">
                <Image
                    src='/background.jpeg'
                    alt="Contact section image"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="w-full md:w-6/12">
                <ContactForm />
            </div>
        </div>
    )
}