import { IconByName, type IconName, Plus } from "./icons";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";
import { PRODUCTS, BUNDLES } from "@/lib/products";
import Link from "next/link";
import { ITEMS as PORTFOLIO_ITEMS } from "@/lib/portfolio";

type Category = { 
  icon: IconName; 
  title: string; 
  count: number;
  slug: string;
};

// Map store category slug to portfolio category slug
const getPortfolioCategorySlug = (storeSlug: string): string => {
  switch (storeSlug) {
    case "cap-digitizing":
      return "cap";
    case "patch-digitizing":
      return "patches";
    case "vector-conversion":
      return "vector";
    case "towel-digitizing":
      return "towel";
    case "sleeve-logos":
      return "shirt-sleeve";
    default:
      return storeSlug;
  }
};

// Calculate real counts from actual portfolio data
const getRealCounts = (): Category[] => {
  const getCount = (slug: string) => {
    const portfolioSlug = getPortfolioCategorySlug(slug);
    return PORTFOLIO_ITEMS.filter((item) => item.category === portfolioSlug).length;
  };

  return [
    { icon: "shirt", title: "Left Chest Logos", count: getCount("left-chest"), slug: "left-chest" },
    { icon: "cap", title: "Cap Digitizing", count: getCount("cap-digitizing"), slug: "cap-digitizing" },
    { icon: "jacket", title: "Jacket Back", count: getCount("jacket-back"), slug: "jacket-back" },
    { icon: "cube", title: "3D Puff Digitizing", count: getCount("3d-puff"), slug: "3d-puff" },
    { icon: "layers", title: "Applique Digitizing", count: getCount("applique"), slug: "applique" },
    { icon: "patch", title: "Patches", count: getCount("patch-digitizing"), slug: "patch-digitizing" },
    { icon: "penTool", title: "Vector Art", count: getCount("vector-conversion"), slug: "vector-conversion" },
    { icon: "sparkles", title: "Chenille Patches", count: getCount("chenille"), slug: "chenille" },
    { icon: "towel", title: "Towel Digitizing", count: getCount("towel-digitizing"), slug: "towel-digitizing" },
    { icon: "sleeve", title: "Sleeve Logo Digitizing", count: getCount("sleeve-logos"), slug: "sleeve-logos" },
  ];
};

const CATEGORIES = getRealCounts();

export default function StoreCategories() {
  return (
    <section id="categories" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              <span className="h-px w-6 bg-current opacity-60" />
              Browse Collection
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Shop by Category
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = IconByName[cat.icon];
            return (
              <TiltCard key={cat.title} max={10}>
                <Link
                  href={
                    cat.slug === "patch-digitizing"
                      ? "/store?category=patch-digitizing#products"
                      : `/services?category=${cat.slug}`
                  }
                  className="group relative flex h-full flex-col items-center overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl cursor-pointer"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 transition-all duration-500 group-hover:from-[#c8102e]/5 group-hover:to-transparent"
                  />
                  
                  <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-[#c8102e]/15 group-hover:ring-[#c8102e]/40 group-hover:shadow-[0_8px_24px_-4px_rgba(200,16,46,0.45)]">
                    <Icon className="h-10 w-10 transition-transform duration-500 group-hover:scale-105" />
                  </span>
                  
                  <h3 className="relative text-sm font-bold text-[#1a1a1a]">
                    {cat.title}
                  </h3>
                  
                  <p className="relative mt-2 text-xs text-[#6b7280]">
                    {cat.count} Products
                  </p>

                  {/* Plus icon that rotates on hover */}
                  <span
                    aria-label={`View ${cat.title}`}
                    className="relative mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#1a1a1a] transition-all duration-300 group-hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white hover:rotate-90"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </Link>
              </TiltCard>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
