import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import { PRODUCTS, formatPrice } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

// Home page store preview — shows the first 4 products from the shared
// catalog. Each card links to /product/[slug] for the full detail page.

const FEATURED = PRODUCTS.slice(0, 4);

export default function Store() {
  return (
    <section id="store" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[280px_1fr] lg:gap-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Visit Our Store"
              title="Premium Embroidery Designs & More"
              subtitle="Explore our collection of embroidery designs, fonts, and patch packs."
            />
            <Link
              href="/store"
              className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div>
            <div className="mb-5 flex justify-center gap-1.5 lg:justify-end">
              {FEATURED.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === 0 ? "w-5 bg-[#c8102e]" : "w-1.5 bg-[#d1d5db]"
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {FEATURED.map((p) => (
                <article
                  key={p.slug}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    href={`/product/${p.slug}`}
                    className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5]"
                    aria-label={p.name}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.badge === "sale" && p.originalPrice && (
                      <span className="absolute left-3 top-3 rounded-md bg-[#c8102e] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        Sale
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-[#9ca3af]">
                      {p.categoryLabel}
                    </div>
                    <Link
                      href={`/product/${p.slug}`}
                      className="mt-1 font-display text-sm font-bold text-[#1a1a1a] transition-colors hover:text-[#c8102e]"
                    >
                      {p.name}
                    </Link>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-base font-extrabold text-[#c8102e] sm:text-lg">
                          {formatPrice(p.price)}
                        </span>
                        {p.originalPrice && (
                          <span className="text-xs text-[#9ca3af] line-through">
                            {formatPrice(p.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <AddToCartButton slug={p.slug} size="sm" fullWidth label="Add" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
