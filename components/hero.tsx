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
        
        <div className="flex items-center gap-[14px] flex-wrap">
          <a
            href="#contact"
            className="font-semibold text-[15px] text-[#0a0f18] bg-[#8ba6cc] px-[24px] py-[13px] rounded-[8px] hover:bg-[#a5bcda] transition-colors"
          >
            Start a conversation →
          </a>
          <div className="flex gap-[10px] font-mono text-[12px] tracking-[0.04em] uppercase text-[#8a909c]">
            <a href="https://linkedin.com/in/mahdimshibli" target="_blank" rel="noopener noreferrer" className="border border-[#262932] px-[14px] py-[10px] rounded-[8px] transition-colors hover:text-[#e6e8ec] hover:border-[#3a4150]">LinkedIn</a>
            <a href="https://github.com/mrbrownstone07" target="_blank" rel="noopener noreferrer" className="border border-[#262932] px-[14px] py-[10px] rounded-[8px] transition-colors hover:text-[#e6e8ec] hover:border-[#3a4150]">GitHub</a>
            <a href="#" className="border border-[#262932] px-[14px] py-[10px] rounded-[8px] transition-colors hover:text-[#e6e8ec] hover:border-[#3a4150]">HTB</a>
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
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#5f6572] mb-[8px]">Status</div>
          <div className="text-[16px] text-[#8ba6cc]">Open to: security roles | Backend &amp; systems programming</div>
        </div>
        <div className="px-[36px] py-[26px] flex-1 bg-[rgba(139,166,204,0.05)]">
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
      </div>
    </section>
  );
}
