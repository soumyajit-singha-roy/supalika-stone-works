"use client";

import { ABOUT_COPY } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import AnimatedBar from "./ui/AnimatedBar";

export default function About() {
  return (
    <section id="about" className="relative bg-navy-700 noise-bg py-28 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column - Image Composition */}
        <ScrollReveal direction="left" duration={0.8}>
          <div className="relative aspect-[4/5] min-h-[350px] md:min-h-[500px]">
            <img
              src="/about-quarry.png"
              alt="Quarry Operations"
              className="absolute inset-0 w-full h-full object-cover rounded img-industrial-light"
            />
            
            <img
              src="/about-quality.png"
              alt="Quality Control"
              className="absolute bottom-[-20px] right-[-20px] w-[45%] aspect-square object-cover border-[3px] border-gold rounded transform rotate-[-2deg] shadow-2xl img-industrial-light"
            />
            
            <div className="absolute top-6 left-6 bg-gold/90 text-navy-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm">
              <ShieldCheck size={16} />
              <span className="text-[11px] font-semibold uppercase tracking-wide">ISO Certified Quality</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column - Text */}
        <div>
          <ScrollReveal delay={0.2}>
            <SectionLabel text={ABOUT_COPY.label} />
            <h2 className="font-bebas text-section text-white mt-4 leading-[1.05]">
              {ABOUT_COPY.heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-6 text-base text-white/70 leading-[1.9] mt-8 font-inter">
              {ABOUT_COPY.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-12">
            {ABOUT_COPY.stats.map((stat, index) => {
              const colors: ("gold" | "amber" | "orange")[] = ["gold", "amber", "orange"];
              return (
                <AnimatedBar
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  color={colors[index % colors.length]}
                />
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <a
              href="#"
              className="text-gold text-sm font-semibold hover:underline mt-8 inline-block tracking-wide"
            >
              Read Full Company Profile &rarr;
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
