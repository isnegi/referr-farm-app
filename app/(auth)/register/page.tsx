import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ghost, User2 } from "lucide-react";
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RegisterForm from "./components/form";

export default function Register() {
  return (
    <div className="grid grid-cols-6 gap-8 m-auto max-w-6xl items-center">
      <aside className="col-span-3">
        <div id="docs-nav" className="md:block hidden">
          <div>
            <p className="mb-10 text-6xl font-black">Join today;<br /><br /> Referral-driven platform</p>
            <hr />
            <div className="text-gray-500 text-xs">
              <Link href="/" className="flex items-end inline-flex">
                <Image
                  src={logo}
                  className="h-10 w-auto mt-4"
                  width={72}
                  alt="Referr Farm logo" /> © ReferrFarm & Co.</Link>
            </div>
          </div>
        </div>
      </aside>
      <article className="col-span-3">
        <Card className="mx-auto max-w-xl">
          {/* <CardHeader></CardHeader> */}
          <CardContent>
            <RegisterForm />
            {/* <SignInForm /> */}
          </CardContent>
        </Card>
      </article>
    </div>

    // <div className="grid gap-4">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //     <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
    //       Welcome to the<br />Farm of Opportunities!
    //     </h2>
    //   </div>

    //   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //     <form action="#" method="POST" className="space-y-6">
    //       <div>
    //         <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
    //           You're a
    //         </label>
    //         <div className="mt-2">
    //           <Tabs defaultValue="harvestor" className="w-[400px]">
    //             <span>You're a : &nbsp;</span>
    //             <TabsList className="h-22">
    //               <TabsTrigger value="farmer">
    //                 <div className="flex flex-col items-center">
    //                   <User2 size={48} />
    //                   <p>Farmer&nbsp;<span className="text-gray-400">(Provider)</span></p>
    //                 </div>
    //               </TabsTrigger>
    //               <TabsTrigger value="harvestor">
    //                 <div className="flex flex-col items-center">
    //                   <Ghost size={48} />
    //                   <p>Harvester&nbsp;<span className="text-gray-400">(Seeker)</span></p>
    //                 </div>
    //               </TabsTrigger>
    //             </TabsList>
    //             <TabsContent value="account">Make changes to your account here.</TabsContent>
    //             <TabsContent value="password">Change your password here.</TabsContent>
    //           </Tabs>
    //         </div>
    //       </div>


    //       <div>
    //         <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
    //           Phone
    //         </label>
    //         <div className="mt-2">
    //           <input
    //             id="phone"
    //             name="phone"
    //             type="text"
    //             required
    //             autoComplete="email"
    //             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-200 sm:text-sm/6"
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <div className="flex items-center justify-between">
    //           <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
    //             Password
    //           </label>
    //           <div className="text-sm">
    //             <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
    //               Forgot password?
    //             </a>
    //           </div>
    //         </div>
    //         <div className="mt-2">
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             required
    //             autoComplete="current-password"
    //             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //           />
    //         </div>
    //       </div>


    //       <div>
    //         <button
    //           type="submit"
    //           className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //         >
    //           Register
    //         </button>
    //       </div>
    //     </form>

    //     <p className="mt-10 text-center text-sm/6 text-gray-500">
    //       Already have an account?{' '}
    //       <Link href="/sign-in" className="font-semibold text-indigo-600 hover:text-indigo-500">
    //         Sign In
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
}
