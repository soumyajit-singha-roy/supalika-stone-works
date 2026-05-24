"use client";

import { WHY_CHOOSE_US } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import { ShieldCheck, TrendingUp, Award, Clock, Users, MapPin } from "lucide-react";

const ICON_MAP = {
  ShieldCheck,
  TrendingUp,
  Award,
  Clock,
  Users,
  MapPin,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-navy-800 overflow-hidden py-28 md:py-36 px-6 md:px-12 lg:px-24">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[20vw] text-gold/[0.03] uppercase pointer-events-none select-none whitespace-nowrap">
        TRUST
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center">
          <SectionLabel text="THE SUPALIKA ADVANTAGE" className="mx-auto" />
          <h2 className="font-bebas text-section text-white mt-4 mb-16">
            Why Industry Leaders Choose Us
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.icon as keyof typeof ICON_MAP];

            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="group p-8 rounded-lg border border-gold/10 hover:border-gold/50 transition-all duration-500 bg-navy-800/50 backdrop-blur-sm h-full">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1 h-full flex flex-col">
                    {IconComponent && (
                      <IconComponent
                        className="text-white/40 group-hover:text-gold transition-colors duration-500 mb-6"
                        size={32}
                      />
                    )}
                    <h3 className="text-base font-semibold text-white font-inter">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/50 mt-3 leading-relaxed font-inter flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
