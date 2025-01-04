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
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
        <div className="mt-4 text-sm">
          Already have an account? <Link href={'/sign-in'} className="text-[#5AE3A9] underline">Sign in</Link> now!
        </div>
      </article>
    </div>
  );
}
