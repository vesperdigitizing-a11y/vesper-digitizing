"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Store from "@/components/Store";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials />
        <Store />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
