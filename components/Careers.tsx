"use client";

import { CAREER_CULTURE, CAREER_LISTINGS } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import { Check, MapPin } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  return (
    <section id="careers" className="relative bg-navy-800 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
        
        {/* Left Side (60%) */}
        <div className="py-28 md:py-36 px-6 md:px-12 lg:px-24 xl:pl-32">
          <ScrollReveal>
            <h2 className="font-bebas text-[clamp(40px,5vw,64px)] text-white leading-none">
              BUILD INDIA WITH US
            </h2>
            <p className="text-lg text-white/60 mt-4 max-w-lg font-inter">
              Join a company where your work literally shapes the nation&apos;s infrastructure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-10 space-y-4">
            {CAREER_CULTURE.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="text-gold flex-shrink-0 mt-0.5" size={20} />
                <span className="text-white/70 text-base font-inter">{point}</span>
              </div>
            ))}
          </ScrollReveal>

          <div className="mt-10 flex flex-col gap-4">
            {CAREER_LISTINGS.map((job, index) => (
              <ScrollReveal key={job.title} delay={index * 0.1 + 0.3}>
                <div className="glass-card-dark p-6">
                  <h3 className="text-lg font-semibold text-white font-inter">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <span className="bg-gold/10 text-gold text-[11px] px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
                      {job.department}
                    </span>
                    <span className="text-white/40 text-sm flex items-center gap-1 font-inter">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="text-white/40 text-sm font-inter">
                      {job.type}
                    </span>
                  </div>
                  <Link
                    href="/careers/apply"
                    className="text-gold text-sm font-semibold mt-5 inline-block hover:underline font-inter"
                  >
                    Apply Now &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Side (40%) */}
        <div className="relative hidden lg:block h-full min-h-[600px]">
          <img
            src="/careers-image.png"
            alt="Careers"
            className="absolute inset-0 w-full h-full object-cover img-industrial"
          />
          <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
          
          <div
            className="absolute font-bebas text-[120px] text-white/5 rotate-90 right-[-40px] top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
          >
            CAREERS
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-12 flex justify-center z-10">
            <Link href="/careers/apply" className="border border-white/30 text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-white/10 transition-all backdrop-blur-sm bg-black/20 text-center">
              View All Openings
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
