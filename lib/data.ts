import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bangladeshRisin from "@/public/bangladeshrisin.png";
import connected from "@/public/connected.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer, Karatbars Software Solutions LTD",
    location: "Dhaka, Bangladesh",
    description:
      "I secured this position before completing my graduation and worked for 8 months as a backend and blockchain developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  }, 
  {
    title: "Graduated, North South University",
    location: "Dhaka, Bangladesh",
    description:
      "I completed my undergraduate studies at North South University.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Associate Manager, BRAC Bank PLC",
    location: "Dhaka, Bangladesh",
    description:
      "I started as a Tech MTO and was promoted to Associate Manager after completing my MTO period. I developed many solutions to automate tasks and enhance the efficiency of the technology division.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Assistant Lead Engineer, Nagad LTD",
    location: "Dhaka, Bangladesh",
    description:
      "I joined as a Solution Analyst, translating business needs into effective technology solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  }  
] as const;

export const projectsData = [
  {
    title: "Bangladesh Risin",
    description:
      "colaborated with development sector professionals and developed a polling and analytics solution to undestrand the stance of people on different policy decisions",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Django Ninja"],
    imageUrl: bangladeshRisin,
  },
  {
    title: "> connected",
    description:
      "During the internet outages, developed an alternative mass comminication (group chat) platform.",
    tags: ["Django", "Html", "CSS", "Web Sockets", "Redis", "PostgreSQL"],
    imageUrl: connected,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Laravel",
  "Blockchain",
  "Solidity",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Django",
  "Fast API",
  "Django Rest Framework",
  "Oracle DB",
  "MS SQL Server",
  "Data Analytics",
  "Nginx"
] as const;
