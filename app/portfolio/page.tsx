import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import PortfolioFeatures from "@/components/PortfolioFeatures";
import PortfolioCTA from "@/components/PortfolioCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Portfolio | Vesper Digitizing",
  description:
    "Explore our featured embroidery digitizing work — caps, left chest logos, jacket backs, patches, 3D puff, applique and more. Quality that speaks for itself.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PortfolioHero />
        <Suspense fallback={null}>
          <PortfolioGallery />
        </Suspense>
        <PortfolioFeatures />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
