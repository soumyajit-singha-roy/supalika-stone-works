"use client";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <div className={`text-[11px] font-semibold text-gold uppercase tracking-[0.3em] ${className}`}>
      {text}
    </div>
  );
}
