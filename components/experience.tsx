"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experience & education</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#111111",
                boxShadow: "0 0 15px rgba(0, 255, 65, 0.15)",
                border: "1px solid rgba(0, 255, 65, 0.3)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(0, 255, 65, 0.3)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#0a0a0a",
                border: "1px solid rgba(0, 255, 65, 0.5)",
                boxShadow: "0 0 10px rgba(0, 255, 65, 0.2)",
                color: "#00ff41",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-emerald-300">{item.title}</h3>
              <p className="font-normal !mt-0 text-slate-300">{item.location}</p>
              <p className="!mt-1 !font-normal text-slate-400">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
