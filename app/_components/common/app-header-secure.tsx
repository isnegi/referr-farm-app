'use client'

import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo-white.png';
import avatar from '@/public/assets/images/avatar.png';
import { useRouter } from "next/navigation";
import { LogIn, Menu, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function AppHeaderSecure() {
    const router = useRouter();

    return (
        <div className="bg-[#12151B] py-6">
            <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">

                <div>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            width={72}
                            height={72}
                            priority
                            alt="Referr Farm logo" />

                    </Link>
                </div>
                <div className="flex items-center text-white">
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Image className="rounded-full" alt="user avatar" height={48} width={48} src={avatar} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </div>
        </div>
    );
}
