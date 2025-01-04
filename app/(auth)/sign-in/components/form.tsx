'use client'

import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const RequestStepFormSchema = z.object({
    identifier: z
        .string()
        .min(1, { message: "Email field must not be blank." })
        .email("Provided email is not valid.")
})

const VerifyStepFormSchema = z.object({
    pin: z
        .string()
        .length(6, { message: "OTP must be exactly 6 characters." })
        .regex(/^\d{6}$/, { message: "OTP must contain only numbers." }),
})


export default function SignInForm() {

    const { clearErrors } = useForm();
    const [identifier, setIdentifier] = useState('');
    const [currentStep, setCurrentStep] = useState('request'); // 'request' or 'verify'
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const requestStepForm = useForm<z.infer<typeof RequestStepFormSchema>>({
        resolver: zodResolver(RequestStepFormSchema),
        defaultValues: {
            identifier: ""
        },
    });

    const verifyStepForm = useForm<z.infer<typeof VerifyStepFormSchema>>({
        resolver: zodResolver(VerifyStepFormSchema),
        defaultValues: {
            pin: ""
        },
    })


    const initOtpRequest = async (data: z.infer<typeof RequestStepFormSchema>) => {
        try {
            setLoading(true);
            //   await requestOtp(data.identifier);
            setIdentifier(data.identifier);
            setCurrentStep('verify');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const onSubmit = async (data: z.infer<typeof VerifyStepFormSchema>) => {
        // Clear previous errors before making the API call
        clearErrors();
        setError('');
        // removeToken();
        try {
            setLoading(true);
            console.log(`ISNEGI >>>> email: ${identifier}, PIN: ${data.pin}`);
            // const result = await verifyOtp(identifier, data.pin);

            // setToken(result.data.accessToken);

            // const response = await checkUserStatus();

            // if (response.ok) {
            //     const { data } = await response.json();
            //     // 'empty' for users whose profiles not filled, 'filled' for users having metadata
            //     if (data.profileType === 'empty') {
            //         // router.push('/onboarding'); // Redirect existing users to the dashboard
            //     } else {
            //         // router.push("/dashboard/home"); // Redirect existing users to the dashboard
            //     }
            // }
            // setIdentifier(data.pin);
            // setStep('verify');
        } catch (err: any) {
            console.log(`eRROR : ${JSON.stringify(err)}`)
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid gap-4">
            {error && <p className="text-red-500">{error}</p>}
            {currentStep === 'request' && (
                <FormProvider {...requestStepForm}>
                    <form onSubmit={requestStepForm.handleSubmit(initOtpRequest)} className="space-y-6">
                        <FormField
                            control={requestStepForm.control}
                            name="identifier"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your e-mail address:</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="me@example.com"
                                            {...field}
                                        />

                                    </FormControl>
                                    <FormDescription>
                                        You'll receiving our offers and account related communications via this email only.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" type="submit">
                            {loading ? 'Requesting...' : 'Request OTP'}
                        </Button>
                    </form>
                    <hr />
                    <Button variant="outline" disabled className="w-full">
                        Join with Google
                    </Button>
                    <div className="mt-4 text-center text-sm">
                        Don't have an account? <Link href="/register">Register here</Link>
                        {/* By signing in you are agreeing to our policies. Read {" "}
                        <Link href="/privacy-and-cookies" className="underline">
                            Privacy &amp; Cookies
                        </Link> and <Link href="/terms-of-use" className="underline">
                            Terms of use
                        </Link> */}
                    </div>
                </FormProvider>
            )}

            {currentStep === 'verify' && (
                <div className="grid gap-2 pb-32">
                    <FormProvider {...verifyStepForm}>
                        <form onSubmit={verifyStepForm.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={verifyStepForm.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>One-Time Password</FormLabel>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>
                                            Please enter the one-time password sent to your phone.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" type="submit">
                                {loading ? 'Validating OTP...' : 'Sign In'}
                            </Button>
                        </form>
                    </FormProvider>
                </div>
            )}
        </div>

    )

}