import type { Metadata } from "next";
import "@/app/globals.css";
import AppHeader from "../_components/common/app-header";
import AppFooter from "../_components/common/app-footer";
import AppHeaderSecure from "../_components/common/app-header-secure";
import AppFooterSecure from "../_components/common/app-footer-secure";

export const metadata: Metadata = {
  title: "Dashboard | Home",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto">
      <AppHeaderSecure />
      {children}
      <AppFooterSecure />
    </div>

  );
}
