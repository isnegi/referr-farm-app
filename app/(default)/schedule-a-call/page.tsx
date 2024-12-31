'use client'

import { XComboBox } from "@/components/private/x-combo-box";
import XMultiSelect from "@/components/private/x-multi-select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, CommandIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]

const SelectableItemSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const CandidateSchema = z.object({
  f_name: z
    .string()
    .min(1, "First name is required"),
  l_name: z
    .string()
    .min(1, "Last name is required"),
  city: z.string().min(2, "You must select a city."),
  gender: z.string().min(2, "You must select something"),
  profile_description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description must be at least 10 characters long"),
  experience: z.preprocess(
    (value) => (value === "" || value === null ? 0 : Number(value)),
    z.number().gte(1, { message: "Experience must be greater than 0." })
  ),
  notice_period: z.preprocess(
    (value) => (value === "" || value === null ? 0 : Number(value)),
    z.number().gte(0, { message: "Notice period must be greater than or equal to 0." })
  ),
  skills: z
    .array(SelectableItemSchema)
    .nonempty("At least one skill is required"),
  job_preferences: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ScheduleACall() {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const jobPrefList = [{ id: 'fulltime', name: 'Full-time' }, { id: 'contract', name: 'Contract' }, { id: 'freelance', name: 'Freelance' }, { id: 'internship', name: 'Internship' }, { id: 'parmtime', name: 'Part-time' }];
  const cityList = [
    { value: "new-delhi", label: "New Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "chennai", label: "Chennai" },
  ];
  const skillList = [
    { id: 1, value: "javascript", label: "JavaScript" },
    { id: 2, value: "python", label: "Python" },
    { id: 3, value: "java", label: "Java" },
    { id: 4, value: "typescript", label: "TypeScript" },
    { id: 5, value: "csharp", label: "C#" },
    { id: 6, value: "ruby", label: "Ruby" },
    { id: 7, value: "php", label: "PHP" },
    { id: 8, value: "golang", label: "Go" },
    { id: 9, value: "kotlin", label: "Kotlin" },
    { id: 10, value: "swift", label: "Swift" },
    { id: 11, value: "html", label: "HTML" },
    { id: 12, value: "css", label: "CSS" },
    { id: 13, value: "react", label: "React" },
    { id: 14, value: "angular", label: "Angular" },
    { id: 15, value: "vue", label: "Vue.js" },
    { id: 16, value: "nodejs", label: "Node.js" },
    { id: 17, value: "django", label: "Django" },
    { id: 18, value: "flask", label: "Flask" },
    { id: 19, value: "spring", label: "Spring" },
    { id: 20, value: "laravel", label: "Laravel" },

  ];


  const candidateForm = useForm<z.infer<typeof CandidateSchema>>({
    resolver: zodResolver(CandidateSchema),
    defaultValues: {
      f_name: "",
      l_name: "",
      city: "",
      gender: "",
      profile_description: "",
      experience: 0,
      notice_period: 0,
      skills: [],
      job_preferences: [],
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

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-2 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Schedule a call
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <div className="col-span-2">
          <FormProvider {...candidateForm}>
            <form onSubmit={candidateForm.handleSubmit(onSubmit)}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3 col-span-3">
                      <FormField
                        control={candidateForm.control}
                        name="f_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm/6 font-medium text-gray-900">First name</FormLabel>
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
                        name="l_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm/6 font-medium text-gray-900">Last name</FormLabel>
                            <FormControl className="mt-2">
                              <Input
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                placeholder="e.g., Singh, Abraham"
                                {...field}
                              />

                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="sm:col-span-6 col-span-6">
                      <FormField
                        control={candidateForm.control}
                        name="profile_description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm/6 font-medium text-gray-900">Profile Description</FormLabel>
                            <FormControl className="mt-2">
                              <Input
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                placeholder="e.g., Lead Engineer at ABC Inc."
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
                    <div className="sm:col-span-3 col-span-3"></div>

                    <div className="sm:col-span-5 col-span-5">
                      <FormField
                        control={candidateForm.control}
                        name="job_preferences"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel className="block text-sm/6 font-medium text-gray-900">Looking for </FormLabel>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                              {jobPrefList.map((item) => (
                                <FormField
                                  key={item.id}
                                  control={candidateForm.control}
                                  name="job_preferences"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, item.id])
                                                : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                          {item.name}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
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
                            <FormLabel className="block text-sm/6 font-medium text-gray-900">Location <span className="text-gray-400">[Current city]</span></FormLabel>
                            <FormControl className="mt-2">
                              <XComboBox
                                name="city"
                                control={candidateForm.control}
                                options={cityList}
                                placeholder="Select a city"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* <div className="sm:col-span-2 col-span-2"></div> */}
                    <div className="sm:col-span-2 col-span-2">
                      <FormField
                        control={candidateForm.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm/6 font-medium text-gray-900">Work experience <span className="text-gray-400">[In years]</span></FormLabel>
                            <FormControl className="mt-2">
                              <Input
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                placeholder="e.g., 1, 5, 10..."
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
                        name="notice_period"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm/6 font-medium text-gray-900">Notice period <span className="text-gray-400">[In days]</span></FormLabel>
                            <FormControl className="mt-2">
                              <Input
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                placeholder="e.g., 0, 15, 30, 60..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="sm:col-span-6 col-span-6">
                      <FormField
                        control={candidateForm.control}
                        name="skills"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm/6 font-medium text-gray-900">Skills <span className="text-gray-400">[Click on your strongest skill above to get better job matches.]</span></FormLabel>
                            <FormControl className="mt-2">
                              <XMultiSelect
                                items={skillList}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Start typing a skill..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
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
      </div>
    </div>

  );
}
