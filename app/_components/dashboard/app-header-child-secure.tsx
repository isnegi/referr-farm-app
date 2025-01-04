'use client'

import Link from "next/link";
import React from "react";

export default function AppHeaderChildSecure() {

    const urls = [
        {
            id: 1, name: 'Dashboard', url: '/dashboard'
        }, {
            id: 2, name: 'Your listings', url: '/dashboard/listings'
        }, {
            id: 3, name: 'Saved profiles', url: '/dashboard/saved'
        }
    ];

    return (
        <div className="bg-[#232A35]">
            <div className="h-12 max-w-7xl mx-auto flex items-center justify-between text-white">
                <ul className="flex flex-row">
                    {
                        urls.map(url => {
                            return (
                                <li key={url.id}>
                                    <Link href={url.url} className={`pl-2 pr-8 py-3 text-left hover:underline-offset-4 border-4 border-[#232A35] hover:border-b-[#5AE3A9]  hover:text-[#5AE3A9]`}>{url.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

