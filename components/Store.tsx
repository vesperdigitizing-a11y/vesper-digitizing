import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";
import { PRODUCTS, formatPrice } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const FEATURED = PRODUCTS.slice(0, 4);

export default function Store() {
  return (
    <section id="store" className="relative bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[280px_1fr] lg:gap-8">
          <ScrollReveal variant="left">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Visit Our Store"
                title="Premium Embroidery Designs & More"
                subtitle="Explore our collection of embroidery designs, fonts, and patch packs."
              />
              <MagneticButton href="/store" size="md" variant="solid" className="mt-6">
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
            </div>
          </ScrollReveal>

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

            <ScrollReveal stagger className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {FEATURED.map((p) => (
                <article
                  key={p.slug}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {p.badge === "sale" && p.originalPrice && (
                      <span className="absolute left-3 top-3 z-10 rounded-md bg-[#c8102e] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        Sale
                      </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a] shadow-md backdrop-blur">
                        View Details
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
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

                    <div className="mt-auto pt-3">
                      <AddToCartButton slug={p.slug} size="sm" fullWidth label="Add" />
                    </div>
                  </div>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
