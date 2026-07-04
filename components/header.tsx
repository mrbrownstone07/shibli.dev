"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header 
        className={clsx(
          "fixed top-0 left-0 right-0 z-[999] w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
          isMobileMenuOpen 
            ? "h-[100dvh] bg-[rgba(10,11,13,0.95)] backdrop-blur-[40px] border-b border-transparent" 
            : "h-[72px] bg-[rgba(10,11,13,0.65)] backdrop-blur-[24px] saturate-[1.5] border-b border-[rgba(255,255,255,0.05)]"
        )}
      >
        <nav className="px-[24px] md:px-[44px] h-[72px] flex items-center justify-between relative z-50">
          <Link 
            href="#home" 
            className="font-display text-[20px] font-bold tracking-[-0.02em] text-[#e6e8ec] hover:text-[#8ba6cc] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            mrbrownstone.
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-[32px] font-mono text-[12px] uppercase tracking-[0.15em] text-[#8a909c]">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "hover:text-white transition-colors py-[8px] relative",
                    {
                      "text-white": activeSection === link.name,
                    }
                  )}
                >
                  {link.name}
                  {/* Active Indicator */}
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-white"
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden relative p-2 -mr-2 text-[#e6e8ec] focus:outline-none flex items-center justify-center w-[36px] h-[36px] rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-[18px] h-[12px] flex flex-col justify-between items-center relative">
              <span className={clsx("absolute h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full", isMobileMenuOpen ? "w-[18px] rotate-45 top-[5px]" : "w-[18px] top-0")} />
              <span className={clsx("absolute h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full top-[5px]", isMobileMenuOpen ? "opacity-0 w-[0px]" : "opacity-100 w-[18px]")} />
              <span className={clsx("absolute h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full", isMobileMenuOpen ? "w-[18px] -rotate-45 top-[5px]" : "w-[18px] top-[10.5px]")} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu Content (Expands inside the header) */}
        <div 
          className={clsx(
            "md:hidden absolute top-[72px] left-0 w-full h-[calc(100dvh-72px)] flex flex-col pt-[40px] px-[32px] overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <ul className="flex flex-col gap-[32px]">
            {links.map((link, i) => (
              <li 
                key={link.hash}
                className={clsx(
                  "border-b border-[#2a3547] pb-[16px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isMobileMenuOpen ? "translate-y-0 opacity-100 blur-none" : "translate-y-[20px] opacity-0 blur-md"
                )}
                style={{ transitionDelay: `${isMobileMenuOpen ? i * 40 : 0}ms` }}
              >
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setIsMobileMenuOpen(false);
                  }}
                  className={clsx(
                    "font-display text-[28px] font-semibold tracking-tight transition-colors flex justify-between items-center w-full",
                    activeSection === link.name ? "text-white" : "text-[#8a909c] hover:text-[#e6e8ec]"
                  )}
                >
                  {link.name}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={clsx("transition-colors", activeSection === link.name ? "text-white" : "text-[#5f6572]")}>
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
