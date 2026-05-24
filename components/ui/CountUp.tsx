"use client";

import CountUpComponent from "react-countup";

interface CountUpProps {
  end: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
  isText?: boolean;
}

export default function CountUp({
  end,
  suffix = "",
  decimals = 0,
  className = "",
  duration = 2,
  isText = false,
}: CountUpProps) {
  if (isText) {
    return <span className={`font-bebas text-gold ${className}`}>{suffix}</span>;
  }

  return (
    <span className={`font-bebas text-gold ${className}`}>
      <CountUpComponent
        end={end}
        suffix={suffix}
        decimals={decimals}
        duration={duration}
        enableScrollSpy
        scrollSpyOnce
      />
    </span>
  );
}
