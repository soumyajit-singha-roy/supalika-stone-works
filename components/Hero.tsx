"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import SectionLabel from "./ui/SectionLabel";
import CountUp from "./ui/CountUp";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden flex flex-col justify-end pb-20 px-6 md:px-16 lg:px-24 bg-navy-800">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,13,18,0.3) 0%, rgba(9,13,18,0.7) 60%, rgba(9,13,18,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 50%, rgba(201,146,42,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full">
        <SectionLabel text="EST. ODISHA, INDIA" />

        <div className="mt-4 flex flex-col font-bebas uppercase text-hero leading-none">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BUILDING
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            STRONG
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="gold-text"
          >
            FOUNDATIONS
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg font-light text-white/70 max-w-[520px] mt-6"
        >
          Premium Aggregate Solutions for Infrastructure, Mining & Construction
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link
            href="/products"
            className="w-full sm:w-auto text-center bg-gold-gradient text-navy-800 font-semibold text-[13px] px-9 py-4 rounded-sm hover:scale-[1.03] hover:brightness-110 transition-all duration-300 uppercase tracking-wide"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center bg-transparent border border-white/40 text-white font-semibold text-[13px] px-9 py-4 rounded-sm hover:bg-white/[0.08] transition-all duration-300 uppercase tracking-wide"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Floating Stat Cards (Desktop) */}
      <div className="absolute bottom-20 right-8 md:right-16 lg:right-24 z-20 hidden md:grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="glass-card p-5 px-6"
        >
          <div className="font-bebas text-4xl text-gold">
            <CountUp end={250} suffix=" TPH" />
          </div>
          <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Integrated Plant Capacity</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="glass-card p-5 px-6"
        >
          <div className="font-bebas text-4xl text-gold">
            2026
          </div>
          <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Year Established</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="glass-card p-5 px-6"
        >
          <div className="font-bebas text-4xl text-gold">Railway</div>
          <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Standard Certified Quality</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="glass-card p-5 px-6"
        >
          <div className="font-bebas text-4xl text-gold">Eastern India</div>
          <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Trusted Supplier Network</div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] font-semibold text-gold tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-gold w-4 h-4 animate-bounce-slow" />
      </div>
    </section>
  );
}
