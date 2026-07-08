import SectionHeading from "./SectionHeading";
import { ArrowRight, Cart } from "./icons";

type Product = {
  name: string;
  meta: string;
  price: string;
  original: string;
};

const PRODUCTS: Product[] = [
  { name: "Embroidery Font Pack", meta: "Classic Font Pack", price: "$25.99", original: "$49.99" },
  { name: "Animal Embroidery Pack", meta: "20 Designs", price: "$14.99", original: "$24.99" },
  { name: "Patch Bundle Pack", meta: "10 Designs", price: "$19.99", original: "$34.99" },
  { name: "Sports Logo Pack", meta: "15 Logos", price: "$24.99", original: "$39.99" },
];

export default function Store() {
  return (
    <section id="store" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit Our Store"
          title="Premium Embroidery Designs & More"
          subtitle="Explore our collection of embroidery designs, fonts, and patch packs."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="placeholder-grid relative aspect-square w-full">
                <div className="absolute left-3 top-3 z-10 rounded-md bg-[#c8102e] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Sale
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-md bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                    Product Image
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">
                  {p.meta}
                </div>
                <h3 className="mt-1 font-display text-sm font-bold text-[#1a1a1a] sm:text-base">
                  {p.name}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <span className="font-display text-lg font-extrabold text-[#c8102e]">
                    {p.price}
                  </span>
                  <span className="text-xs text-[#9ca3af] line-through">{p.original}</span>
                </div>

                <button
                  type="button"
                  className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-[#e5e7eb] bg-white text-xs font-semibold uppercase tracking-wider text-[#1a1a1a] transition-colors hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                >
                  <Cart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#store"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
          >
            Shop Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
