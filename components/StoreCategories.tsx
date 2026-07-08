import { IconByName, type IconName } from "./icons";

type Category = { icon: IconName; title: string; count: number };

const CATEGORIES: Category[] = [
  { icon: "penTool", title: "Embroidery Fonts", count: 142 },
  { icon: "sparkles", title: "Logo Designs", count: 256 },
  { icon: "shirt", title: "Left Chest Logos", count: 338 },
  { icon: "cap", title: "Cap Designs", count: 768 },
  { icon: "jacket", title: "Jacket Back Designs", count: 778 },
  { icon: "cube", title: "3D Puff Designs", count: 96 },
  { icon: "patch", title: "Patch Collections", count: 124 },
  { icon: "layers", title: "Applique Designs", count: 112 },
  { icon: "users", title: "Mascot Designs", count: 201 },
  { icon: "globe", title: "Vector Files", count: 87 },
];

export default function StoreCategories() {
  return (
    <section id="categories" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = IconByName[cat.icon];
            return (
              <a
                key={cat.title}
                href="#products"
                className="group flex flex-col items-center rounded-xl border border-[#e5e7eb] bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#c8102e]/30 hover:shadow-lg"
              >
                <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-colors group-hover:bg-[#c8102e] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="text-sm font-bold text-[#1a1a1a]">
                  {cat.title}
                </h3>
                <p className="mt-1 text-xs text-[#6b7280]">
                  {cat.count} Products
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
