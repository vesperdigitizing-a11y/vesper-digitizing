import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import ServicesHero from "@/components/ServicesHero";
// import ServicesContent from "@/components/ServicesContent";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesProcess from "@/components/ServicesProcess";
import ServicesPortfolio from "@/components/ServicesPortfolio";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Vesper Digitizing",
  description:
    "Professional embroidery digitizing services — left chest logos, cap digitizing, jacket back, 3D puff, applique, patches, vector conversion and custom embroidery.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <Suspense fallback={null}>
          <Services />
          {/* <ServicesContent/> */}
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
