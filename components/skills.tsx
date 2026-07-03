"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <div
      ref={ref}
      id="skills"
      className="px-[44px] py-[56px] border-b border-[#17191d]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px] mb-[36px]">
        <div>
          <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
            03
          </div>
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
            Skills
          </div>
        </div>
        <h2 className="font-display font-semibold text-[34px] m-0 tracking-[-0.02em] self-center text-[#e6e8ec]">
          Capabilities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-[#17191d] rounded-[12px] overflow-hidden">
        <div className="p-[28px] border-b md:border-b-0 md:border-r border-[#17191d]">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc] mb-[18px]">
            Languages &amp; Frameworks
          </div>
          <div className="flex flex-col gap-[11px] text-[15px] color-[#b0b5bf]">
            <span>Python · Django · DRF · FastAPI</span>
            <span>Laravel · PHP</span>
            <span>JavaScript · React · Next.js</span>
            <span>Solidity · Tailwind</span>
          </div>
        </div>
        <div className="p-[28px] border-b md:border-b-0 md:border-r border-[#17191d]">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc] mb-[18px]">
            Data &amp; Infrastructure
          </div>
          <div className="flex flex-col gap-[11px] text-[15px] color-[#b0b5bf]">
            <span>PostgreSQL · Oracle · MS SQL</span>
            <span>Redis · Nginx</span>
            <span>Linux (server &amp; hardening)</span>
            <span>Git · CI workflows</span>
          </div>
        </div>
        <div className="p-[28px] bg-[rgba(139,166,204,0.04)]">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc] mb-[18px]">
            Security
          </div>
          <div className="flex flex-col gap-[11px] text-[15px] color-[#b0b5bf]">
            <span>System &amp; network security</span>
            <span>Web app security (OWASP)</span>
            <span>Pen testing · Threat modeling</span>
            <span>Burp · Nmap · Wireshark · Metasploit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
