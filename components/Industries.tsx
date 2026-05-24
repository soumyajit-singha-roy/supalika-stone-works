"use client";

import { INDUSTRIES } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

export default function Industries() {
  return (
    <section id="industries" className="bg-navy-700 py-28 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <SectionLabel text="SECTORS WE SERVE" />
          <h2 className="font-bebas text-section text-white mt-4 mb-16">
            Industries That Build on Us
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <ScrollReveal key={industry.name} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg h-[280px] cursor-pointer border-2 border-transparent hover:border-gold/50 transition-all duration-500">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover img-industrial group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(9,13,18,0.85) 0%, rgba(9,13,18,0.2) 60%)",
                    }}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bebas text-[28px] text-white">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-white/50 mt-1">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
