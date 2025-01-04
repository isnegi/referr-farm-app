import Link from "next/link";
import SignInForm from "./components/form";
import { Command } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';

export default function SignIn() {

  return (
    <div className="grid grid-cols-6 gap-8 m-auto max-w-6xl">
      <aside className="col-span-4">
        <div id="docs-nav" className="md:block hidden">
          <div>
            <p className="mb-10 text-6xl font-black">Share opportunities;<br/><br/> Network & Grow together.</p>
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
      <article className="col-span-2">
        <Card className="mx-auto max-w-sm">
          <CardHeader></CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
