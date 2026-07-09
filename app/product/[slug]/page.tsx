// Server component for /product/[slug].
//
// Looks the product up in the shared catalog, generates static params +
// metadata, then renders the client sub-component with the qty selector and
// Add to Cart button.

import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_PRODUCTS,
  getProductBySlug,
  type Product,
} from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product Not Found | Vesper Digitizing",
    };
  }
  return {
    title: `${product.name} | Vesper Digitizing Store`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} | Vesper Digitizing`,
      description: product.tagline,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product: Product | undefined = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
    </>
  );
}
