'use client'

import { XComboBox } from "@/components/private/x-combo-box";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ghost, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const CandidateSchema = z.object({
    user_type: z
        .string()
        .default("seeker")
        .refine((value) => ["seeker", "referrer"].includes(value), {
            message: "Invalid user type. Please select either 'seeker' or 'referrer'.",
        }),
    ph_no: z
        .string()
        .regex(/^\d{10}$/, "Phone number must be a 10-digit numeric value."),
    full_name: z
        .string()
        .min(4, "Full name must be at least 4 characters long.")
        .max(40, "Full name must not exceed 40 characters.")
        .nonempty("Full name is required."),
    city: z
        .string()
        .nonempty("City is required."),
    gender: z
        .string()
        .nonempty("Gender is required."),
});

const cityList = [
    { value: "new-delhi", label: "New Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "chennai", label: "Chennai" },
];

export default function RegisterForm() {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const candidateForm = useForm<z.infer<typeof CandidateSchema>>({
        resolver: zodResolver(CandidateSchema),
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
        <div>
            {error && <p className="text-red-500">{error}</p>}

            <FormProvider {...candidateForm}>
                <form onSubmit={candidateForm.handleSubmit(onSubmit)}>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6 col-span-6">
                            <FormField
                                control={candidateForm.control}
                                name="user_type"
                                render={() => (
                                    <FormItem>
                                        <FormLabel className="block text-sm/6 font-medium text-gray-900">
                                            You're a
                                        </FormLabel>
                                        <FormControl className="mt-2">
                                            <Controller
                                                name="user_type"
                                                control={candidateForm.control}
                                                render={({ field }) => (
                                                    <Tabs
                                                        defaultValue={field.value}
                                                        onValueChange={(value) => candidateForm.setValue("user_type", value)}
                                                        className="w-[400px]"
                                                    >
                                                        <TabsList className="h-22">
                                                            <TabsTrigger value="seeker">
                                                                <div className="flex flex-col items-center">
                                                                    <Ghost size={48} />
                                                                    <p>
                                                                        Harvester&nbsp;
                                                                        <span className="text-gray-400">(Seeker)</span>
                                                                    </p>
                                                                </div>
                                                            </TabsTrigger>
                                                            <TabsTrigger value="referrer">
                                                                <div className="flex flex-col items-center">
                                                                    <User2 size={48} />
                                                                    <p>
                                                                        Farmer&nbsp;
                                                                        <span className="text-gray-400">(Provider)</span>
                                                                    </p>
                                                                </div>
                                                            </TabsTrigger>
                                                        </TabsList>
                                                        <TabsContent value="referrer">
                                                            <span className="text-xs text-gray-500">Excellent! Opportunity awaits you.</span>
                                                        </TabsContent>
                                                        <TabsContent value="seeker">
                                                            <span className="text-xs text-gray-500">Kudos! You're a giver.</span>
                                                        </TabsContent>
                                                    </Tabs>
                                                )}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                    // <FormItem>
                                    //     <FormLabel className="block text-sm/6 font-medium text-gray-900">You're a</FormLabel>
                                    //     <FormControl className="mt-2">
                                    //         <Tabs defaultValue={field.value} className="w-[400px]">
                                    //             <TabsList className="h-22">
                                    //                 <TabsTrigger value="referrer">
                                    //                     <div className="flex flex-col items-center">
                                    //                         <User2 size={48} />
                                    //                         <p>Farmer&nbsp;<span className="text-gray-400">(Provider)</span></p>
                                    //                     </div>
                                    //                 </TabsTrigger>
                                    //                 <TabsTrigger value="seeker">
                                    //                     <div className="flex flex-col items-center">
                                    //                         <Ghost size={48} />
                                    //                         <p>Harvester&nbsp;<span className="text-gray-400">(Seeker)</span></p>
                                    //                     </div>
                                    //                 </TabsTrigger>
                                    //             </TabsList>
                                    //             <TabsContent value="account">Make changes to your account here.</TabsContent>
                                    //             <TabsContent value="password">Change your password here.</TabsContent>
                                    //         </Tabs>
                                    //     </FormControl>
                                    //     <FormMessage />
                                    // </FormItem>
                                )}
                            />
                        </div>
                        <div className="sm:col-span-4 col-span-4">
                            <FormField
                                control={candidateForm.control}
                                name="ph_no"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-sm/6 font-medium text-gray-900">Phone number</FormLabel>
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
                                name="full_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-sm/6 font-medium text-gray-900">Your name</FormLabel>
                                        <FormControl className="mt-2">
                                            <Input
                                                type="text"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                placeholder="e.g., Ram Navin"
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="sm:col-span-2 col-span-2">
                            <FormField
                                control={candidateForm.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-sm/6 font-medium text-gray-900">Location</FormLabel>
                                        <FormControl className="mt-2">
                                            <XComboBox
                                                name="city"
                                                control={candidateForm.control}
                                                options={cityList}
                                                placeholder="Choose your city..."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="sm:col-span-4 col-span-4">
                            <FormField
                                control={candidateForm.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-sm/6 font-medium text-gray-900">Gender</FormLabel>
                                        <FormControl className="mt-2">
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-row justify-between items-center space-y-1"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="male" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Male
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="female" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Female
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="not-disclosed" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Prefer not to say</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="sm:col-span-6 col-span-6 text-xs">
                            By creating an account, you agree to the&nbsp;
                            <Link href="/privacy-and-cookies" className="underline">
                                Privacy &amp; Cookies
                            </Link> and <Link href="/terms-of-use" className="underline">
                                Terms of use
                            </Link>
                        </div>

                    </div>
                    <div className="mt-6 flex items-center justify-start gap-x-6">
                        <Button type="submit" className="rounded-md bg-[#5AE3A9] py-2 px-4 text-sm text-white shadow-sm hover:bg-[#46a67d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {loading ? 'Submitting...' : 'Save & continue'}
                        </Button>
                        <button type="button" className="flex items-center mr-4 bg-transparent hover:bg-gray-200 py-2 px-4 border hover:border-transparent rounded-md">
                            Clear data
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}