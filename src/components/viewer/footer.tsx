import { BriefcaseBusiness, Contact, House, Mail, Phone, Server } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import { NewsletterInput } from "./newsletter/newsletter-input";
import { Separator } from "../ui/separator";

const navLinks = [
    { href: '/', label: 'Home', icon: House },
    { href: '/projects', label: 'Work', icon: BriefcaseBusiness },
    { href: '/services', label: 'Services', icon: Server },
    { href: '/contact', label: 'Contact', icon: Contact }
];

const contacts = [
    {
        icon: Mail,
        value: 'abc@email.com'
    },
    {
        icon: Mail,
        value: 'abc@email.com'
    },
    {
        icon: Phone,
        value: '+919876543210'
    },

]

export const Footer = () => {
    return (
        <footer className="w-full p-4 sm:p-8 md:p-12 lg:p-16 lg:pb-12 bg-neutral-900 ">
            <Separator className=" min-w-6/12 max-w-10/12 mx-auto min-h-0.5 mb-12 mt-4 rounded-2xl bg-zinc-600" />
            <div className="flex flex-col gap-8 items-stretch justify-start md:flex-row md:items-start md:justify-between">
                <div className="w-full md:w-6/12 flex flex-col items-start">
                    <div className="relative h-16 w-16">
                        <Image
                            src='/background.jpeg'
                            alt="logo"
                            fill
                            className="object-center object-cover"
                        />
                    </div>
                    <p className="font-lato opacity-80 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <NewsletterInput />
                </div>
                <div className="w-full md:w-6/12 flex flex-col [@media(min-width:400px)]:flex-row gap-10 text-xs sm:text-sm md:gap-24">
                    <div className="md:ml-auto">
                        <h6 className="font-semibold tracking-wider text-neutral-100">EXPLORE</h6>
                        <ul className="space-y-4 mt-6 font-lato">
                            {
                                navLinks?.map((item, i: number) => {
                                    const Icon = item?.icon;
                                    return (
                                        <li key={i} >
                                            <Link href={item?.href} className="group flex items-center gap-3 text-zinc-300 hover:text-zinc-50">
                                                <Icon className="h-5 w-5 group-hover:-translate-x-1 transition duration-200" />
                                                <span>
                                                    {item.label}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold tracking-wider text-neutral-100">CONTACTS</h6>
                        <ul className="space-y-4 mt-6 font-lato">
                            {
                                contacts?.map((item, i: number) => {
                                    const Icon = item?.icon;
                                    return (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300">
                                            <Icon className="h-5 w-5" />
                                            <span>{item?.value}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Separator className=" my-8 min-w-6/12 max-w-10/12 mx-auto min-h-0.5 bg-zinc-600" />
            <div className="text-center text-sm text-zinc-300">
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    )
}