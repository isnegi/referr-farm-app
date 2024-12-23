import "@/app/globals.css";
import AppHeader from "../_components/common/app-header";
import AppFooter from "../_components/common/app-footer";

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
