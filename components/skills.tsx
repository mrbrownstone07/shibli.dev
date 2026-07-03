"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <div
      ref={ref}
      id="skills"
      className="px-[44px] py-[56px] border-b border-[#17191d] grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div>
        <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
          03
        </div>
        <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
          Skills
        </div>
      </div>

      <div>
        <h2 className="font-display font-semibold text-[34px] m-0 mb-[36px] tracking-[-0.02em] text-[#e6e8ec] leading-[1.1]">
          Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[40px]">
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc] mb-[16px] pb-[8px] border-b border-[#2a3547]">
              Languages &amp; Frameworks
            </div>
            <div className="flex flex-col gap-[12px] text-[15px] text-[#b0b5bf]">
              <span>Python · Django · DRF · FastAPI</span>
              <span>Laravel · PHP</span>
              <span>JavaScript · React · Next.js</span>
              <span>Solidity · Tailwind</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc] mb-[16px] pb-[8px] border-b border-[#2a3547]">
              Data &amp; Infrastructure
            </div>
            <div className="flex flex-col gap-[12px] text-[15px] text-[#b0b5bf]">
              <span>PostgreSQL · Oracle · MS SQL</span>
              <span>Redis · Nginx</span>
              <span>Linux (server &amp; hardening)</span>
              <span>Git · CI workflows</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc] mb-[16px] pb-[8px] border-b border-[#2a3547]">
              Security
            </div>
            <div className="flex flex-col gap-[12px] text-[15px] text-[#b0b5bf]">
              <span>System &amp; network security</span>
              <span>Web app security (OWASP)</span>
              <span>Pen testing · Threat modeling</span>
              <span>Burp · Nmap · Wireshark</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#8ba6cc] mb-[16px] pb-[8px] border-b border-[#2a3547]">
              Leadership &amp; Workflow
            </div>
            <div className="flex flex-col gap-[12px] text-[15px] text-[#b0b5bf]">
              <span>Technical architecture ownership</span>
              <span>Cross-functional communication</span>
              <span>Vendor &amp; stakeholder management</span>
              <span>Agile product delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
