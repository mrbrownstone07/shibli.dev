"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="border-b border-[#17191d] grid grid-cols-1 lg:grid-cols-[1.7fr_1fr]">
      {/* Left Column */}
      <div className="px-[44px] py-[76px] lg:border-r border-[#17191d]">
        <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#8ba6cc] mb-[28px]">
          Security Engineering / System Design
        </div>
        <h1 className="font-display font-bold text-[74px] leading-[0.98] tracking-[-0.03em] m-0 mb-[30px] text-[#e6e8ec]">
          Mahdi Mohammad<br />Shibli
        </h1>
        <p className="text-[18px] leading-[1.65] text-[#b0b5bf] m-0 mb-[16px] max-w-[600px]">
          Software engineer and solution analyst with years spent building backend, financial, and web systems — now deepening that work in applied cybersecurity, system security, and penetration testing.
        </p>
        <p className="text-[15px] leading-[1.7] text-[#8a909c] m-0 mb-[36px] max-w-[600px]">
          I design systems to be reliable and secure by default — and test them like an attacker.
        </p>
        
        <div className="flex items-center gap-[12px] flex-wrap">
          <a
            href="#contact"
            className="flex items-center justify-center h-[44px] px-[24px] rounded-full bg-[#8ba6cc] text-[#0a0f18] font-medium text-[14.5px] hover:bg-[#a5bcda] transition-colors"
          >
            Start a conversation
          </a>
          <div className="flex gap-[12px]">
            <a href="https://linkedin.com/in/mahdimshibli" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[20px] rounded-full border border-[#2a3547] text-[#8a909c] font-medium text-[14px] hover:text-[#e6e8ec] hover:border-[#5f6572] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/mrbrownstone07" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[44px] px-[20px] rounded-full border border-[#2a3547] text-[#8a909c] font-medium text-[14px] hover:text-[#e6e8ec] hover:border-[#5f6572] transition-colors">
              GitHub
            </a>
            <a href="#" className="flex items-center justify-center h-[44px] px-[20px] rounded-full border border-[#2a3547] text-[#8a909c] font-medium text-[14px] hover:text-[#e6e8ec] hover:border-[#5f6572] transition-colors">
              HTB
            </a>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col">
        <div className="px-[36px] py-[26px] border-b border-[#17191d]">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#5f6572] mb-[8px]">Location</div>
          <div className="text-[16px] text-[#e6e8ec]">Berlin, Germany</div>
        </div>
        <div className="px-[36px] py-[26px] border-b border-[#17191d]">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#5f6572] mb-[8px]">Studying</div>
          <div className="text-[16px] text-[#e6e8ec]">EMJM, Applied Cybersecurity (CyberMACS)</div>
        </div>
        <div className="px-[36px] py-[26px] border-b border-[#17191d]">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#5f6572] mb-[8px]">Focus</div>
          <div className="text-[16px] text-[#e6e8ec]">System Design &amp; Offensive Security</div>
        </div>
        <div className="px-[36px] py-[26px] border-b border-[#17191d]">
          <div className="flex items-center gap-[9px] mb-[10px]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#8ba6cc] shadow-[0_0_0_4px_rgba(139,166,204,0.16)]"></span>
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc]">Currently learning</span>
          </div>
          <div className="font-display text-[17px] font-semibold text-[#e6e8ec] leading-[1.3] mb-[6px]">
            Rust for backend &amp; systems programming
          </div>
          <div className="text-[13.5px] text-[#8a909c] leading-[1.55]">
            Memory-safe services and low-level systems — pairing performance with security by design.
          </div>
        </div>
        <div className="px-[36px] py-[26px] flex-1 bg-[rgba(16,185,129,0.03)]">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#5f6572] mb-[12px]">Availability</div>
          <div className="inline-flex items-center gap-[8px] bg-[#10b981]/10 border border-[#10b981]/20 px-[12px] py-[6px] rounded-full">
            <span className="relative flex h-[8px] w-[8px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
            </span>
            <span className="font-mono text-[11.5px] font-semibold tracking-[0.05em] uppercase text-[#10b981]">
              Open for work
            </span>
          </div>
          <div className="text-[13.5px] text-[#8a909c] mt-[12px] leading-[1.5]">
            Targeting backend, systems, and security engineering roles.
          </div>
        </div>
      </div>
    </section>
  );
}
