"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import ReactElement from "react";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.3);

  return (
    <div
      ref={ref}
      id="work"
      className="px-[44px] pt-[56px] pb-0 border-b border-[#17191d]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px] mb-[40px]">
        <div>
          <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
            02
          </div>
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
            Showcase
          </div>
        </div>
        <h2 className="font-display font-semibold text-[34px] m-0 tracking-[-0.02em] self-center text-[#e6e8ec]">
          Selected work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#17191d]">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className={`px-[26px] pt-[32px] pb-[40px] transition-colors duration-250 hover:bg-[rgba(139,166,204,0.04)] ${
              i !== projectsData.length - 1 ? "border-b md:border-b-0 md:border-r border-[#17191d]" : ""
            }`}
          >
            <div className="font-mono text-[12px] text-[#5f6572] mb-[18px]">
              {project.category}
            </div>
            <div className="font-display text-[23px] font-semibold mb-[12px]">
              {project.title}
            </div>
            <p className="m-0 mb-[20px] text-[14px] leading-[1.6] text-[#8a909c]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-[6px] font-mono text-[11px] text-[#8ba6cc]">
              {project.tags.map((tag, j) => (
                <React.Fragment key={j}>
                  <span>{tag}</span>
                  {j !== project.tags.length - 1 && <span>·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
