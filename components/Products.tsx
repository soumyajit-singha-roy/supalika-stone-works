'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PRODUCTS } from '@/lib/constants';
import Link from 'next/link';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LOCAL HELPER COMPONENTS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-gold text-[12px] font-semibold uppercase tracking-[0.25em] font-inter">
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
   PRODUCT CARD
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

interface ProductCardProps {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
  index: number;
}

function ProductCard({ name, slug, category, description, image, featured, index }: ProductCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href={`/products/${slug}`} className="block">
        <div
        className={`group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] ${
          featured ? 'lg:row-span-2 min-h-[500px]' : 'min-h-[280px]'
        }`}
      >
        {/* Background Image */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover img-industrial group-hover:scale-110 transition-transform duration-700"
        />

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(9,13,18,0.9) 0%, rgba(9,13,18,0.3) 60%)',
          }}
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-gold/90 text-navy-800 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide z-10">
          {category}
        </span>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="font-bebas text-[32px] text-white leading-tight">{name}</h3>
          <p className="text-[14px] text-white/60 leading-relaxed mt-2 line-clamp-3">
            {description}
          </p>
          <button className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-[400ms] mt-4 border border-gold/50 text-gold text-[12px] uppercase tracking-wide px-4 py-2 rounded hover:bg-gold/10">
            View Specifications →
          </button>
        </div>
      </div>
      </Link>
    </ScrollReveal>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PRODUCTS SECTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function Products() {
  return (
    <section id="products" className="bg-navy-700 diagonal-grid py-28 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <SectionLabel>WHAT WE DELIVER</SectionLabel>
          <h2 className="font-bebas text-section text-white mt-4 mb-16">
            Our Material Range
          </h2>
        </ScrollReveal>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              slug={product.slug}
              category={product.category}
              description={product.description}
              image={product.image}
              featured={product.featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
