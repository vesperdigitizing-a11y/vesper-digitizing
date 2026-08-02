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
  title: "Portfolio — Embroidery Digitizing & Vector Work",
  description:
    "Explore our featured embroidery digitizing portfolio: caps, left chest logos, jacket backs, patches, 3D puff, applique, and vector conversions.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Embroidery Digitizing & Vector Work Portfolio | Vesper Digitizing",
    description:
      "Explore real digitizing projects crafted with precision and stitch quality trusted by global brands.",
    images: ["/og-image.png"],
  },
};

const jsonLdPortfolioBreadcrumb = {
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
      "name": "Portfolio",
      "item": "https://vesperdigitizing.com/portfolio"
    }
  ]
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdPortfolioBreadcrumb),
        }}
      />
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
