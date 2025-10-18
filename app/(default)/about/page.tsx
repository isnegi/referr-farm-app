import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About ReferrFarm - Building Career Opportunities Through Referrals",
  description: "Learn about ReferrFarm's mission to revolutionize job search through referral networks. Discover how we connect professionals and create meaningful career opportunities.",
  keywords: [
    "about referrfarm",
    "job referral platform",
    "career opportunities",
    "professional networking",
    "referral system",
    "job search innovation"
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About ReferrFarm - Building Career Opportunities Through Referrals",
    description: "Learn about ReferrFarm's mission to revolutionize job search through referral networks. Discover how we connect professionals and create meaningful career opportunities.",
    type: "website",
    url: "https://referrfarm.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ReferrFarm - Building Career Opportunities Through Referrals",
    description: "Learn about ReferrFarm's mission to revolutionize job search through referral networks.",
  },
};

export default function About() {
  return (
    <main>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-[#5AE3A9]">ReferrFarm</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We&apos;re revolutionizing how professionals find career opportunities through the power of referrals.
          </p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At ReferrFarm, we believe that the best career opportunities come through trusted connections. 
              Our platform bridges the gap between talented professionals seeking new roles and companies looking 
              for exceptional talent through referral networks.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Referrals Matter</h2>
            <p className="text-gray-600 mb-6">
              Studies show that referred candidates are more likely to be hired, perform better, and stay longer 
              with companies. We&apos;ve built ReferrFarm to amplify this natural advantage, creating a thriving 
              ecosystem where everyone benefits.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To become the world&apos;s leading referral-driven career platform, where every professional can 
              access opportunities through their network and every company can find the perfect talent through 
              trusted referrals.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600">
              Whether you&apos;re looking for your next career opportunity or want to help others succeed, 
              ReferrFarm provides the tools and community to make meaningful connections that drive 
              professional growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
