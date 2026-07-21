import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import PortfolioFeatures from "@/components/PortfolioFeatures";
import PortfolioCTA from "@/components/PortfolioCTA";
import Footer from "@/components/Footer";
import {
  Trophy,
  User,
  Globe,
  BadgeCheck,
  Star,
  ShieldCheck,
  Clock,
  Refresh,
} from "@/components/icons";

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
        <Hero
          badge="Our Portfolio"
          badgeType="line"
          title={"Stitching Your Ideas Into Perfection"}
          titleHighlight="Perfection"
          description="Explore our recent digitizing projects. Every design is crafted with precision, passion and perfection to make your brand stand out."
          image="/images/HeroPorfolio.webp"
          imageAlt="Portfolio - Our Work"
          useBackgroundImage={false}
          ctaButtons={[
            { text: "Start Your Project", href: "/contact", variant: "solid" },
            { text: "View Portfolio", href: "/portfolio", variant: "outline" },
          ]}
          badges={[
            {
              icon: Star,
              title: "Top Rated",
              sub: "Trusted by global brands",
            },
            {
              icon: ShieldCheck,
              title: "NDA Protected",
              sub: "100% safe designs",
            },
            {
              icon: Clock,
              title: "Fast Quotes",
              sub: "30-60 min response",
            },
            {
              icon: Refresh,
              title: "Free Review",
              sub: "Check before payment",
            },
          ]}
          showStatsCard={true}
          statsCardValue={5000}
          statsCardSuffix="+"
          statsCardLabel="Completed Projects"
        />
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
