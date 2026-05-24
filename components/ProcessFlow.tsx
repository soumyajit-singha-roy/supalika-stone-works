'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mountain, Settings, Filter, Droplets, Microscope, Truck, LucideIcon } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ICON MAP
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const iconMap: Record<string, LucideIcon> = {
  Mountain,
  Settings,
  Filter,
  Droplets,
  Microscope,
  Truck,
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LOCAL HELPER COMPONENTS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function SectionLabel({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <span
      className={`inline-block text-gold text-[12px] font-semibold uppercase tracking-[0.25em] font-inter ${
        centered ? 'block text-center' : ''
      }`}
    >
      <span className="inline-block w-8 h-[2px] bg-gold align-middle mr-3" />
      {children}
    </span>
  );
}

function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HEXAGONAL STEP NODE (SHARED)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

interface StepNodeProps {
  step: number;
  name: string;
  description: string;
  icon: string;
  index: number;
  isInView: boolean;
}

function HexIcon({ step, icon, index, isInView }: Pick<StepNodeProps, 'step' | 'icon' | 'index' | 'isInView'>) {
  const Icon = iconMap[icon] ?? Mountain;

  return (
    <motion.div
      className="relative flex-shrink-0"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        className="hexagon w-[90px] h-[90px] bg-navy-600 border-2 border-gold/30 flex items-center justify-center relative z-10"
        animate={
          isInView
            ? {
                boxShadow: [
                  '0 0 10px rgba(201,146,42,0.1)',
                  '0 0 25px rgba(201,146,42,0.35)',
                  '0 0 10px rgba(201,146,42,0.1)',
                ],
              }
            : {}
        }
        transition={{
          duration: 2,
          delay: index * 0.2 + 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Icon size={36} className="text-gold" />
      </motion.div>

      {/* Number Badge */}
      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-navy-800 text-[11px] font-bold flex items-center justify-center z-20">
        {step}
      </span>
    </motion.div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DESKTOP TIMELINE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function DesktopTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="hidden lg:flex items-start justify-between relative">
      {/* Connecting Line */}
      <div className="absolute top-[45px] left-[60px] right-[60px] h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

      {PROCESS_STEPS.map((step, index) => (
        <motion.div
          key={step.step}
          className="flex flex-col items-center text-center relative flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <HexIcon
            step={step.step}
            icon={step.icon}
            index={index}
            isInView={isInView}
          />

          <h3 className="font-bebas text-[20px] text-white mt-4">{step.name}</h3>
          <p className="text-[13px] text-white/50 mt-2 max-w-[160px]">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MOBILE TIMELINE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function MobileTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="lg:hidden flex flex-col gap-8 relative">
      {/* Left Vertical Line */}
      <div className="absolute left-[44px] top-0 bottom-0 w-[2px] bg-gold/20" />

      {PROCESS_STEPS.map((step, index) => (
        <motion.div
          key={step.step}
          className="flex items-start gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <HexIcon
            step={step.step}
            icon={step.icon}
            index={index}
            isInView={isInView}
          />

          <div className="pt-4">
            <h3 className="font-bebas text-[20px] text-white">{step.name}</h3>
            <p className="text-[13px] text-white/50 mt-1">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PROCESS FLOW SECTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function ProcessFlow() {
  return (
    <section id="process" className="bg-navy-800 isometric-grid py-28 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center">
          <SectionLabel centered>HOW WE WORK</SectionLabel>
          <h2 className="font-bebas text-section text-white mt-4 text-center">
            From Earth to Excellence
          </h2>
          <p className="text-white/50 text-center mt-4 mb-20 font-inter">
            Our end-to-end production process
          </p>
        </ScrollReveal>

        {/* Desktop */}
        <DesktopTimeline />

        {/* Mobile */}
        <MobileTimeline />
      </div>
    </section>
  );
}
