import Image from "next/image";
import AppFooter from "./_components/common/app-footer";
import AppHeader from "./_components/common/app-header"
import heroImg from '@/public/assets/images/hero-img.png';
import { Asterisk } from "lucide-react";
import Link from "next/link";
import ListingCarousel from "./_components/homepage/simple-carousel";
import LogoBasedCarousel from "./_components/homepage/logo-based-carousel";
import NewsletterSection from "./_components/homepage/newsletter-section";

export default function Home() {

  const topReferrers = [
    {
      "uid": "a768067b-cb72-4d6c-b5ee-e670273caaeb", 
      "fullName": "Simone Cawte", 
      "headline": "Payment Adjustment Coordinator", 
      "currentCompany": "Meevee", 
      "avatar": "https://www.referrfarm.com/assets/images/avatar.png", 
      "memberSince": "2/3/2023" 
    },
    { 
      "uid": "cd978bab-b02d-4668-a590-11530d9f42d0", 
      "fullName": "Marylou Raycroft", 
      "headline": "Staff Accountant I", 
      "currentCompany": "Oyope", 
      "avatar": "https://www.referrfarm.com/assets/sample/user-01.jpg", 
      "memberSince": "10/30/2024" 
    },
    { 
      "uid": "bf0ba468-326e-4099-870c-58531b0bcda4", 
      "fullName": "Alexandrina Nettleship", 
      "headline": "Senior Cost Accountant", 
      "currentCompany": "Twimbo", 
      "avatar": "https://www.referrfarm.com/assets/sample/user-02.jpg", 
      "memberSince": "3/1/2022" 
    },
    { 
      "uid": "7b2f32f5-6253-4e9b-85ec-e01811f8245f", 
      "fullName": "Phelia Acaster", 
      "headline": "Accountant I", 
      "currentCompany": "Mudo", 
      "avatar": "https://www.referrfarm.com/assets/images/logo-white.png",
      "memberSince": "9/4/2024"
    },
    {
      "uid": "584d843c-09ac-46b2-950f-fae7893e8fcf",
      "fullName": "Siouxie Clayson", 
      "headline": "Business Systems Development Analyst", 
      "currentCompany": "Aivee", 
      "avatar": "", 
      "memberSince": "8/11/2022"
    },
    { 
      "uid": "208c924b-8dae-4729-87d1-15020b6ec713", 
      "fullName": "Wendeline Palphreyman", 
      "headline": "VP Sales", 
      "currentCompany": "Jayo", 
      "avatar": "", 
      "memberSince": "12/7/2023" 
    },
  ];

  const topCompanies = [
    { 
      "uid": "365cdb16-7e2a-4e51-8f93-9eda295b5f92", 
      "companyName": "ReferrFarm & Co.", 
      "avatar": "https://www.referrfarm.com/assets/images/logo-white.png", 
      "url": "https://www.referrfarm.com/", 
      "openings": 4 
    },
    { 
      "uid": "e2b9257b-cbd1-4b60-ab41-e7c7a9c7c363", 
      "companyName": "Microsoft", 
      "avatar": "https://logo.clearbit.com/microsoft.com", 
      "url": "https://careers.microsoft.com", 
      "openings": 32 
    },
    { 
      "uid": "a3f8c421-9b2d-4f56-8e71-d4b9c8a1f234", 
      "companyName": "Amazon", 
      "avatar": "https://logo.clearbit.com/amazon.com", 
      "url": "https://amazon.jobs", 
      "openings": 89 
    },
    { 
      "uid": "b7d2e891-3c4a-4d67-9f82-e5c6d7f8a9b0", 
      "companyName": "Meta", 
      "avatar": "", 
      "url": "https://metacareers.com", 
      "openings": 28 
    },
    { 
      "uid": "c9e4f123-5d6b-4e78-a091-f7d8e9a1b2c3", 
      "companyName": "Netflix", 
      "avatar": "", 
      "url": "https://jobs.netflix.com", 
      "openings": 15 
    }
  ];

  const feedbacks = [
    {
      uid: 'abc101',
      heading: 'The Quick Win',
      body: "I applied to [Company] 3 times through their portal with no response. Got a referral here and had an interview scheduled within a week. Game changer!",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      uname: "Bonnie Green",
      position: "Developer at Open AI"
    }, {
      uid: 'abc102',
      heading: 'The Fresher Success',
      body: "As a fresher, I was struggling to even get noticed. Through this platform, I connected with an employee at [Company] who guided me and referred me. Now I'm part of their team!",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      uname: "Roberta Casas",
      position: "Lead designer at Dropbox"
    }, {
      uid: 'abc103',
      heading: 'The Career Switcher',
      body: "Switching industries felt impossible until I found employees willing to refer me. The direct connection made all the difference. Landed 3 interviews in 2 weeks.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      uname: "Jese Leos",
      position: "Software Engineer at Facebook"
    }, {
      uid: 'abc104',
      heading: 'The Relief',
      body: "Finally, a platform that actually works! No fake job posts, no recruiter spam. Just real employees with real openings. Got referred within 2 days of requesting.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      uname: "Joseph McFall",
      position: "CTO at Google"
    }
  ];

  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ReferrFarm",
            "description": "The premier referral-driven job platform connecting professionals with career opportunities",
            "url": "https://referrfarm.com",
            "logo": "https://referrfarm.com/assets/images/logo.png",
            "sameAs": [
              "https://twitter.com/referrfarm",
              "https://linkedin.com/company/referrfarm"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "offers": {
              "@type": "Offer",
              "description": "Job referral platform connecting professionals with career opportunities",
              "price": "0",
              "priceCurrency": "USD"
            }
          }),
        }}
      />
      
      <main className="mx-auto max-w-7xl py-6">
        <AppHeader />
        
        {/* Hero Section */}
        <section className="grid max-w-screen-xl lg:gap-8 xl:gap-0 lg:grid-cols-12" style={{height: '90vh'}}>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Get Referred.<br />
              Get Hired.<br />
              <span style={{color: '#5AE3A9'}}>
                Get Ahead.
              </span>
            </h1>
            <p className="max-w-2xl mt-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Connect with employees who can refer you directly to your dream company. Skip the black hole of job portals and get your resume in front of hiring managers.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link 
                role="button" 
                href={'/how-it-works'} 
                className="flex items-center px-5 py-3 text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Find Referrals"
              >
                Find Referrals
              </Link>
              <Link 
                role="button" 
                href={'/schedule-a-call'} 
                className="flex items-center px-5 py-3 text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Post a Referral & Earn"
              >
                Post a Referral & Earn
              </Link>
            </div>
          </div>
          <div className="mr-auto place-self-center hidden lg:col-span-5 lg:flex">
            <Image 
              width={600} 
              height={400}
              src={heroImg} 
              alt="ReferrFarm platform showcasing job referral opportunities and professional networking" 
              priority
            />
          </div>
        </section>

        {/* Trust/Stats Section */}
        <section 
          className="relative overflow-hidden rounded-lg bg-gradient-to-br from-black to-[#5AE3A9] p-8 text-center text-white shadow-lg md:p-16 lg:p-20"
          aria-labelledby="top-referrers-heading"
        >
          <div className="relative z-10 mx-auto max-w-4xl space-y-4 flex flex-col items-center justify-center">
            <h3 id="top-referrers-heading" className="text-3xl font-medium tracking-tight md:text-5xl">
              How Referrals Change the Game
            </h3>
            <ul className="text-lg text-balance font-bold opacity-80 sm:text-xl text-left">
              <li><Asterisk className="inline-block mr-2" /> 40% of hires come through referrals (LinkedIn data)</li>
              <li><Asterisk className="inline-block mr-2" /> Referred candidates are hired 55% faster</li>
              <li><Asterisk className="inline-block mr-2" /> 4x higher chance of getting an interview</li>
            </ul>
          </div>
        </section>

        {/* Top Referrers Section */}
        <section className="max-w-screen-xl py-8 lg:py-16 lg:pt-28" aria-labelledby="top-referrers-heading">
          <h2 id="top-referrers-heading" className="mb-2 text-2xl font-extrabold tracking-tight md:text-5xl xl:text-4xl">
            Most Active Referrers
            {/* Top Referrers This Month */}
          </h2>
          <p className="mb-4 text-gray-600">
            These professionals have helped the most job seekers land interviews. Connect with active referrers at your target companies.
          </p>
          <ListingCarousel list={topReferrers} />
        </section>

        {/* Companies Seeking Referrals Section */}
        <section className="max-w-screen-xl py-8 lg:py-16 lg:pt-28" aria-labelledby="companies-heading">
          <h2 id="companies-heading" className="mb-2 text-2xl font-extrabold tracking-tight md:text-5xl xl:text-4xl">
            Companies Hiring Right Now
          </h2>
          <p className="mb-4 text-gray-600">
            These companies have active employees ready to refer you. Browse open positions and request your referral today.
          </p>
          <LogoBasedCarousel list={topCompanies} />
        </section>

        {/* Testimonials Section */}
        <section className="bg-white dark:bg-gray-900" aria-labelledby="testimonials-heading">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm">
              <h2 id="testimonials-heading" className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Real Stories, Real Results
              </h2>
              <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                See how job seekers landed interviews and employees earned by helping others.
              </p>
            </div>
            <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
              {
                feedbacks.map(feedback => {
                  return (
                    <article key={feedback.uid} className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                      <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {feedback.heading}
                        </h3>
                        <p className="my-4">{feedback.body}</p>
                      </blockquote>
                      <figcaption className="flex justify-center items-center space-x-3">
                        <Image 
                          className="w-9 h-9 rounded-full" 
                          width={600} 
                          height={400}
                          src={feedback.avatar} 
                          alt={`Profile picture of ${feedback.uname}`}
                          priority
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>{feedback.uname}</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {feedback.position}
                          </div>
                        </div>
                      </figcaption>
                    </article>
                  )
                })
              }
            </div>
          </div>
        </section>

        <NewsletterSection />

      </main>
      <AppFooter />
    </>
  );
}
