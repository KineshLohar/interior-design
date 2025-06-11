'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SendHorizonal } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';


const formSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    type: z.enum(["Residential", "Commercial", "Other"], {
        errorMap: () => ({ message: "Please select a valid option." })
    }),
    message: z.string().min(1, "Message is required!")
})
export const ContactForm = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            type: "Commercial",
            message: ''
        }
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post('/api/contact', values);
            form.reset();
        } catch (error) {
            console.log("ERROR SENDING CONTACT REQUEST", error);
        }
    }

    const isSubmitting = form.formState.isSubmitting

    if (!isMounted) return null;

    return (
        <div className="w-full py-4 flex font-lato flex-col items-start justify-center tracking-wider">
            <h2 className="reveal font-playfair text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider transform scale-x-125 text-black mb-6 pl-4 md:pl-6 lg:pl-7">
                Get In Touch
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}
                    className="reveal flex flex-col gap-3 items-stretch w-full text-black font-medium "
                >
                    <FormField
                        name="fullName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base opacity-90">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field}
                                        disabled={isSubmitting}
                                        className="italic border-t-0 border-x-0 border-b-[1px] rounded-none bg-transparent 
                                         focus-visible:ring-0 border-black px-0"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base opacity-90">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="johncena@gmail.com" {...field}
                                        disabled={isSubmitting}
                                        type='email'
                                        className=" italic border-t-0 border-x-0 border-b-[1px] rounded-none bg-transparent 
                                         focus-visible:ring-0 border-black  dark:bg-transparent px-0"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="type"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base opacity-90">Project</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex items-center flex-wrap"
                                    >
                                        {["Residential", "Commercial", "Other"].map((option) => (
                                            <FormItem key={option} className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value={option} className="hidden" />
                                                </FormControl>
                                                <FormLabel className={cn("font-medium cursor-pointer tracking-wider rounded-lg transition duration-100 text-sm sm:text-base px-6 py-1.5 border-[1px] border-neutral-900",
                                                    field.value === option && 'bg-neutral-900 text-white/90'
                                                )}>
                                                    {option}
                                                </FormLabel>
                                            </FormItem>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="message"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base opacity-90">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe your message..."
                                        disabled={isSubmitting}
                                        {...field}
                                        className="italic resize-none border-t-0 border-x-0 border-b-[1px] rounded-none bg-transparent 
                                         focus-visible:ring-0 border-black dark:bg-transparent px-0"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex items-center justify-end mt-4">
                        <Button type="submit" disabled={isSubmitting}
                            className="capitalize bg-transparent hover:bg-neutral-900 hover:text-white text-black rounded-lg relative group text-xs md:text-sm lg:text-base border border-black  px-6 py-2 font-bold tracking-wider cursor-pointer overflow-hidden"
                        >
                            {/* <div className="absolute -z-10 inset-0 -translate-x-full group-hover:translate-x-0 transition-all duration-300" /> */}
                            <span className="z-10 flex gap-2 items-center"><SendHorizonal className="w-4 h-4" />{isSubmitting ? 'Just a Moment...' : "Submit!"}</span>
                        </Button>
                    </div>
                </form>
            </Form>

        </div>
    )
}