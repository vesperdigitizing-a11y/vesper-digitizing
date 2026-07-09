import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Cart } from "./icons";

type Product = {
  name: string;
  meta: string;
  price: string;
  original: string;
  image: string;
  sale?: boolean;
};

const PRODUCTS: Product[] = [
  { name: "Embroidery Font Pack", meta: "Classic Font Collection", price: "$29.99", original: "$49.99", image: "/images/store/fonts.jpg", sale: true },
  { name: "Animals Embroidery Pack", meta: "20 Designs", price: "$14.99", original: "$24.99", image: "/images/store/animal.jpg" },
  { name: "Patch Bundle Pack", meta: "50 Premium Patches", price: "$19.99", original: "$34.99", image: "/images/store/patch_bundle.jpg" },
  { name: "Sports Logos Pack", meta: "30 Logos", price: "$24.99", original: "$39.99", image: "/images/store/sports.png" },
];

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
            <a
              href="#store"
              className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div>
            <div className="mb-5 flex justify-center gap-1.5 lg:justify-end">
              {PRODUCTS.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === 0 ? "w-5 bg-[#c8102e]" : "w-1.5 bg-[#d1d5db]"
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {PRODUCTS.map((p) => (
                <article
                  key={p.name}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.sale && (
                      <span className="absolute left-3 top-3 rounded-md bg-[#c8102e] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        Sale
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-[#9ca3af]">
                      {p.meta}
                    </div>
                    <h3 className="mt-1 font-display text-sm font-bold text-[#1a1a1a] sm:text-base">
                      {p.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-base font-extrabold text-[#c8102e] sm:text-lg">
                          {p.price}
                        </span>
                        <span className="text-xs text-[#9ca3af] line-through">{p.original}</span>
                      </div>
                      <button
                        type="button"
                        aria-label={`Add ${p.name} to cart`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#e5e7eb] text-[#1a1a1a] transition-colors hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                      >
                        <Cart className="h-4 w-4" />
                      </button>
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
