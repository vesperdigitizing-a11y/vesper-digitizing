import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { BUNDLES, formatPrice, getDiscountPercent } from "@/lib/products";
import { ArrowRight } from "./icons";

export default function StoreBundles() {
  return (
    <section className="relative bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Special Offers
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Bundle Offers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6b7280] sm:text-base">
            Save big with our curated bundle packs. Get more designs for less.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BUNDLES.map((b) => {
            const discount = getDiscountPercent(b);
            return (
              <article
                key={b.slug}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link
                  href={`/product/${b.slug}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]"
                  aria-label={b.name}
                >
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {discount && (
                    <span className="absolute left-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e] text-sm font-bold text-white shadow-lg ring-4 ring-white/30">
                      -{discount}%
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>

                <div className="flex flex-1 flex-col p-4">
                  <Link
                    href={`/product/${b.slug}`}
                    className="font-display text-base font-bold text-[#1a1a1a] transition-colors hover:text-[#c8102e]"
                  >
                    {b.name}
                  </Link>
                  <p className="mt-1 text-xs text-[#6b7280] line-clamp-2">{b.tagline}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="font-display text-xl font-extrabold text-[#c8102e]">
                      {formatPrice(b.price)}
                    </span>
                    {b.originalPrice && (
                      <span className="text-xs text-[#9ca3af] line-through">
                        {formatPrice(b.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <AddToCartButton slug={b.slug} fullWidth label="Add to Cart" />
                  </div>
                  <Link
                    href={`/product/${b.slug}`}
                    className="mt-2 inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#6b7280] transition-colors hover:text-[#c8102e]"
                  >
                    View details
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
