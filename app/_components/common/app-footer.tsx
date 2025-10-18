import { BrandLogo } from "@/app/_lib/brand-logo";
import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';


export default function AppFooter() {
  return (
    <div className="grid grid-cols-8 gap-6 md:gap-0">
      <div className="col-span-8 md:col-span-2 lg:col-span-3">
        <div className="flex h-full items-center justify-between gap-2 py-6 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
          <div>
            <Link href="/">
              <Image
                src={logo}
                width={48}
                alt="Referr Farm logo" />
            </Link>
          </div>
          <div className="flex gap-6">
            <a href="https://x.com/referrfarm" target="_blank">
              <BrandLogo brand="x" size={16} />
            </a>
            <a href="https://instagram.com/referrfarm" target="_blank">
              <BrandLogo brand="instagram" size={16} />
            </a>
            <a href="https://www.linkedin.com/company/referrfarm" target="_blank">
              <BrandLogo brand="linkedin" size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-8 md:col-span-6 lg:col-span-5 flex justify-end items-end">
        <div className="flex flex-col items-end space-y-2">
          <div className="flex space-x-6 text-sm">
            <Link href="/about" className="text-slate-500 hover:text-slate-700">About</Link>
            <Link href="/how-it-works" className="text-slate-500 hover:text-slate-700">How It Works</Link>
            <Link href="/contact-us" className="text-slate-500 hover:text-slate-700">Contact</Link>
            <Link href="/privacy-and-cookies" className="text-slate-500 hover:text-slate-700">Privacy</Link>
            <Link href="/terms-of-use" className="text-slate-500 hover:text-slate-700">Terms</Link>
          </div>
          <span className="text-slate-500 text-sm">© 2024 ReferrFarm & Co. | All right reserved</span>
        </div>
      </div>
    </div>
  );
}
