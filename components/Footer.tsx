"use client";

import { NAV_LINKS, PRODUCTS, SITE_CONFIG } from "@/lib/constants";
import { IconBrandLinkedin, IconBrandTwitter, IconBrandFacebook } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  const handleScroll = () => {
    // Scroll handling removed as we use next/link for routing
  };

  return (
    <footer className="bg-navy-900 border-t-2 border-gold-gradient">
      <div className="max-w-[1440px] mx-auto py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1 - Company */}
          <div>
            <Link href="/" className="inline-block mb-2">
              <img src="/logo.png" alt="Supalika Stone Works LLP" className="h-16 w-auto object-contain" />
            </Link>
            
            <p className="text-sm text-white/40 mt-6 leading-relaxed max-w-[250px] font-inter">
              Premium aggregate solutions for India&apos;s infrastructure, railway, and construction sectors. Building strong foundations since 2026.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-3 border border-gold/30 px-3 py-2 rounded bg-gold/[0.02]">
              {/* Dharma wheel styled icon */}
              <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold">
                &#9784;
              </div>
              <span className="text-gold text-[11px] font-semibold uppercase tracking-wide font-inter">
                Make in India
              </span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6 font-inter">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-gold transition-colors font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6 font-inter">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {PRODUCTS.map((product) => (
                <li key={product.name}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-white/40 hover:text-gold transition-colors font-inter"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6 font-inter">
              Contact
            </h4>
            <address className="not-italic text-sm text-white/40 font-inter mb-4 max-w-[200px]">
              {SITE_CONFIG.address}
            </address>
            <div className="flex flex-col gap-2 font-inter mb-6">
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-white/40 hover:text-gold transition-colors">
                {SITE_CONFIG.email}
              </a>
              <a href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`} className="text-sm text-white/40 hover:text-gold transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                <IconBrandLinkedin size={16} stroke={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                <IconBrandTwitter size={16} stroke={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                <IconBrandFacebook size={16} stroke={1.5} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex justify-between items-center flex-wrap gap-4 font-inter">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} Supalika Stone Works LLP. All Rights Reserved.
          </p>
          <p className="text-[12px] text-white/30">
            Proudly Made in India &#127470;&#127475;
          </p>
        </div>
      </div>
    </footer>
  );
}
