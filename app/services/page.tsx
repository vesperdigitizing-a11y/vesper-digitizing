import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesProcess from "@/components/ServicesProcess";
import ServicesPortfolio from "@/components/ServicesPortfolio";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ServicesContent from "@/components/ServicesContent";
import { Clock, Refresh, ShieldCheck, Globe, Star } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Services | Vesper Digitizing",
  description:
    "Professional embroidery digitizing services — left chest logos, cap digitizing, jacket back, 3D puff, applique, patches, vector art and custom embroidery.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero
          badge="Professional Digitizing Services"
          badgeType="dot"
          title={"Precision That Every Stitch Deserves"}
          titleHighlight="Stitch Deserves"
          description="We deliver exceptional embroidery digitizing with perfect stitch quality, fast turnaround and unmatched customer support trusted by clients worldwide."
          image="/images/serviceHero.webp"
          imageAlt="Professional Digitizing Services"
          useBackgroundImage={false}
          ctaButtons={[
            { text: "Start Your Project", href: "/contact", variant: "solid" },
            { text: "View Portfolio", href: "/portfolio", variant: "outline" },
          ]}
          badges={[
            {
              icon: ShieldCheck,
              title: "All Formats",
              sub: "DST, EMB, PES & more",
            },
            {
              icon: Clock,
              title: "Fast Delivery",
              sub: "8-24 hours turnaround",
            },
            {
              icon: Refresh,
              title: "Zero Thread Breaks",
              sub: "Stitch-optimized files",
            },
            {
              icon: Star,
              title: "Expert Team",
              sub: "Veteran digitizers",
            },
          ]}
          showStatsCard={true}
          statsCardValue={5000}
          statsCardSuffix="+"
          statsCardLabel="Completed Projects"
        />
        <Suspense fallback={null}>
          <Services />
        </Suspense>
        <WhyChooseUs />
        <ServicesProcess />
        <Suspense fallback={null}>
          <ServicesPortfolio />
        </Suspense>
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
