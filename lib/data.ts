import React from "react";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#work" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Research Assistant",
    company: "Kadir Has University",
    location: "Istanbul, Türkiye · Hybrid",
    description: "Research at the intersection of data privacy and cloud-based machine learning. Investigating privacy-preserving techniques for high-dimensional data in cloud ML pipelines. Designing manifold-learning-based differential privacy mechanisms.",
    tags: ["Research", "Cyber Defense", "Machine Learning", "Data Privacy"],
    date: "Jan 2026 – Present",
  },
  {
    title: "Co-Founder (Tech)",
    company: "monitowl",
    location: "Dhaka, Bangladesh · Remote",
    description: "Co-leading a multi-tenant SaaS that gives manufacturers and operations teams real-time supply-chain visibility. Designed the core platform: multi-tenancy isolation, cloud infrastructure, CI/CD, and a data ingestion layer that processes QR-scan events in near real-time.",
    tags: ["SaaS", "CI/CD", "ABAC", "System Design"],
    date: "Sep 2025 – Present",
  },
  {
    title: "Solution Analyst",
    company: "Nagad (Digital Financial Services Limited)",
    location: "Dhaka, Bangladesh",
    description: "Led end-to-end system and API design for several national-scale products including Bangla-QR, Taka Pay, and palm scan payment PoC. Co-designed and built an internal reporting platform (Django + PostgreSQL) that cut ~200 hours/month of manual work.",
    tags: ["Django", "PostgreSQL", "API Design", "Payments"],
    date: "Jun 2024 – Aug 2025",
  },
  {
    title: "Associate Manager",
    company: "Nagad (Digital Financial Services Limited)",
    location: "Dhaka, Bangladesh",
    description: "Designed and owned API integrations for acquiring products: 3DS2 migration, card tokenization, and Bangla-QR dynamic flows. Built internal tooling and dashboards to automate payment-switch monitoring and anomaly detection across transaction flows.",
    tags: ["Django", "API Integration", "Anomaly Detection"],
    date: "Jun 2023 – Jun 2024",
  },
  {
    title: "Tech Talents",
    company: "BRAC Bank",
    location: "Dhaka, Bangladesh",
    description: "Backend and integration work on BRAC Bank's proprietary payment gateway. Built REST API integration packages for smooth merchant onboarding to the payment gateway. Played a key role in the 3DS2 migration project.",
    tags: ["REST API", "Payments", "Data Analysis"],
    date: "Jul 2022 – May 2023",
  },
  {
    title: "Software Engineer",
    company: "Khan Soft Limited",
    location: "Dhaka, Bangladesh",
    description: "Built backend services and an ERC-20 smart contract for the M-Base token. Wrote custom data pipelines to store and analyze blockchain transaction data. Built a crypto payment gateway for a German client.",
    tags: ["Django REST", "PostgreSQL", "Blockchain", "Smart Contracts"],
    date: "Oct 2021 – Jun 2022",
  },
] as const;

export const educationData = [
  {
    school: "SRH Berlin University of Applied Sciences",
    degree: "Master of Science, Cybersecurity",
    location: "Berlin, Germany",
    date: "2026 – 2027",
    inProgress: true,
  },
  {
    school: "Kadir Has University",
    degree: "Master of Science, CyberMACS - Erasmus Mundus Joint Master",
    location: "Istanbul, Türkiye",
    date: "Aug 2023 – Jul 2025",
    inProgress: false,
  },
  {
    school: "Ss. Cyril and Methodius University",
    degree: "Erasmus+ BIP, CyberFuture - Cybersecurity",
    location: "Skopje, North Macedonia",
    date: "Apr 2026 – Apr 2026",
    inProgress: false,
  },
  {
    school: "Daffodil International University",
    degree: "BSc in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    date: "Jan 2016 – Dec 2019",
    inProgress: false,
  }
] as const;

export const projectsData = [
  {
    title: "Bangladesh Risin",
    category: "Civic tech",
    description:
      "A civic technology platform designed to drive social awareness and community engagement across Bangladesh.",
    tags: ["React", "Next.js", "PostgreSQL", "Django Ninja"],
    imageUrl: "/bangladeshrisin.png",
  },
  {
    title: "connected",
    category: "Real-time",
    description:
      "A real-time communication platform with WebSocket-based messaging, presence indicators, and notification systems.",
    tags: ["Django", "WebSockets", "Redis", "PostgreSQL"],
    imageUrl: "/connected.png",
  },
  {
    title: "Offensive Security Labs",
    category: "Security",
    description:
      "A collection of hands-on security labs, vulnerability assessments, and penetration testing exercises.",
    tags: ["Linux", "Burp Suite", "Nmap", "Metasploit"],
    imageUrl: "/wordanalytics.png", 
  }
] as const;

export const skillsData = {
  "Languages & Frameworks": [
    "Python",
    "Django",
    "DRF",
    "FastAPI",
    "Laravel",
    "PHP",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Solidity",
    "Tailwind",
  ],
  "Data & Infrastructure": [
    "PostgreSQL",
    "Oracle",
    "MS SQL",
    "Redis",
    "RabbitMQ",
    "Celery",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Linux",
    "Git",
    "CI/CD",
    "Nginx",
  ],
  "Security & Practices": [
    "System & Network Security",
    "Web App Security (OWASP)",
    "Penetration Testing",
    "Threat Modeling",
    "Burp Suite",
    "Nmap",
    "Wireshark",
    "Metasploit",
    "Distributed Systems",
    "Microservices Architecture",
    "Agile Methodologies",
    "Machine Learning",
  ],
} as const;
