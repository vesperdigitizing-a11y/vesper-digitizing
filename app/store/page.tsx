import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoreCategories from "@/components/StoreCategories";
import StoreProducts from "@/components/StoreProducts";
import { type Testimonial } from "@/components/Testimonials";
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

// Below-the-fold sections — split into their own chunks so the initial
// hydration payload for the store page stays smaller.
const StoreBundles = dynamic(() => import("@/components/StoreBundles"));
const StoreWhyShop = dynamic(() => import("@/components/StoreWhyShop"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const StoreNewsletter = dynamic(() => import("@/components/StoreNewsletter"));

export const metadata: Metadata = {
  title: "Store | Vesper Digitizing",
  description:
    "Shop premium embroidery designs, font packs, patch bundles and more. Instant download, commercial license included.",
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
