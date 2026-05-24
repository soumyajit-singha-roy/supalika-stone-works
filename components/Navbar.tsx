"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: scrolled
            ? "rgba(9,13,18,0.95)"
            : "rgba(9,13,18,0.7)",
          borderBottom: "1px solid rgba(201,146,42,0.15)",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <img src="/logo.png" alt="Supalika Stone Works LLP" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-block border border-gold text-gold text-[12px] font-semibold uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-gold hover:text-navy-800 transition-all duration-300"
          >
            Inquire Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-navy-800/95 backdrop-blur-xl z-50 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end px-6 md:px-12 h-20 items-center">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="font-inter text-[18px] font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05 * NAV_LINKS.length,
                  duration: 0.3,
                }}
              >
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="mt-4 border border-gold text-gold text-[14px] font-semibold uppercase tracking-[0.15em] px-8 py-3 hover:bg-gold hover:text-navy-800 transition-all duration-300 inline-block"
                >
                  Inquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
