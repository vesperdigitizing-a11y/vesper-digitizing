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
import { Download, BadgeCheck, ShieldCheck, Lock } from "@/components/icons";

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
    avatar: "/images/testimonials/emily-w.jpg",
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
          image="/images/HeroStore.png"
          imageAlt="Vesper Store - Shop Designs"
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
