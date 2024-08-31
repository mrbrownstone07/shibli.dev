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
        <span className="font-medium">Computer Science</span> from <span className="font-medium">North South University</span>,
        I decided to dive into the world of technology and programming. I specialize in{" "}
        <span className="font-medium">idea to technology translation and solution development</span>, with a focus on
        <span className="font-medium">developing financial solutions, web solutions</span> and <span className="font-medium">API development</span>.
        My expertise extends to <span className="font-medium">application lifecycle management, fullstack web development</span> and
        <span className="font-medium">customer journey development</span>.
      </p>

      <p className="mb-3">
        I have successfully led projects that include <span className="font-medium">automating processes</span>,
        <span className="font-medium">developing web applications</span> for reporting and data visualization,
        and <span className="font-medium">creating data pipelines</span> for blockchain transactions. These initiatives have {" "}
        <span className="italic">enhanced efficiency and saved significant time and resources</span>.
      </p>

      <p>
        My core technology stack includes <span className="font-medium">Python, Django, Laravel, NextJS and various other technologies</span>.
        I am passionate about <span className="font-medium">software engineering</span> and continually seek to expand my skill set.
        I am always eager to tackle new challenges and explore innovative solutions.
      </p>


    </motion.section>
  );
}
