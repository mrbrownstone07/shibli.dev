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
        <h2 className="font-display font-semibold text-[34px] m-0 mb-[36px] tracking-[-0.02em] text-[#e6e8ec] leading-[1.1]">
          Selected work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[50px]">
          {projectsData.map((project, i) => (
            <div key={i} className="group">
              <div className="font-mono text-[11.5px] text-[#5f6572] mb-[12px] tracking-[0.05em] uppercase">
                {project.category}
              </div>
              <div className="font-display text-[22px] font-semibold mb-[12px] text-[#e6e8ec] group-hover:text-[#8ba6cc] transition-colors">
                {project.title}
              </div>
              <p className="m-0 mb-[20px] text-[15.5px] leading-[1.65] text-[#8a909c]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[6px] font-mono text-[11px] text-[#5f6572]">
                {project.tags.map((tag, j) => (
                  <React.Fragment key={j}>
                    <span className="text-[#8ba6cc]">{tag}</span>
                    {j !== project.tags.length - 1 && <span>·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
