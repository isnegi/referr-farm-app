'use client'

import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send } from "lucide-react"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const CandidateSchema = z.object({
    full_name: z
        .string()
        .min(1, "Your name cannot be blank."),
    ph_no: z
        .string()
        .min(1, "Phone number cannot be empty."),
    what_for: z.string().min(2, "You must select a purpose."),
    query: z
        .string()
        .min(1, "Query cannot be left empty.")
        .min(10, "Query must be at least 10 characters long."),
})


export default function ScheduleACallForm() {

    const [loading, setLoading] = useState(false);

    const candidateForm = useForm<z.infer<typeof CandidateSchema>>({
        resolver: zodResolver(CandidateSchema),
        defaultValues: {
            full_name: "",
            ph_no: "",
            what_for: "",
            query: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof CandidateSchema>) => {
        setLoading(true);
        try {
            console.log(`gabbar singh : ${JSON.stringify(data)}`);
            // const payload = 
            // const result = await onboardCandidate(data);
            // if (result.ok) {
            //     ToastManager.success('Onboarding successful. Redirecting to DASHBOARD please wait...');
            //     router.push("/dashboard/home"); // Redirect users to the dashboard
            // }
        } catch (err: any) {
            // ToastManager.error('Error occured during onboarding! Please try later.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormProvider {...candidateForm}>
            <form onSubmit={candidateForm.handleSubmit(onSubmit)}>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-8">
                    <div className="sm:col-span-3 col-span-3">
                        <FormField
                            control={candidateForm.control}
                            name="full_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm/6 font-medium text-gray-900">Your name</FormLabel>
                                    <FormControl className="mt-2">
                                        <Input
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            placeholder="e.g., Ram, John"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="sm:col-span-3 col-span-3">
                        <FormField
                            control={candidateForm.control}
                            name="ph_no"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm/6 font-medium text-gray-900">Phone</FormLabel>
                                    <FormControl className="mt-2">
                                        <Input
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            placeholder="e.g., 0000-000-000"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="sm:col-span-3 col-span-3">
                        <FormField
                            control={candidateForm.control}
                            name="what_for"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm/6 font-medium text-gray-900">What for</FormLabel>
                                    <FormControl className="mt-2">
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-row justify-between items-center space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="referrer" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Refferer
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="seeker" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Job Seeker
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="other" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Others</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="sm:col-span-6 col-span-6">
                        <FormField
                            control={candidateForm.control}
                            name="query"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm/6 font-medium text-gray-900">Your query</FormLabel>
                                    <FormControl className="mt-2">
                                        <Textarea
                                            {...field}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            placeholder="What you'd like to query about..."
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-start gap-x-6">
                    <Button type="submit" className="rounded-md bg-[#5AE3A9] py-2 px-4 text-sm text-white shadow-sm hover:bg-[#46a67d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {loading ? 'Sending ' : 'Send now'}
                        {loading ? '...' : <Send size={22} />}
                    </Button>
                    <button type="button" className="flex items-center mr-4 bg-transparent hover:bg-gray-200 py-2 px-4 border hover:border-transparent rounded-md">
                        Reset
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}