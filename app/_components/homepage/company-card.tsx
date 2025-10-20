"use client";

import React, { useState } from 'react';
import { ExternalLink, Briefcase } from 'lucide-react';
import Image from 'next/image';

// Update this interface to match your parent component's type
interface CompanyData {
    uid: string;
    companyName: string;
    avatar: string;  // Changed from 'logo'
    url?: string;     // Changed from 'website'
    openings: number; // Changed from 'activeReferrals'
}

interface CompanyCardProps {
    company: CompanyData;
    onViewReferrals?: (uid: string) => void;
}

function CompanyCard({
    company,
    onViewReferrals
}: CompanyCardProps) {

    const handleViewReferrals = () => {
        if (onViewReferrals) {
            onViewReferrals(company.uid);
        }
    };

    const formatCount = (count: number) => count > 99 ? '99+' : count;
    const [imgSrc, setImgSrc] = useState(company.avatar && company.avatar.trim() !== '' ? company.avatar : 'https://www.referrfarm.com/assets/images/placeholder-company-img.jpg');


    return (
        <div className="w-full max-w-sm bg-gradient-to-b from-gray-900 to-black rounded-md p-4 shadow-xl border border-gray-800">
            {/* Company Logo Section - Large Hero Style */}
            <div className="relative mb-3">
                <div className="w-full h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md flex items-center justify-center overflow-hidden relative">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <Image 
                        className="w-full h-40 object-contain rounded-md grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
                        style={{ width: 'auto' }}
                        src={imgSrc}
                        alt={company.companyName}
                        width={160}
                        height={160}
                        onError={() => {
                            setImgSrc('https://www.referrfarm.com/assets/images/placeholder-company-img.jpg');
                        }}
                        />

                    {/* Active Referrals Badge - Floating on image */}
                    <div className="absolute bottom-4 right-4 bg-[#5AE3A9] text-black px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg z-20">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-bold text-sm">{formatCount(company.openings)}</span>
                    </div>
                </div>
            </div>

            {/* Company Info */}
            <div className="mb-3">
                <h3 className="text-2xl font-bold text-white truncate">
                    {company.companyName.length > 20
                        ? `${company.companyName.substring(0, 20)}...`
                        : company.companyName
                    }
                </h3>

                {/* Website Link - Styled like a tag */}
                {company.url && (
                    <a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#5AE3A9] hover:text-[#4bd399] transition-colors text-sm font-medium group"
                    >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                )}
            </div>

            {/* Stats Bar */}
            {/* <div className="mb-6 bg-gray-800/30 rounded-xl p-2 border border-gray-700/50">
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Active Openings</span>
                    <span className="text-white text-ml font-bold">{formatCount(company.openings)}</span>
                </div>
            </div> */}

            {/* Action Button */}
            <button
                onClick={handleViewReferrals}
                className="w-full bg-[#5AE3A9] text-black font-semibold text-md py-2 px-4 rounded-md hover:bg-[#4bd399] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#5AE3A9]/20"
            >
                View All Referrals
                <span className="text-2xl leading-none">→</span>
            </button>
        </div>
    );
}

export default CompanyCard;
