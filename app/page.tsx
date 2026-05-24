"use client";

import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Products from "@/components/Products";
import ProcessFlow from "@/components/ProcessFlow";
import Infrastructure from "@/components/Infrastructure";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeTicker />
      <About />
      <Leadership />
      <Products />
      <ProcessFlow />
      <Infrastructure />
      <Industries />
      <WhyChooseUs />
      <Careers />
      <Contact />
    </main>
  );
}
