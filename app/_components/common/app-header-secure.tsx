'use client'

import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo-white.png';
import avatar from '@/public/assets/images/avatar.png';
import { BellRing } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import IconRenderer from "@/components/private/x-icons";

export default function AppHeaderSecure() {

    // const notifications = [
    //     {
    //         id: 1,
    //         content: 'This is an sample notifications. Similar style notifications will be added.'
    //     }, {
    //         id: 2,
    //         content: 'This is another sample notifications.'
    //     }, {
    //         id: 3,
    //         content: 'This is another sample notifications.'
    //     }, {
    //         id: 4,
    //         content: 'This is another sample notifications.'
    //     }, {
    //         id: 5,
    //         content: 'This is another sample notifications.'
    //     },
    // ];

    const userMenu = [
        {
            uid: 'abc1001',
            label: 'profile',
            url: '/profile',
            icon: 'UserPen'
        }, {
            uid: 'abc1002',
            label: 'inbox',
            url: '/inbox',
            icon: 'Inbox'
        }, {
            uid: 'abc1003',
            label: 'settings',
            url: '/settings',
            icon: 'Settings'
        }, {
            uid: 'abc1004',
            label: 'earnings',
            url: '/earnings',
            icon: 'CircleDollarSign'
        }, {
            uid: 'abc1005',
            label: 'help',
            url: '/help',
            icon: 'LifeBuoy'
        }
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
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="link">
                                    <span className="relative flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative rounded-full h-4 w-4 bg-sky-500 text-xs text-center block">2</span>
                                    </span>
                                    <BellRing color="#fff" className="-mt-2 -ml-3" />
                                </Button>
                                {/* <Button variant="outline">Open</Button> */}
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Edit profile</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when you&apos;re done.
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    {/* <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                    Name
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                    Username
                                    </Label>
                                    <Input id="username" value="@peduarte" className="col-span-3" />
                                </div> */}
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>

                        {/* <DropdownMenu>
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
                        </DropdownMenu> */}

                    </div>
                    <div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="link">
                                    <Image className="rounded-full" alt="user avatar" height={48} width={48} src={avatar} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>
                                        Hello {"Shubham"},
                                        <br/>
                                        <span className="text-sm"><span className="font-normal">You&apos;ve signed in as</span> <span className="italic">Referrer</span></span></SheetTitle>
                                    <hr />
                                    <SheetDescription>
                                        {
                                            userMenu.map(menuItem => {
                                                return (
                                                    <Button
                                                        className="flex p-4 my-2 items-center  capitalize justify-start rounded-sm w-full text-left hover:bg-gray-100"
                                                        variant="link"
                                                        key={menuItem.uid}
                                                        onClick={() => console.log(`routing to : ${menuItem.url}`)}
                                                    >
                                                        <IconRenderer icon={menuItem.icon} cssClasses="mr-2" size={24} />
                                                        {menuItem.label}
                                                    </Button>
                                                )
                                            })
                                        }
                                    </SheetDescription>
                                </SheetHeader>
                                <hr />
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button
                                            className="flex p-4 my-2 items-center  capitalize justify-start rounded-sm w-full text-left hover:bg-gray-100"
                                            variant="link"
                                            onClick={() => console.log(`routing to /logout`)}
                                        >
                                            <IconRenderer icon={'LogOut'} cssClasses="mr-2" size={24} />
                                            Logout
                                        </Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>

                        {/* <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Image className="rounded-full" alt="user avatar" height={48} width={48} src={avatar} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel><span className="font-normal">Signed in as</span><br/>Referrer</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <UserPen size={24} />
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Inbox size={24} />
                                    Inbox
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings size={24} />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CircleDollarSign size={24} />
                                    Earnings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LifeBuoy size={24} />
                                    Help
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut size={24} />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}

                    </div>
                </div>
            </div>
        </div>
    );
}
