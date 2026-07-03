"use client";

import React from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header
      id="home-nav"
      className="sticky top-0 z-20 flex items-center justify-between px-[44px] py-[22px] border-b border-[#17191d] bg-[rgba(10,11,13,0.82)] backdrop-blur-[12px]"
    >
      <a
        href="#home"
        className="font-display text-[18px] font-semibold tracking-[0.02em] text-[#e6e8ec]"
        onClick={() => {
          setActiveSection("Home");
          setTimeOfLastClick(Date.now());
        }}
      >
        MS<span className="text-[#8ba6cc]">.</span>
      </a>
      
      <nav className="hidden md:flex gap-[26px] text-[12.5px] font-medium uppercase tracking-[0.06em]">
        {links.slice(1).map((link) => (
          <a
            key={link.hash}
            href={link.hash}
            className={`transition-colors duration-200 ${
              activeSection === link.name ? "text-[#e6e8ec]" : "text-[#8a909c] hover:text-[#e6e8ec]"
            }`}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
