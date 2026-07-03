"use client";

import React from "react";

export default function Certifications() {
  return (
    <div
      id="certifications"
      className="px-[44px] py-[56px] border-b border-[#17191d] grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px]"
    >
      <div>
        <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
          06
        </div>
        <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
          Certifications
        </div>
      </div>

      <div>
        <h2 className="font-display font-semibold text-[36px] m-0 mb-[40px] tracking-tight text-[#e6e8ec] leading-[1.1]">
          Industry credentials
        </h2>

        <div className="group relative">
          {/* Ambient Background Glow */}
          <div className="absolute -inset-[20px] bg-gradient-to-r from-[rgba(139,166,204,0.03)] to-transparent opacity-0 group-hover:opacity-100 blur-[20px] transition-opacity duration-700 pointer-events-none rounded-[30px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-[20px] border border-[#17191d] bg-[#0a0b0d] p-[24px] rounded-[16px] group-hover:border-[#2a3547] transition-colors duration-500">
            <div>
              <div className="font-display text-[20px] font-semibold text-[#e6e8ec] mb-[6px]">
                Cisco Certified Network Associate (CCNA)
              </div>
              <div className="font-mono text-[13px] text-[#8a909c]">
                Cisco <span className="mx-[6px] text-[#2a3547]">|</span> Issued May 2026 - Expires May 2029
              </div>
              <div className="font-mono text-[11px] text-[#5f6572] mt-[8px]">
                Credential ID: 6733f84a-5792-474e-9b7e-d2d39d1a0a86
              </div>
            </div>
            
            <a 
              href="https://www.credly.com/badges/6733f84a-5792-474e-9b7e-d2d39d1a0a86/public_url" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-[8px] font-mono text-[12px] font-medium tracking-[0.05em] uppercase text-[#8ba6cc] border border-[#2a3547] px-[16px] py-[10px] rounded-full hover:bg-[rgba(139,166,204,0.05)] hover:border-[#8ba6cc] hover:text-[#e6e8ec] transition-all duration-300"
            >
              Verify Credential
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
