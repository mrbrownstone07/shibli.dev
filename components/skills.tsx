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
        <h2 className="font-display font-semibold text-[36px] m-0 mb-[40px] tracking-tight text-[#e6e8ec] leading-[1.1]">
          Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[50px]">
          {/* Languages */}
          <div className="group relative">
            <div className="font-mono text-[12px] font-medium tracking-[0.12em] uppercase text-[#5f6572] mb-[22px] pb-[14px] border-b border-[#17191d] group-hover:text-[#8ba6cc] group-hover:border-[#2a3547] transition-colors duration-500">
              Languages &amp; Frameworks
            </div>
            <ul className="flex flex-col gap-[16px]">
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Python, Django, DRF, FastAPI</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">JavaScript, React, Next.js, Tailwind</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Laravel, PHP, Solidity</span>
              </li>
            </ul>
          </div>
          
          {/* Data */}
          <div className="group relative">
            <div className="font-mono text-[12px] font-medium tracking-[0.12em] uppercase text-[#5f6572] mb-[22px] pb-[14px] border-b border-[#17191d] group-hover:text-[#8ba6cc] group-hover:border-[#2a3547] transition-colors duration-500">
              Data &amp; Infrastructure
            </div>
            <ul className="flex flex-col gap-[16px]">
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">PostgreSQL, Oracle, MS SQL</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Redis, Nginx, RabbitMQ</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Linux server hardening, Git, CI/CD</span>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="group relative">
            <div className="font-mono text-[12px] font-medium tracking-[0.12em] uppercase text-[#5f6572] mb-[22px] pb-[14px] border-b border-[#17191d] group-hover:text-[#8ba6cc] group-hover:border-[#2a3547] transition-colors duration-500">
              Security
            </div>
            <ul className="flex flex-col gap-[16px]">
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">System &amp; network security</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Web app security (OWASP Top 10)</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Pen testing, Threat modeling</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Burp Suite, Nmap, Wireshark</span>
              </li>
            </ul>
          </div>

          {/* Leadership */}
          <div className="group relative">
            <div className="font-mono text-[12px] font-medium tracking-[0.12em] uppercase text-[#5f6572] mb-[22px] pb-[14px] border-b border-[#17191d] group-hover:text-[#8ba6cc] group-hover:border-[#2a3547] transition-colors duration-500">
              Leadership &amp; Workflow
            </div>
            <ul className="flex flex-col gap-[16px]">
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Technical architecture ownership</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Cross-functional communication</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Vendor &amp; stakeholder management</span>
              </li>
              <li className="flex items-start gap-[14px] group/item cursor-default">
                <span className="text-[#2a3547] font-mono text-[14px] mt-[1px] group-hover/item:text-[#8ba6cc] group-hover/item:-translate-y-[2px] group-hover/item:translate-x-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">↳</span>
                <span className="text-[15px] leading-[1.6] text-[#a0a5b0] group-hover/item:text-[#e6e8ec] group-hover/item:translate-x-[4px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">Agile product delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
