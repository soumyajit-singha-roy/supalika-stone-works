"use client";

import { useState } from "react";
import { UploadCloud, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type FormMode = "initial" | "parsing" | "form" | "success";

export default function ApplicationForm() {
  const [mode, setMode] = useState<FormMode>("initial");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    role: "",
    experience: "",
    location: "",
    education: "",
    currentCompany: "",
    noticePeriod: "",
    message: "",
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setMode("parsing");
      // Simulate resume parsing delay
      setTimeout(() => {
        setFormData({
          name: "John Doe",
          email: "johndoe@example.com",
          phone: "+91 98765 43210",
          linkedin: "linkedin.com/in/johndoe",
          role: "Quarry Operations Manager",
          experience: "8 Years",
          location: "Bhubaneswar, Odisha",
          education: "B.Tech in Mining Engineering",
          currentCompany: "L&T Construction",
          noticePeriod: "30 Days",
          message: "I am an experienced professional looking to contribute to Supalika's infrastructure projects.",
        });
        setMode("form");
      }, 2000);
    }
  };

  const handleManualFill = () => {
    setMode("form");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMode("success");
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-6">
      <div className="mb-12 text-center">
        <h1 className="font-bebas text-5xl md:text-6xl text-white tracking-wide">
          JOIN THE TEAM
        </h1>
        <p className="font-inter text-white/60 mt-4 max-w-xl mx-auto">
          We are always looking for driven individuals to help us build the foundations of tomorrow. Upload your resume or fill out the details manually to apply.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {mode === "initial" && (
          <motion.div
            key="initial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-6"
          >
            {/* Upload Box */}
            <div className="relative border-2 border-dashed border-gold/30 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-xl p-12 text-center group">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                title="Upload your resume"
              />
              <div className="flex flex-col items-center justify-center gap-4 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-white">Upload Resume</h3>
                  <p className="font-inter text-sm text-white/50 mt-1">
                    Drag and drop your PDF or Word document here
                  </p>
                </div>
                <div className="mt-4 px-6 py-2 bg-gold text-navy-800 font-semibold text-sm uppercase tracking-wide rounded-sm">
                  Browse Files
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 my-2">
              <div className="h-px bg-white/10 flex-1" />
              <span className="font-inter text-xs text-white/40 uppercase tracking-widest">OR</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            <button
              onClick={handleManualFill}
              className="w-full py-4 border border-white/20 hover:border-gold/50 text-white hover:text-gold transition-colors font-inter text-sm uppercase tracking-widest font-semibold"
            >
              Fill Manually
            </button>
          </motion.div>
        )}

        {mode === "parsing" && (
          <motion.div
            key="parsing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
              <div className="absolute inset-0 border-4 border-gold rounded-full border-t-transparent animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-8 h-8 text-gold animate-pulse" />
              </div>
            </div>
            <h3 className="font-bebas text-3xl text-white tracking-wider">Parsing Resume</h3>
            <p className="font-inter text-white/50 mt-2">Extracting your details using AI...</p>
          </motion.div>
        )}

        {mode === "form" && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>

                {/* Professional Details */}
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Position Applied For *
                  </label>
                  <select
                    required
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm appearance-none"
                  >
                    <option value="" disabled>Select a role</option>
                    <option value="Quarry Operations Manager">Quarry Operations Manager</option>
                    <option value="Quality Control Officer">Quality Control Officer</option>
                    <option value="Heavy Machinery Operator">Heavy Machinery Operator</option>
                    <option value="General Application">General Application</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Years of Experience *
                  </label>
                  <input
                    required
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="e.g. 5 Years"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Current Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="City, State"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Highest Qualification
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="e.g. B.Tech in Mining"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Current Company
                  </label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm"
                    placeholder="Company Name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Notice Period
                  </label>
                  <select
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleChange}
                    className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm appearance-none"
                  >
                    <option value="" disabled>Select notice period</option>
                    <option value="Immediate">Immediate / Serving</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60+ Days">60+ Days</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-inter text-xs font-semibold text-white/70 uppercase tracking-wider">
                  Cover Letter / Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-navy-900/50 border border-white/10 focus:border-gold text-white px-4 py-3 outline-none transition-colors font-inter text-sm resize-none"
                  placeholder="Tell us why you are a great fit..."
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-gold-gradient text-navy-800 font-semibold text-sm uppercase tracking-widest py-4 rounded-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                Submit Application <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}

        {mode === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.03] border border-gold/20 rounded-xl p-12 text-center flex flex-col items-center justify-center"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="font-bebas text-4xl text-white tracking-wide">Application Received</h2>
            <p className="font-inter text-white/60 mt-4 max-w-md">
              Thank you for applying to Supalika Stone Works. Our HR team will review your profile and get back to you shortly.
            </p>
            <Link
              href="/careers"
              className="mt-8 border border-white/20 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Back to Careers
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
