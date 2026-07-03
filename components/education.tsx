"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education");

  const educations = [
    {
      degree: "MSc in Cybersecurity",
      school: "SRH Berlin University",
      date: "2026 — 2027 · Berlin",
      status: "In progress",
      description: "Year two mobility of the Erasmus Mundus Joint Master (CyberMACS), focusing on advanced offensive techniques, secure system architecture, and European regulatory compliance.",
      tags: ["Offensive Security", "System Architecture", "Compliance"],
    },
    {
      degree: "MSc in Cybersecurity",
      school: "Kadir Has University",
      date: "2025 — 2026 · Istanbul",
      status: "",
      description: "Year one mobility of EMJM CyberMACS. Intensive coursework covering System Security, Penetration Testing, Applied Cryptography, and Time Series Analysis for threat detection.",
      tags: ["Penetration Testing", "Applied Cryptography", "Threat Detection"],
    },
    {
      degree: "Erasmus+ BIP",
      school: "Ss. Cyril and Methodius University",
      date: "Apr 2026 · Skopje",
      status: "",
      description: "One-month intensive simulation program executing live vulnerability testing, hardware security analysis, and multi-stage disaster recovery (BIA/BCP) under pressure.",
      tags: ["Disaster Recovery", "Hardware Security", "Simulations"],
    },
    {
      degree: "BSc in Computer Science",
      school: "North South University",
      date: "2017 — 2021 · Dhaka",
      status: "",
      description: "Undergraduate foundation in software engineering, algorithms, and distributed systems. Active member of the NSU Problem Solving Club.",
      tags: ["Software Engineering", "Algorithms", "Databases"],
    }
  ];

  return (
    <div
      ref={ref}
      id="education"
      className="px-[44px] py-[56px] border-b border-[#17191d] grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div>
        <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
          05
        </div>
        <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
          Education
        </div>
      </div>

      <div>
        <h2 className="font-display font-semibold text-[36px] m-0 mb-[40px] tracking-tight text-[#e6e8ec] leading-[1.1]">
          Academic path
        </h2>

        <div className="relative pl-[44px]">
          <div className="absolute left-[5px] top-[7px] bottom-[9px] w-[1px] bg-gradient-to-b from-[#8ba6cc55] to-[#20242b]"></div>
          
          {educations.map((edu, i) => (
            <div key={i} className={`relative ${i !== educations.length - 1 ? 'pb-[44px]' : ''}`}>
              <div className={`absolute left-[-44px] top-[5px] w-[11px] h-[11px] rounded-full border-[2px] border-[#8ba6cc] ${edu.status ? 'bg-[#8ba6cc] shadow-[0_0_0_4px_rgba(139,166,204,0.15)]' : 'bg-[#0a0b0d]'}`}></div>
              
              <div className="flex items-baseline justify-between gap-[20px] flex-wrap mb-[6px]">
                <div className="font-display text-[20px] font-semibold text-[#e6e8ec]">
                  {edu.degree}
                  {edu.status && (
                    <span className="font-mono text-[10.5px] font-medium tracking-[0.08em] uppercase text-[#8ba6cc] border border-[#2a3547] px-[8px] py-[3px] rounded-full align-middle ml-[10px]">
                      {edu.status}
                    </span>
                  )}
                  <span className="text-[#5f6572] font-normal mx-[6px]">/</span>
                  <span className="text-[#8ba6cc]">{edu.school}</span>
                </div>
                <div className="font-mono text-[12.5px] tracking-[0.06em] text-[#8a909c]">
                  {edu.date}
                </div>
              </div>
              
              <p className="m-0 mb-[16px] text-[15.5px] leading-[1.7] text-[#8a909c] max-w-[680px]">
                {edu.description}
              </p>
              
              <div className="flex flex-wrap gap-[8px] font-mono text-[11px] uppercase tracking-[0.05em]">
                {edu.tags.map((tag, j) => (
                  <span key={j} className="text-[#9aa1ad] border border-[#23262d] px-[10px] py-[5px] rounded-[6px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
