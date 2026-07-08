import Image from "next/image";
import { ArrowRight } from "./icons";

type Bundle = {
  name: string;
  desc: string;
  discount: string;
  price: string;
  original: string;
  image: string;
};

const BUNDLES: Bundle[] = [
  { name: "Font Mega Pack",     desc: "500+ premium embroidery fonts",       discount: "50%", price: "$39.99", original: "$79.99", image: "/images/store/fonts.jpg" },
  { name: "Patch Bundle Pack",  desc: "100+ patch designs collection",       discount: "30%", price: "$29.99", original: "$42.99", image: "/images/store/patch_bundle.jpg" },
  { name: "Animal Design Pack", desc: "200+ animal embroidery designs",      discount: "40%", price: "$34.99", original: "$58.99", image: "/images/store/animal.jpg" },
  { name: "Sports Logo Bundle", desc: "150+ sports team logo designs",       discount: "35%", price: "$44.99", original: "$69.99", image: "/images/store/sports.png" },
];

export default function StoreBundles() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24">
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
          {BUNDLES.map((b) => (
            <article
              key={b.name}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#e5e7eb] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image with discount badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 z-10 rounded-md bg-[#c8102e] px-3 py-1 text-sm font-bold text-white">
                  -{b.discount}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                  {b.name}
                </h3>
                <p className="mt-1 text-xs text-[#6b7280]">{b.desc}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="font-display text-xl font-extrabold text-[#c8102e]">
                    {b.price}
                  </span>
                  <span className="text-xs text-[#9ca3af] line-through">
                    {b.original}
                  </span>
                </div>
                <button className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#c8102e] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#a30d24]">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
