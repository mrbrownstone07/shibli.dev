"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  const experiences = [
    {
      title: "Research Assistant",
      company: "Kadir Has University",
      date: "2026 — Present · Istanbul",
      description: "Designed manifold-learning-based differential privacy mechanisms for cloud ML pipelines, balancing data privacy with model utility to secure high-dimensional datasets.",
      tags: ["Differential Privacy", "Cloud ML", "Security Research"],
    },
    {
      title: "Technical Co-Founder",
      company: "monitowl",
      date: "2025 — Present · Remote",
      description: "Engineered a multi-tenant supply-chain SaaS from scratch, implementing a real-time ingestion layer and an ABAC authorization system to provide compliance-grade visibility for regulated industries.",
      tags: ["SaaS Architecture", "Real-time Systems", "ABAC"],
    },
    {
      title: "Solution Analyst",
      company: "Nagad",
      date: "2024 — 2025 · Dhaka",
      description: "Architected API flows for Bangladesh's largest MFS platform and led R&D on a palm-scan payment prototype, establishing scalable system blueprints that bridged compliance and engineering.",
      tags: ["Payment Systems", "System Architecture", "R&D"],
    },
    {
      title: "Associate Manager",
      company: "BRAC Bank PLC",
      date: "2022 — 2024 · Dhaka",
      description: "Built a Django-based automation platform cutting 200+ manual hours monthly and led core payment-acquiring integrations (VISA, Mastercard, Bangla-QR) into the bank's proprietary gateway.",
      tags: ["Django", "Payment Gateways", "Automation"],
    },
    {
      title: "Software Engineer",
      company: "Khan Soft Limited",
      date: "2021 — 2022 · Dhaka",
      description: "Developed a secure crypto payment gateway and custom blockchain data pipelines (Ethereum, Bitcoin) using Django REST and RabbitMQ, enabling seamless ERC-20 transactions for a German client.",
      tags: ["Django REST", "Blockchain", "Data Pipelines"],
    }
  ];

  return (
    <div
      ref={ref}
      id="experience"
      className="px-[44px] py-[56px] border-b border-[#17191d] grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div>
        <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
          04
        </div>
        <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
          Experience
        </div>
      </div>

      <div>
        <h2 className="font-display font-semibold text-[36px] m-0 mb-[40px] tracking-tight text-[#e6e8ec] leading-[1.1]">
          Professional career
        </h2>

        <div className="relative pl-[44px]">
          <div className="absolute left-[5px] top-[7px] bottom-[9px] w-[1px] bg-gradient-to-b from-[#8ba6cc55] to-[#20242b]"></div>
          
          {experiences.map((exp, i) => (
            <div key={i} className={`relative ${i !== experiences.length - 1 ? 'pb-[44px]' : ''}`}>
              <div className="absolute left-[-44px] top-[5px] w-[11px] h-[11px] rounded-full bg-[#0a0b0d] border-[2px] border-[#8ba6cc]"></div>
              
              <div className="flex items-baseline justify-between gap-[20px] flex-wrap mb-[6px]">
                <div className="font-display text-[20px] font-semibold text-[#e6e8ec]">
                  {exp.title} <span className="text-[#5f6572] font-normal mx-[4px]">/</span> <span className="text-[#8ba6cc]">{exp.company}</span>
                </div>
                <div className="font-mono text-[12.5px] tracking-[0.06em] text-[#8a909c]">
                  {exp.date}
                </div>
              </div>
              
              <p className="m-0 mb-[16px] text-[15.5px] leading-[1.7] text-[#8a909c] max-w-[680px]">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-[8px] font-mono text-[11px] uppercase tracking-[0.05em]">
                {exp.tags.map((tag, j) => (
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
