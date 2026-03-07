import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuShield } from "react-icons/lu";
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
    title: "Erasmus Mundus Joint Master in Applied Cybersecurity",
    location: "Istanbul, Turkey → Germany",
    description:
      "Studying applied cybersecurity with a focus on system security, network defense, and offensive techniques. Currently at Kadir Has University in Istanbul; moving to Germany for the second-year specialization.",
    icon: React.createElement(LuShield),
    date: "2025 - 2027",
  },
  {
    title: "Assistant Lead Engineer, Nagad LTD",
    location: "Dhaka, Bangladesh",
    description:
      "Joined as a Solution Analyst, translating business needs into scalable, secure technology solutions and collaborating with infrastructure and security teams on system design.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Associate Manager, BRAC Bank PLC",
    location: "Dhaka, Bangladesh",
    description:
      "Started as a Tech MTO and was promoted to Associate Manager. Designed and delivered automation, reporting, and integration solutions for the technology division, often working closely with security and compliance requirements.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
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
    title: "Software Engineer, Karatbars Software Solutions LTD",
    location: "Dhaka, Bangladesh",
    description:
      "Joined before graduation and worked as a backend and blockchain developer, building and integrating services with a strong focus on reliability and data integrity.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
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
  {
    title: "Offensive Security Labs & Hack The Box",
    description:
      "CTF challenges and HTB machines — exploiting misconfigs, escalating privileges, and documenting attack paths to inform defensive hardening.",
    tags: [
      "Pen Testing",
      "Linux",
      "MSFConsole",
      "Nmap"
    ],
    imageUrl: wordanalyticsImg,
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
  "Nginx",
  "Linux (server & hardening)",
  "System Security",
  "Network Security",
  "Penetration Testing",
  "Web Application Security (OWASP)",
  "Threat Modeling",
  "Burp Suite",
  "Nmap",
  "Wireshark",
  "Metasploit",
] as const;
