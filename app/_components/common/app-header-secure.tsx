'use client'

import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo-white.png';
import avatar from '@/public/assets/images/avatar.png';
import { useRouter } from "next/navigation";
import { BellRing, LogIn, Menu, MoveRight, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function AppHeaderSecure() {
    const router = useRouter();

    const notifications = [
        {
            id: 1,
            content: 'This is an sample notifications. Similar style notifications will be added.'
        }, {
            id: 2,
            content: 'This is another sample notifications.'
        }, {
            id: 3,
            content: 'This is another sample notifications.'
        }, {
            id: 4,
            content: 'This is another sample notifications.'
        }, {
            id: 5,
            content: 'This is another sample notifications.'
        },
    ]

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
                    <div className="mr-6">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <span className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative rounded-full h-4 w-4 bg-sky-500 text-xs text-center block">2</span>
                                </span>
                                <BellRing className="-mt-2 -ml-3" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {
                                    notifications.map(notification => (
                                        <div key={notification.id}>
                                            <DropdownMenuItem className="px-2 py-4">{notification.content}</DropdownMenuItem>
                                        </div>
                                    ))
                                }
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="flex flex-row justify-center align-center" onClick={() => router.push('/dashboard/notifications')}>
                                    View all notifications <MoveRight size={18} className="ml-2" />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
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
