// Server component for /product/[slug].
//
// Looks the product up in the shared catalog, generates static params +
// metadata, then renders the client sub-component with Product JSON-LD.

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
    title: `${product.name} — Embroidery Design File`,
    description: product.description.slice(0, 160),
    alternates: {
      canonical: `/product/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Vesper Digitizing`,
      description: product.tagline,
      url: `https://vesperdigitizing.com/product/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
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

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://vesperdigitizing.com${product.image}`,
    "description": product.description,
    "sku": product.slug,
    "brand": {
      "@type": "Brand",
      "name": "Vesper Digitizing"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://vesperdigitizing.com/product/${product.slug}`,
      "priceCurrency": "USD",
      "price": product.price.toFixed(2),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdProduct),
        }}
      />
      <Header />
      <main className="flex-1">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
    </>
  );
}
