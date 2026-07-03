"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.3);

  return (
    <div
      ref={ref}
      id="work"
      className="px-[44px] py-[56px] border-b border-[#17191d] grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div>
        <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
          02
        </div>
        <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
          Work
        </div>
      </div>

      <div>
        <h2 className="font-display font-semibold text-[36px] m-0 mb-[40px] tracking-tight text-[#e6e8ec] leading-[1.1]">
          Selected work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[50px]">
          {projectsData.map((project, i) => (
            <div key={i} className="group relative cursor-default">
              {/* Subtle ambient glow behind the project */}
              <div className="absolute -inset-[20px] bg-gradient-to-r from-[rgba(139,166,204,0.03)] to-transparent opacity-0 group-hover:opacity-100 blur-[20px] transition-opacity duration-700 pointer-events-none rounded-[30px]"></div>
              
              <div className="relative z-10">
                <div className="font-mono text-[12px] font-medium text-[#5f6572] mb-[14px] tracking-[0.12em] uppercase group-hover:text-[#8ba6cc] transition-colors duration-500">
                  {project.category}
                </div>
                
                <div className="flex items-center gap-[12px] mb-[14px]">
                  <div className="font-display text-[24px] font-semibold tracking-tight text-[#e6e8ec] group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </div>
                  <div className="opacity-0 -translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8ba6cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
                
                <p className="m-0 mb-[26px] text-[15px] leading-[1.6] text-[#8a909c] group-hover:text-[#b0b5bf] transition-colors duration-500">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-[8px]">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-[#5f6572] border border-[#17191d] px-[12px] py-[4px] rounded-full group-hover:border-[#2a3547] group-hover:text-[#8ba6cc] group-hover:bg-[rgba(139,166,204,0.03)] transition-all duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
