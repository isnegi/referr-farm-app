import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact ReferrFarm - Get in Touch with Our Team",
  description: "Contact ReferrFarm for support, partnerships, or general inquiries. We're here to help you succeed in your career journey through our referral platform.",
  keywords: [
    "contact referrfarm",
    "support",
    "customer service",
    "partnership opportunities",
    "help center",
    "job referral support"
  ],
  openGraph: {
    title: "Contact ReferrFarm - Get in Touch with Our Team",
    description: "Contact ReferrFarm for support, partnerships, or general inquiries. We're here to help you succeed in your career journey.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ReferrFarm - Get in Touch with Our Team",
    description: "Contact ReferrFarm for support, partnerships, or general inquiries.",
  },
};

export default function ContactUs() {
  return (
    <main>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-[#5AE3A9]">Us</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Have questions about ReferrFarm? We&apos;d love to hear from you. Get in touch with our team.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-gray-600">hello@referrfarm.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                  <p className="text-gray-600">support@referrfarm.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Partnerships</h3>
                  <p className="text-gray-600">partnerships@referrfarm.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Press & Media</h3>
                  <p className="text-gray-600">press@referrfarm.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How do I get started?</h3>
                  <p className="text-gray-600">Simply create an account and complete your profile to start browsing opportunities or posting referrals.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is ReferrFarm free to use?</h3>
                  <p className="text-gray-600">Yes, our basic platform is free for all users. Premium features are available for enhanced networking.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How do referrals work?</h3>
                  <p className="text-gray-600">Referrers can post job opportunities they can refer candidates for, and job seekers can apply through our platform.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Immediate Help?</h2>
            <p className="text-gray-600 mb-4">
              Check out our comprehensive help center for instant answers to common questions, 
              or schedule a call with our team for personalized assistance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/help-center" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5AE3A9] hover:bg-[#4BC494] transition-colors"
              >
                Visit Help Center
              </a>
              <a 
                href="/schedule-a-call" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
