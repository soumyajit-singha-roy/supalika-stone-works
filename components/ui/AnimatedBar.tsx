"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedBarProps {
  label: string;
  value: number;
  color?: "gold" | "amber" | "orange";
}

const colorMap = {
  gold: "#C9922A",
  amber: "#E8681A",
  orange: "#D97706",
};

export default function AnimatedBar({ label, value, color = "gold" }: AnimatedBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm text-white/70 font-inter">{label}</span>
        <span className="text-sm text-gold font-semibold">{value}%</span>
      </div>
      <div className="h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full"
          style={{ backgroundColor: colorMap[color] }}
        />
      </div>
    </div>
  );
}
