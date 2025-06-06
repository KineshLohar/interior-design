'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Enter valid email!")
})

export const NewsletterInput = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ''
        }
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post('/api/contact', values);
            await new Promise<void>((resolve) => setTimeout(() => {
                console.log("RESPONSE");
                resolve();
            }, 250));
            form.reset();
        } catch (error) {
            console.log("ERROR SENDING CONTACT REQUEST", error);
        }
    }

    const isSubmitting = form.formState.isSubmitting

    if (!isMounted) return null

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative font-lato w-full sm:w-80 mt-4">
                                    <Input
                                        className="peer pr-20 h-12 rounded-none bg-transparent dark:bg-transparent  border border-zinc-400 focus-visible:border-zinc-50 focus-visible:ring-0 autofill:bg-transparent autofill:text-zinc-400 selection:bg-blue-400"
                                        placeholder="Enter your email"
                                        type='email'
                                        {...field}
                                    />
                                    <Button
                                        type="submit"
                                        size="sm"
                                        className="absolute tracking-wider hover:bg-transparent top-1/2 p-0 mr-2 right-1 cursor-pointer -translate-y-1/2 bg-none bg-transparent h-auto focus-visible:ring-0 focus-visible:text-zinc-50 text-zinc-400 peer-focus-visible:text-zinc-50 border-b-[1px] border-zinc-50 rounded-none"
                                    >
                                        {isSubmitting ? '...' : 'Subscribe'}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form >
    )
}