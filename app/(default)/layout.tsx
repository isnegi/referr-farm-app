import "@/app/globals.css";
import AppHeader from "../components/common/app-header";
import AppFooter from "../components/common/app-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}
