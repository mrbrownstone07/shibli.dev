import React from "react";

export default function Footer() {
  return (
    <footer className="border-x border-t border-border max-w-site mx-auto">
      <div className="px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[12px] text-txt-vdim">
          © {new Date().getFullYear()} Mahdi Mohammad Shibli
        </p>
        <p className="font-mono text-[12px] text-txt-vdim">
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
