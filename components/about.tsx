"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <div
      ref={ref}
      id="about"
      className="px-[44px] py-[56px] grid grid-cols-1 md:grid-cols-[0.35fr_1.65fr] gap-[40px] border-b border-[#17191d]"
      style={{ scrollMarginTop: "74px" }}
    >
      <div>
        <div className="font-display text-[44px] font-bold text-[#20242b] leading-[1]">
          01
        </div>
        <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#8ba6cc] mt-[8px]">
          About
        </div>
      </div>
      <div className="text-[16px] leading-[1.7] text-[#8a909c] max-w-[700px] flex flex-col gap-[20px]">
        <h2 className="font-display font-semibold text-[36px] tracking-tight m-0 mb-[12px] text-[#e6e8ec] leading-[1.1]">
          Building reliable backend infrastructure and secure systems.
        </h2>

        <p className="m-0">
          For the past three years, I’ve worked at the core of Bangladesh’s financial technology sector, designing the APIs, data models, and system architectures that power platforms like Nagad and BRAC Bank. In high-volume, heavily regulated environments, I focus on building infrastructure where uptime, data integrity, and compliance are guaranteed.
        </p>

        <p className="m-0">
          My work has spanned from migrating core payment gateways to the 3DS2 standard, to engineering hardware-integrated payment prototypes. I specialize in the technical ownership of a product's lifecycle - from the initial API handshake and merchant onboarding to production deployment and monitoring.
        </p>

        <p className="m-0">
          Through building heavily targeted financial systems, I learned that security cannot be treated as an afterthought. This led me to pursue an MSc in Cybersecurity, where my research focuses on privacy-preserving machine learning. I approach system design with a strict secure-by-default philosophy, ensuring that trust boundaries are respected at every layer.
        </p>

        <p className="m-0">
          Beyond enterprise payments, I am the Technical Co-Founder of monitowl, a multi-tenant SaaS for supply-chain visibility. I architected the platform from the ground up, implementing a real-time data ingestion layer, attribute-based access control (ABAC), and strict tenant isolation using <span className="font-mono text-[13.5px] text-[#8ba6cc]">Django, PostgreSQL, Redis, and RabbitMQ</span>.
        </p>

        <p className="m-0 text-[#e6e8ec] font-medium pt-[4px]">
          I am currently relocating to the EU and seeking backend engineering or system design roles. I thrive on solving complex problems in distributed systems, API architecture, and platform security.
        </p>
      </div>
    </div>
  );
}
