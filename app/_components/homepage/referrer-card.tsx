"use client";

import React from 'react';
import { Users, Briefcase } from 'lucide-react';
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

  return (
    <div className="w-full max-w-sm bg-gradient-to-b from-gray-900 to-black rounded-lg p-6 shadow-lg border border-gray-800">
      {/* Profile Image */}
      <div className="relative mb-6">
        <Image className="w-full h-80 object-cover rounded-lg grayscale" src={referrer.avatar} alt={referrer.fullName} width={72} height={72} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent rounded-lg" />
        
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-3xl font-bold">{referrer.fullName}</h3>
            {referrer.isVerified && (
              <div className="bg-[#5AE3A9] rounded-lg p-1.5 flex-shrink-0">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          <p className="text-gray-200 text-lg leading-relaxed">
            {referrer.headline}
          </p>
          <p className="text-[#5AE3A9] text-base mt-1 font-medium">
            {referrer.currentCompany}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 mb-6 text-white">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-[#5AE3A9]" />
          <span className="text-2xl font-semibold">{referrer.referralsGiven || 0}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#5AE3A9]" />
          <span className="text-2xl font-semibold">{referrer.successfulHires || 0}</span>
        </div>
      </div>

      {/* Stats Labels */}
      {/* <div className="flex items-center gap-6 mt-3 text-gray-500 text-sm">
        <span className="flex-1">Referrals Given</span>
        <span className="flex-1">Successful Hires</span>
      </div> */}

      {/* Member Since */}
      <div className="text-left text-gray-500 text-sm my-4">
        Member since {referrer.memberSince}
      </div>

      {/* Action Button */}
      <button 
        onClick={handleGetInTouch}
        className="w-full bg-[#5AE3A9] text-black font-semibold text-xl py-4 px-6 rounded-lg hover:bg-[#4bd399] transition-colors duration-200 flex items-center justify-center gap-2"
      >
        Get in Touch
        <span className="text-2xl leading-none">+</span>
      </button>

    </div>
  );
}
export default TopReferrerCard;
