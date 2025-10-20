'use client'

import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Subscribing email:', email);
    // Add your subscription logic here
  };

  return (
    <section 
      className="relative overflow-hidden rounded-lg bg-gradient-to-br from-black to-[#5AE3A9] p-8 text-white shadow-lg md:p-12 lg:p-16 mb-10"
      aria-labelledby="newsletter-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-5 items-center md:divide-x md:divide-white/20">
          {/* Left Side - 60% (3/5) Content */}
          <div className="md:col-span-3 space-y-6 md:pr-8">
            <div className="space-y-3">
              <h3 id="newsletter-heading" className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Never Miss an Opportunity
              </h3>
              <p className="text-base opacity-90 md:text-lg lg:text-xl max-w-2xl">
                Get weekly updates on new referrals, top companies hiring, and insider tips to land your dream job.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex flex-col flex-wrap gap-x-6 gap-y-2 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span>Weekly job alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span>Career tips & guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span>Success stories</span>
                </div>
              </div>
              <p className="text-sm opacity-75">
                Join 5,000+ job seekers. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Right Side - 40% (2/5) Form */}
          <div className="md:col-span-2 md:pl-8">
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-base md:text-lg"
                aria-label="Email address"
              />
              <button
                onClick={handleSubmit}
                className="w-full rounded-md bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-100 hover:shadow-lg text-base md:text-lg"
              >
                Subscribe <Send className="inline-block ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}