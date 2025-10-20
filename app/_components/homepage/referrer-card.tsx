"use client";

import React, { useState } from 'react';
import { Users, Briefcase, HandHeart, Hand, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

interface ReferrerData {
    uid: string;
    fullName: string;
    headline: string;
    currentCompany: string;
    avatar: string;
    memberSince: string;
    referralsGiven?: number;
    successfulHires?: number;
    isVerified?: boolean;
}

interface TopReferrerCardProps {
    referrer: ReferrerData;
    onGetInTouch?: (uid: string) => void;
}

function TopReferrerCard({
    referrer,
    onGetInTouch
}: TopReferrerCardProps) {
    const handleGetInTouch = () => {
        if (onGetInTouch) {
            onGetInTouch(referrer.uid);
        }
    };

    const [imgSrc, setImgSrc] = useState(referrer.avatar && referrer.avatar.trim() !== '' ? referrer.avatar : 'https://www.referrfarm.com/assets/images/placeholder-user-img.png');

    return (
        <div className="w-full max-w-sm bg-gradient-to-b from-gray-900 to-black rounded-lg p-6 shadow-lg border border-gray-800">
            {/* Profile Image */}
            <div className="relative">

                <Image 
                    className="w-full h-80 object-cover rounded-lg grayscale"
                    src={imgSrc}
                    alt={referrer.fullName}
                    width={320}
                    height={320}
                    onError={() => {
                        setImgSrc('https://www.referrfarm.com/assets/images/placeholder-user-img.png');
                    }}
                    />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent rounded-lg" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center">
                        <h3 className="text-2xl font-bold truncate max-w-[200px]">
                            {referrer.fullName}
                        </h3>
                        {referrer.isVerified && (
                            <BadgeCheck className="ml-2 w-5 h-5 text-[#5AE3A9]" />
                        )}
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed truncate max-w-[200px]">
                        {referrer.headline}
                    </p>
                    <p className="text-[#5AE3A9] text-base font-bold truncate max-w-[200px]">
                        {referrer.currentCompany}
                    </p>
                    <div className="text-left text-gray-300 text-xs">
                        Member since {referrer.memberSince}
                    </div>

                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-8 my-4">
                {/* Stats */}
                <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                        <HandHeart className="w-5 h-5 text-[#5AE3A9]" />
                        <span className="text-2xl font-semibold">{referrer.referralsGiven || 0}</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[#5AE3A9]" />
                        <span className="text-2xl font-semibold">{referrer.successfulHires || 0}</span>
                    </div> */}
                </div>

                {/* Action Button */}
                <button
                    onClick={handleGetInTouch}
                    className="w-full bg-[#5AE3A9] text-black font-semibold py-2 px-2 rounded-lg hover:bg-[#4bd399] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    Say hi!
                    <Hand className="w-5 h-5"/>
                    {/* <span className="text-2xl leading-none">+</span> */}
                </button>

            </div>

        </div>
    );
}
export default TopReferrerCard;
