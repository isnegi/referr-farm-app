import Link from "next/link";

export default function AppFooter() {
  return (
    <div className="grid grid-cols-8 gap-6 md:gap-0">
      <div className="col-span-8 md:col-span-2 lg:col-span-3">
        <div className="flex h-full items-center justify-between gap-2 py-6 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
          <div>
            <Link href="/">LOGO</Link>
          </div>
          <div className="flex gap-6">
            <a href="https://x.com/referrfarm">X</a>
            <a href="https://www.linkedin.com/referrfarm">In</a>
            <a href="https://instagram.com/referrfarm">Ig</a>
          </div>
        </div>
      </div>
      <div className="col-span-8 md:col-span-6 lg:col-span-5 flex justify-end items-end">
        <span className="text-slate-500">© 2024 ReferrFarm & Co. | All right reserved</span>
      </div>
    </div>
  );
}
