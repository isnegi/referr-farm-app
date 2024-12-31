'use client'

import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';
import { useRouter } from "next/navigation";
import { LogIn, MoveRight } from "lucide-react";

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
                    onClick={() => router.push('/sign-in')}
                    className="flex items-center mr-4 bg-transparent hover:bg-gray-200 py-2 px-4 border hover:border-transparent rounded-md">
                    Sign In&nbsp;<LogIn size={22} />
                </button>

                <button
                    type="button"
                    onClick={() => router.push('/register')}
                    className="flex items-center capitalize rounded-md bg-[#5AE3A9] px-6 py-2 text-white shadow-sm hover:bg-[#46a67d]"
                >
                    get started&nbsp;
                    {/* <MoveRight size={22} /> */}
                </button>
            </div>
        </div>
    );
}
