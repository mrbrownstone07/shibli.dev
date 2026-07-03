import React from "react";

export default function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-display font-bold text-[44px] text-section-number leading-none">
        {number}
      </span>
      <span className="font-mono uppercase text-[12px] tracking-[0.14em] text-accent">
        {label}
      </span>
    </div>
  );
}
