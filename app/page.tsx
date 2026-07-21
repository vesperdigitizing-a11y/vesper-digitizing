import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import Store from "@/components/Store";
import HomeFAQ from "@/components/HomeFAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vesper Digitizing | Premium Embroidery Digitizing Services",
  description:
    "Professional embroidery digitizing services. Transform your artwork into flawless embroidery files with precision, quality and fast turnaround.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero
          badge="Premium Digitizing Services"
          badgeType="dot"
          title={"Precision Digitizing for Premium Embroidery"}
          description="We transform artwork into flawless embroidery files with exceptional stitch quality, fast turnaround and professional support trusted by clients worldwide."
          image="/images/HeroImg.webp"
          imageAlt="Vesper Digitizing"
          useBackgroundImage={false}
          ctaButtons={[
            { text: "Start Your Project", href: "/contact", variant: "solid" },
            { text: "View Portfolio", href: "/portfolio", variant: "outline" },
          ]}
          showStatsCard={true}
          statsCardValue={5000}
          statsCardSuffix="+"
          statsCardLabel="Completed Projects"
        />
        <Features />
        <Services />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials />
        <Store />
        <HomeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
