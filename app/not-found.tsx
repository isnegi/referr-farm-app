import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - ReferrFarm",
  description: "The page you're looking for doesn't exist. Find job referrals and career opportunities on ReferrFarm.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist. Let's get you back to finding 
            <Link href="/" className="text-blue-600 hover:underline"> job referrals</Link> and 
            <Link href="/how-it-works" className="text-blue-600 hover:underline"> career opportunities</Link>.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <div className="text-sm text-gray-500">
            <Link href="/how-it-works" className="hover:underline mr-4">How It Works</Link>
            <Link href="/about" className="hover:underline mr-4">About Us</Link>
            <Link href="/contact-us" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
