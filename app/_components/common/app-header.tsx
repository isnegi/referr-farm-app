'use client'

import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { Phone } from "lucide-react";

export default function AppHeader() {
    const router = useRouter();

    return (
        <div className="flex h-16 items-center justify-between">
            <div>
                <Link href={'/'}>
                    <Image
                        src={logo}
                        width={72}
                        alt="Referr Farm logo" />

                </Link>
            </div>
            <div className="flex items-center">
                <button
                    type="button"
                    onClick={() => router.push('/register')}
                    className="flex items-center ml-4 bg-transparent hover:bg-gray-200 py-2 px-4 border hover:border-transparent rounded-md"
                >
                    Request a Callback
                    <Phone size={18} className="ml-2" aria-hidden="true" />
                </button>

                <button
                    onClick={() => router.push('/sign-in')}
                    className="flex text-white items-center ml-4 py-2 px-4 border hover:border-transparent rounded-md bg-[#5AE3A9] hover:bg-[#46a67d]"

                >
                    Sign In&nbsp;<LogIn size={22} />
                </button>
            </div>
        </div>
    );
}
