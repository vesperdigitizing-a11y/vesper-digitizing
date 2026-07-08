import type { Metadata } from "next";
import Header from "@/components/Header";
import StoreHero from "@/components/StoreHero";
import StoreCategories from "@/components/StoreCategories";
import StoreProducts from "@/components/StoreProducts";
import StoreBundles from "@/components/StoreBundles";
import StoreWhyShop from "@/components/StoreWhyShop";
import StoreReviews from "@/components/StoreReviews";
import StoreNewsletter from "@/components/StoreNewsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Store | Vesper Digitizing",
  description:
    "Shop premium embroidery designs, font packs, patch bundles and more. Instant download, commercial license included.",
};

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
        <StoreReviews />
        <StoreNewsletter />
      </main>
      <Footer />
    </>
  );
}
