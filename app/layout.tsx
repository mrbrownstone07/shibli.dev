import Header from "@/components/header";
import "./globals.css";
import { Lato } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Mahdi Shibli | Applied Cybersecurity & Systems Security",
  description:
    "Mahdi Shibli is a software engineer and solution analyst pivoting into applied cybersecurity, focusing on system security and penetration testing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={`${inter.className} bg-cyber-bg text-gray-50 relative pt-28 sm:pt-36 dark:bg-cyber-bg dark:text-gray-50 dark:text-opacity-90`}
      >


        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
