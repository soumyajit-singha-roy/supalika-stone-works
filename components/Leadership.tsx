"use client";

import { LEADERSHIP } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function Leadership() {
  return (
    <section id="leadership" className="bg-navy-800 py-28 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <SectionLabel text="LEADERSHIP" />
          <h2 className="font-bebas text-section text-white mt-4 mb-16">
            The Minds Behind the Machine
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {LEADERSHIP.map((person, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <ScrollReveal key={person.name} delay={index * 0.2}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-[40%_60%] ${
                    isReversed ? "md:grid-cols-[60%_40%]" : ""
                  } bg-dark-gradient border border-gold/[0.15] rounded-lg overflow-hidden hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,146,42,0.1)] transition-all duration-500`}
                >
                  {/* Image Side */}
                  <div
                    className={`relative min-h-[400px] md:min-h-auto ${
                      isReversed ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="absolute inset-0 w-full h-full object-cover img-industrial-light"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(17,24,34,0.9) 0%, transparent 60%)",
                      }}
                    />
                    
                    {/* Geometric Decoration */}
                    <div className="absolute top-8 right-8 w-px h-20 bg-gold/20" />
                    <div className="absolute top-12 right-12 w-px h-12 bg-gold/20" />
                    
                    <div className="absolute bottom-4 left-6 font-bebas text-[100px] text-gold/20 leading-none select-none">
                      {person.shortTitle}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${isReversed ? "md:order-1" : ""}`}>
                    <h3 className="font-bebas text-[40px] text-white leading-none">{person.name}</h3>
                    <div className="text-[12px] text-gold uppercase tracking-[0.15em] font-semibold mt-2">
                      {person.title}
                    </div>
                    
                    <div className="w-[60px] h-[2px] bg-gold mt-6 mb-6" />
                    
                    <p className="text-[15px] text-white/60 leading-[1.9] font-inter">
                      {person.bio}
                    </p>
                    
                    {/* Signature flourish */}
                    <svg
                      width="120"
                      height="20"
                      viewBox="0 0 120 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-6 opacity-20"
                    >
                      <path
                        d="M0 10C30 10 30 0 60 0C90 0 90 20 120 20"
                        stroke="#C9922A"
                        strokeWidth="2"
                      />
                    </svg>
                    
                    <div className="mt-8">
                      <a
                        href={person.linkedin}
                        className="inline-flex items-center gap-2 border border-gold/30 text-gold text-[12px] uppercase tracking-wide px-4 py-2 rounded hover:bg-gold/10 transition-colors"
                      >
                        <IconBrandLinkedin size={14} />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
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
