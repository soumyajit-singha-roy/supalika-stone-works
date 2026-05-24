"use client";

import { useState } from "react";
import { SITE_CONFIG, PRODUCT_OPTIONS } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import { MapPin, Mail, Phone, MessageCircle, Clock, Check } from "lucide-react";
import { IconBrandLinkedin, IconBrandTwitter, IconBrandFacebook } from "@tabler/icons-react";
import { useForm as useRHF } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  product: z.string().min(1, "Select a product"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useRHF<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    // Mock API call
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
    }, 800);
  };

  const onError = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <section id="contact" className="bg-navy-700 py-28 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column - Contact Info */}
        <ScrollReveal>
          <h2 className="font-bebas text-[clamp(40px,5vw,64px)] text-gold leading-none">
            Get In Touch
          </h2>
          
          <div className="mt-10 space-y-5 font-inter">
            <div className="flex items-start gap-3 text-white/60">
              <MapPin className="mt-1 flex-shrink-0" size={20} />
              <p className="max-w-xs">{SITE_CONFIG.address}</p>
            </div>
            
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
              <Mail size={20} />
              {SITE_CONFIG.email}
            </a>
            
            <a href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </a>

            <div className="pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            <div className="flex items-center gap-3 text-white/40 text-sm mt-6">
              <Clock size={16} />
              {SITE_CONFIG.workingHours}
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <IconBrandLinkedin size={18} stroke={1.5} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <IconBrandTwitter size={18} stroke={1.5} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <IconBrandFacebook size={18} stroke={1.5} />
            </a>
          </div>

          <div className="mt-8 h-[200px] rounded-lg bg-navy-600 border border-gold/10 flex items-center justify-center text-white/30 text-sm font-inter">
            Map &mdash; Jajpur, Odisha
          </div>
        </ScrollReveal>

        {/* Right Column - Inquiry Form */}
        <ScrollReveal delay={0.2} className="h-full">
          <div className={`glass-card-dark p-8 md:p-10 h-full flex flex-col ${isShaking ? "shake" : ""}`}>
            {isSubmitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mb-6">
                  <Check size={32} />
                </div>
                <h3 className="font-bebas text-3xl text-white mb-2">Thank You!</h3>
                <p className="text-white/60 font-inter mb-8">
                  Your inquiry has been received. We&apos;ll respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-gold text-gold font-semibold text-sm px-6 py-3 rounded hover:bg-gold hover:text-navy-800 transition-colors uppercase tracking-wide"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-5 flex-1">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Full Name *"
                    className={`w-full bg-navy-600/50 border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } rounded px-4 py-3 text-white text-sm font-inter placeholder:text-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      {...register("company")}
                      placeholder="Company Name"
                      className="w-full bg-navy-600/50 border border-white/10 rounded px-4 py-3 text-white text-sm font-inter placeholder:text-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      {...register("phone")}
                      placeholder="Phone Number"
                      type="tel"
                      className="w-full bg-navy-600/50 border border-white/10 rounded px-4 py-3 text-white text-sm font-inter placeholder:text-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    {...register("email")}
                    placeholder="Email Address *"
                    type="email"
                    className={`w-full bg-navy-600/50 border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } rounded px-4 py-3 text-white text-sm font-inter placeholder:text-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <select
                    {...register("product")}
                    className={`w-full bg-navy-600/50 border ${
                      errors.product ? "border-red-500" : "border-white/10"
                    } rounded px-4 py-3 text-white text-sm font-inter focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all appearance-none`}
                  >
                    <option value="" className="bg-navy-700 text-white/50">Select Product Interest *</option>
                    {PRODUCT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-navy-700 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.product && (
                    <p className="text-red-400 text-xs mt-1">{errors.product.message}</p>
                  )}
                </div>

                <div className="flex-1 min-h-[120px]">
                  <textarea
                    {...register("message")}
                    placeholder="Your Message *"
                    rows={4}
                    className={`w-full h-full bg-navy-600/50 border ${
                      errors.message ? "border-red-500" : "border-white/10"
                    } rounded px-4 py-3 text-white text-sm font-inter placeholder:text-white/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-gradient text-navy-800 font-bebas text-xl py-4 rounded tracking-wider hover:brightness-110 transition-all duration-300 disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  );
}
