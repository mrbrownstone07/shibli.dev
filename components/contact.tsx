"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <div
      ref={ref}
      id="contact"
      className="px-[44px] py-[76px] grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div>
        <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
          07
        </div>
        <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
          Contact
        </div>
      </div>
      <div>
        <h2 className="font-display font-semibold text-[44px] tracking-tight m-0 mb-[24px] leading-[1.1] max-w-[640px] text-[#e6e8ec]">
          Let's talk about building systems that hold up under pressure.
        </h2>
        <a
          href="mailto:mahdi.mshibli@gmail.com"
          className="text-[20px] text-[#8ba6cc] border-b border-[#2a3547] pb-[4px] transition-colors duration-200 hover:text-[#a5bcda] hover:border-[#8ba6cc]"
        >
          mahdi.mshibli@gmail.com
        </a>
        
        <div className="mt-[40px] flex gap-[20px] font-mono text-[12px] tracking-[0.06em] uppercase text-[#8a909c]">
          <a href="https://linkedin.com/in/mahdimshibli" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#e6e8ec]">LinkedIn</a>
          <a href="https://github.com/mrbrownstone07" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#e6e8ec]">GitHub</a>
          <a href="#" className="transition-colors hover:text-[#e6e8ec]">Hack The Box</a>
        </div>
        
        <div className="mt-[36px] font-mono text-[12px] text-[#4f545e]">
          © {new Date().getFullYear()} Mahdi Mohammad Shibli
        </div>
      </div>
    </div>
  );
}
