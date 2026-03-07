"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/90 px-6 py-10 shadow-[0_0_40px_rgba(16,185,129,0.25)] sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(45,212,191,0.20),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.18),transparent_55%)]" />

        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex flex-col items-center justify-center gap-3 shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
              >
                <Image
                  src="/IMG.jpg"
                  alt="Mahdi Shibli portrait"
                  width="192"
                  height="192"
                  quality={95}
                  priority={true}
                  className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-emerald-400/70 shadow-[0_0_40px_rgba(16,185,129,0.65)] sm:h-32 sm:w-32"
                />
              </motion.div>

              <motion.span
                className="whitespace-nowrap rounded-full bg-emerald-500/20 px-4 py-1.5 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.45)] border border-emerald-400/30 backdrop-blur-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  delay: 0.15,
                }}
              >
                Cybersecurity track
              </motion.span>
          </div>

          <div className="relative text-left text-slate-100">
            <motion.h1
              className="mb-4 text-2xl font-semibold !leading-snug sm:text-4xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="block text-sm font-medium uppercase tracking-[0.25em] text-emerald-300/80 sm:text-xs">
                System Security & Offensive Engineering
              </span>
              <span className="mt-2 block">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
                  Mahdi Shibli
                </span>
                .
              </span>
            </motion.h1>

            <motion.p
              className="mb-4 text-sm leading-relaxed text-slate-200/90 sm:text-base"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              I&apos;m a software engineer & solution analyst pivoting into{" "}
              <span className="font-semibold text-emerald-200">
                applied cybersecurity
              </span>
              , with a focus on{" "}
              <span className="font-semibold text-emerald-200">
                system security and penetration testing
              </span>
              .
            </motion.p>

            <motion.p
              className="mb-4 text-sm leading-relaxed text-slate-300/90 sm:text-base"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              I&apos;m currently enrolled in the{" "}
              <span className="font-semibold text-emerald-200">
                Erasmus Mundus Joint Master in Applied Cybersecurity
              </span>{" "}
              at{" "}
              <span className="font-semibold">Kadir Has University, Istanbul</span>
              , and will move to{" "}
              <span className="font-semibold">Germany</span> for my second-year
              mobility.
            </motion.p>

            <motion.p
              className="mb-6 text-sm leading-relaxed text-slate-400 sm:text-base"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
            >
              Right now I&apos;m sharpening my skills on{" "}
              <span className="font-semibold text-emerald-200">
                Hack The Box
              </span>
              , breaking into misconfigured systems, practicing privilege
              escalation paths, and translating real-world attack chains into{" "}
              <span className="font-semibold">defensive design decisions</span>.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-3 text-sm font-medium sm:flex-row sm:items-center sm:gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold tracking-wide text-slate-950 outline-none transition hover:bg-emerald-400 focus:scale-105 hover:scale-105 active:scale-95"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Let&apos;s collaborate
                <BsArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <a
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/60 px-6 py-3 text-sm font-medium text-emerald-100 outline-none transition hover:border-emerald-300 hover:bg-slate-800/80 focus:scale-105 hover:scale-105 active:scale-95"
                href="/CV.pdf"
                download
              >
                Download CV
                <HiDownload className="opacity-80 transition group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/40 bg-slate-900/60 text-lg text-emerald-200 transition hover:border-emerald-300 hover:bg-slate-800/80 hover:text-emerald-100 focus:scale-110 hover:scale-110 active:scale-95"
                  href="https://www.linkedin.com/in/mahdimshibli"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>

                <a
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/40 bg-slate-900/60 text-xl text-emerald-200 transition hover:border-emerald-300 hover:bg-slate-800/80 hover:text-emerald-100 focus:scale-110 hover:scale-110 active:scale-95"
                  href="https://github.com/mrbrownstone07"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>

                <a
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/40 bg-slate-900/60 text-emerald-200 transition hover:border-emerald-300 hover:bg-slate-800/80 hover:text-emerald-100 focus:scale-110 hover:scale-110 active:scale-95"
                  href="https://profile.hackthebox.com/profile/019c7fc7-04d9-729f-9d5e-5f6485a55667"
                  target="_blank"
                  title="Hack The Box"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M11.996 0a1.12 1.12 0 0 0-.578.16L2.574 5.10a1.132 1.132 0 0 0-.574.98v9.84a1.13 1.13 0 0 0 .574.98l8.844 4.94a1.12 1.12 0 0 0 1.156 0l8.844-4.94a1.13 1.13 0 0 0 .574-.98V6.08a1.13 1.13 0 0 0-.574-.98L12.574.16A1.12 1.12 0 0 0 11.996 0zm0 2.26L19.34 6.36v3.24l-3.652-2.04a1.12 1.12 0 0 0-1.156 0l-3.672 2.05a1.13 1.13 0 0 0-.574.98v4.08a1.13 1.13 0 0 0 .574.98l3.672 2.05a1.12 1.12 0 0 0 1.156 0L19.34 15.66v3.24l-7.344 4.1-7.344-4.1V5.1zm3.072 5.56 3.068 1.72v3.42l-3.068 1.72-3.072-1.72v-3.42z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
