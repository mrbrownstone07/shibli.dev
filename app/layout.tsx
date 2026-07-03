import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Mahdi Shibli — Backend Engineer",
  description:
    "Software engineer and solution analyst with years spent building backend, financial, and web systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-0 bg-[#0a0b0d] text-[#e6e8ec] font-body min-h-screen">
        <ActiveSectionContextProvider>
          <div className="max-w-[1180px] mx-auto border-x border-[#17191d]">
            <Header />
            {children}
          </div>
          <Toaster position="bottom-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
