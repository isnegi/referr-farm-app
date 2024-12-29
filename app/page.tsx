import Image from "next/image";
import AppFooter from "./_components/common/app-footer";
import AppHeader from "./_components/common/app-header"
import heroImg from '@/public/assets/images/hero-img.png';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl py-6">
      <AppHeader />
      <div className="grid max-w-screen-xl py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          The Farm of <br/> Opportunities
            </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Together, we create opportunities, celebrate success, and cultivate lasting growth. Join today and grow with the only referral-driven platform.</p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="#" target="_blank" className="px-5 py-3 text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100">
              How it works
            </a>
            <a href="#" target="_blank" className="px-5 py-3 text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100">
              Schedule a call
              
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image width={600} src={heroImg} alt="hero image" />
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
