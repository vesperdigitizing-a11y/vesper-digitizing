import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoreCategories from "@/components/StoreCategories";
import StoreProducts from "@/components/StoreProducts";
import StoreBundles from "@/components/StoreBundles";
import StoreWhyShop from "@/components/StoreWhyShop";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import StoreNewsletter from "@/components/StoreNewsletter";
import Footer from "@/components/Footer";
import {
  Download,
  BadgeCheck,
  ShieldCheck,
  Lock,
  Clock,
  Refresh,
  Globe,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Embroidery Store — Design Files, Font Packs & Patch Bundles",
  description:
    "Shop premium embroidery design files, font packs, and patch bundles. Instant download, commercial license included, DST, PES, EXP & major formats.",
  alternates: {
    canonical: "/store",
  },
  openGraph: {
    title: "Embroidery Design Store | Vesper Digitizing",
    description:
      "Shop instant-download embroidery files and font packs with commercial license.",
    images: ["/og-image.png"],
  },
};

const jsonLdStoreBreadcrumb = {
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
      "name": "Store",
      "item": "https://vesperdigitizing.com/store"
    }
  ]
};

const STORE_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Amazing quality designs and instant download. My go-to store for all embroidery files!",
    name: "Emily W.",
    country: "USA",
    avatar: "/images/testimonials/emily-w.webp",
  },
  {
    quote:
      "The font packs are incredible value. Commercial license included is a huge bonus!",
    name: "Chris P.",
    country: "UK",
    avatar: "/images/testimonials/chris-p.webp",
  },
  {
    quote:
      "Best embroidery design store I have used. Premium quality at fair prices.",
    name: "Anna S.",
    country: "Netherlands",
    avatar: "/images/testimonials/anna-s.webp",
  },
];

export default function StorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdStoreBreadcrumb),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero
          badge="Premium Embroidery Design Store"
          badgeType="plain"
          title={"Premium Designs for Every Stitch and Style"}
          titleHighlight="Stitch and Style"
          description="Explore our exclusive collection of embroidery designs, fonts, and patch packs. Perfect quality, instant download and commercial use included."
          image="/images/HeroStore.webp"
          imageAlt="Vesper Store - Shop Designs"
          useBackgroundImage={false}
          ctaButtons={[
            { text: "Start Your Project", href: "/contact", variant: "solid" },
            { text: "View Portfolio", href: "/portfolio", variant: "outline" },
          ]}
          badges={[
            {
              icon: ShieldCheck,
              title: "Secure Payment",
              sub: "Encrypted checkout",
            },
            {
              icon: Globe,
              title: "Live Tracking",
              sub: "Track patch shipments",
            },
            {
              icon: Refresh,
              title: "Guaranteed Quality",
              sub: "Easy replacements",
            },
            {
              icon: Clock,
              title: "Instant Download",
              sub: "Immediate file access",
            },
          ]}
          showStatsCard={true}
          statsCardValue={5000}
          statsCardSuffix="+"
          statsCardLabel="Completed Projects"
        />
        <StoreCategories />
        <StoreProducts />
        <StoreBundles />
        <StoreWhyShop />
        <Testimonials testimonials={STORE_TESTIMONIALS} />
        <StoreNewsletter />
      </main>
      <Footer />
    </>
  );
}
