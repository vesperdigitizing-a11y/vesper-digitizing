import type { Metadata } from "next";
import Header from "@/components/Header";
import StoreHero from "@/components/StoreHero";
import StoreCategories from "@/components/StoreCategories";
import StoreProducts from "@/components/StoreProducts";
import StoreBundles from "@/components/StoreBundles";
import StoreWhyShop from "@/components/StoreWhyShop";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import StoreNewsletter from "@/components/StoreNewsletter";
import Footer from "@/components/Footer";

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
  {
    quote:
      "The font packs are incredible value. Commercial license included is a huge bonus!",
    name: "Chris P.",
    country: "UK",
    avatar: "/images/testimonials/chris-p.jpg",
  },
  {
    quote:
      "Best embroidery design store I have used. Premium quality at fair prices.",
    name: "Anna S.",
    country: "Netherlands",
    avatar: "/images/testimonials/anna-s.jpg",
  },
];

export default function StorePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <StoreHero />
        <StoreCategories />
        <StoreProducts />
        <StoreBundles />
        <StoreWhyShop />
        <Testimonials
          eyebrow="Testimonials"
          title="Our Happy Customers"
          subtitle="Real feedback from real clients who trust Vesper Digitizing with their embroidery work."
          testimonials={STORE_TESTIMONIALS}
        />
        <StoreNewsletter />
      </main>
      <Footer />
    </>
  );
}
