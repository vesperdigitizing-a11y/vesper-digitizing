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
  title: "Professional Embroidery Digitizing Services",
  description:
    "Explore our full range of embroidery digitizing services: cap digitizing, left chest logos, jacket back designs, 3D puff embroidery, and applique. 8-24h turnaround.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Embroidery Digitizing Services | Vesper Digitizing",
    description:
      "Precision digitizing for cap, left chest, jacket back, 3D puff, and applique embroidery. All formats included.",
    images: ["/og-image.png"],
  },
};

const jsonLdServicesBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vesperdigitizing.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://vesperdigitizing.com/services"
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdServicesBreadcrumb),
        }}
      />
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
