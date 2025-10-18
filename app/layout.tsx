import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ReferrFarm - Job Referral Platform | Career Opportunities",
    template: "%s | ReferrFarm"
  },
  description: "Join ReferrFarm, the premier job referral platform. Connect with top referrers, discover career opportunities, and grow through referrals.",
  keywords: [
    "job referrals",
    "career opportunities", 
    "professional networking",
    "job search",
    "referral platform",
    "employment opportunities",
    "career growth",
    "job connections"
  ],
  authors: [{ name: "ReferrFarm Team" }],
  creator: "ReferrFarm",
  publisher: "ReferrFarm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://referrfarm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ReferrFarm - Job Referral Platform | Career Opportunities",
    description: "Join ReferrFarm, the premier job referral platform. Connect with top referrers, discover career opportunities, and grow through referrals.",
    url: 'https://referrfarm.com', // Update with your actual domain
    siteName: 'ReferrFarm',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/images/hero-img.png',
        width: 1200,
        height: 630,
        alt: 'ReferrFarm - Job Referral Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ReferrFarm - Job Referral Platform | Career Opportunities",
    description: "Join ReferrFarm, the premier job referral platform. Connect with top referrers, discover career opportunities, and grow through referrals.",
    images: ['/assets/images/hero-img.png'],
    creator: '@referrfarm', // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ReferrFarm",
    "description": "The premier referral-driven job platform connecting professionals with career opportunities",
    "url": "https://referrfarm.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://referrfarm.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ReferrFarm",
      "url": "https://referrfarm.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://referrfarm.com/assets/images/logo.png"
      }
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5AE3A9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5N2B0490R6"></Script>
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5N2B0490R6');
        </script> */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5N2B0490R6');
          `}
        </Script>

        <Script id="google-analytics" strategy="afterInteractive">
          { JSON.stringify(structuredData) }
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
