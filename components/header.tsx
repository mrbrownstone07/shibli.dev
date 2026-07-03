"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="sticky top-0 z-[999] w-full border-b border-[#17191d] bg-[#0a0b0d]/80 backdrop-blur-md">
      <nav className="px-[44px] h-[72px] flex items-center justify-between">
        <Link href="#home" className="font-display text-[20px] font-bold tracking-[-0.02em] text-[#e6e8ec] hover:text-[#8ba6cc] transition-colors">
          mrbrownstone.
        </Link>
        <ul className="flex items-center gap-[32px] font-mono text-[12px] uppercase tracking-[0.1em] text-[#8a909c]">
          {links.map((link) => (
            <li key={link.hash} className="relative">
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "hover:text-[#e6e8ec] transition-colors py-[8px]",
                  {
                    "text-[#8ba6cc]": activeSection === link.name,
                  }
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
