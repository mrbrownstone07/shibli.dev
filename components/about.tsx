"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from{" "}
        <span className="font-medium">North South University</span>, I spent the
        last few years building <span className="font-medium">backend systems</span>,{" "}
        <span className="font-medium">financial solutions</span>, and{" "}
        <span className="font-medium">web platforms</span> as a software engineer
        and solution analyst.
      </p>

      <p className="mb-3">
        Today I&apos;m pivoting into{" "}
        <span className="font-medium">applied cybersecurity</span>. I&apos;m an{" "}
        <span className="font-medium">
          Erasmus Mundus Joint Master&apos;s student in Applied Cybersecurity
        </span>{" "}
        currently based at{" "}
        <span className="font-medium">Kadir Has University in Istanbul</span>,
        and I will continue my second-year mobility in{" "}
        <span className="font-medium">Germany</span>. My main areas of interest
        are <span className="font-medium">system security</span>,{" "}
        <span className="font-medium">network defense</span>, and{" "}
        <span className="font-medium">penetration testing</span>.
      </p>

      <p>
        I enjoy translating <span className="font-medium">attack paths</span> and{" "}
        <span className="font-medium">misconfigurations</span>—from platforms
        like <span className="font-medium">Hack The Box</span> and lab
        environments—into <span className="font-medium">secure designs</span> and{" "}
        <span className="font-medium">hardening strategies</span>. My toolkit spans{" "}
        <span className="font-medium">
          Python, Django, Laravel, Next.js, and database-heavy systems
        </span>
        , and I&apos;m actively layering on{" "}
        <span className="font-medium">
          offensive testing, threat modeling, and secure architecture
        </span>{" "}
        skills as I grow into a cybersecurity-focused engineer.
      </p>


    </motion.section>
  );
}
