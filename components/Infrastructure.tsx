"use client";

import { INFRASTRUCTURE_COUNTERS, INFRASTRUCTURE_FEATURES } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import CountUp from "./ui/CountUp";
import { Layers, Factory, FlaskConical } from "lucide-react";

const ICON_MAP = {
  Layers,
  Factory,
  FlaskConical,
};

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="relative full-bleed overflow-hidden bg-navy-900">
      {/* Background & Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
          alt="Infrastructure Background"
          className="w-full h-full object-cover img-industrial"
        />
        <div className="absolute inset-0 bg-navy-800/90" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto py-28 md:py-36 px-6 md:px-12 lg:px-24">
        <ScrollReveal className="text-center">
          <SectionLabel text="OUR CAPACITY" className="mx-auto" />
          <h2 className="font-bebas text-section text-white mt-4 mb-20">
            Built for Scale
          </h2>
        </ScrollReveal>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {INFRASTRUCTURE_COUNTERS.map((counter, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center p-8">
                <CountUp
                  end={counter.value}
                  suffix={counter.suffix}
                  decimals={counter.decimals || 0}
                  className="text-stat-lg"
                />
                <div className="text-[12px] text-white/40 uppercase tracking-[0.15em] font-semibold mt-2">
                  {counter.label}
                </div>
                <div className="w-8 h-[2px] bg-gold mx-auto mt-4" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {INFRASTRUCTURE_FEATURES.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.icon as keyof typeof ICON_MAP];
            
            return (
              <ScrollReveal key={index} delay={index * 0.1 + 0.3}>
                <div className="glass-card-dark border-l-2 border-l-gold p-8 h-full">
                  {IconComponent && <IconComponent className="text-gold mb-4" size={32} />}
                  <h3 className="text-lg font-semibold text-white font-inter">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50 mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
