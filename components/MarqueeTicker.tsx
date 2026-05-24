"use client";

import { MARQUEE_ITEMS } from "@/lib/constants";

export default function MarqueeTicker() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full py-4 bg-gold-gradient overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center text-black font-inter text-[12px] font-semibold uppercase tracking-[0.15em]"
          >
            <span className="mx-8">•</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
