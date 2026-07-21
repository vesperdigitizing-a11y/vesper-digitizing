// Shared product catalog for the Vesper Digitizing store.
// Single source of truth — used by the home page store preview, the store
// page product grid, the bundle grid, and the /product/[slug] detail pages.

export type ProductBadge = "sale" | "best" | "new";

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: ProductBadge;
  tagline: string;
  description: string;
  features: string[];
  includes: string[];
  formats: string[];
  rating: number;
  reviewCount: number;
  designs: number;
  fileSize: string;
  isBundle?: boolean;
  bundleDiscount?: number; // integer percent, e.g. 50 for "50% off"
};

export const PRODUCTS: Product[] = [
  // ===== NEW PRODUCTS — Custom Patches =====
  {
    slug: "certified-locally-grown-patch",
    name: "Certified Locally Grown Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image:
      "/images/products/patch-digitizing/patch-certified-locally-grown.webp",
    badge: "sale",
    tagline:
      "Rustic farm-to-table patch perfect for local businesses and farmers markets.",
    description:
      "A charming 'Certified Locally Grown' patch design with a rustic, hand-crafted aesthetic. Features clean satin lettering with a decorative border that looks great on aprons, tote bags, and market displays. Digitized for both iron-on and sew-on application.",
    features: [
      "Clean satin stitch lettering",
      "Decorative border for easy merrow finishing",
      "Fits 4x4 inch hoops",
      "Works on cotton, canvas & denim",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 64,
    designs: 1,
    fileSize: "2.1 MB",
  },
  {
    slug: "classic-pikachu-1996-patch",
    name: "Classic Pikachu 1996 Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image: "/images/products/patch-digitizing/patch-classic-pikachu-1996.webp",
    badge: "best",
    tagline:
      "Retro-style character patch — nostalgic 1996 design for fans and collectors.",
    description:
      "A nostalgic retro-style character patch featuring a classic 1996 design. Bold outlines and vibrant fills make this patch pop on jackets, backpacks, and caps. Digitized with clean satin borders ready for merrow or laser-cut finishing.",
    features: [
      "Bold outlines for high visibility",
      "Vibrant color-blocked fills",
      "Ready for merrow or laser-cut finishing",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 128,
    designs: 1,
    fileSize: "2.4 MB",
  },
  {
    slug: "dont-hassle-me-shuckle-patch",
    name: "Don't Hassle Me Shuckle Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image: "/images/products/patch-digitizing/patch-dont-hassle-me-shuckle.webp",
    badge: "new",
    tagline:
      "Fun character patch with playful typography — perfect for backpacks and jackets.",
    description:
      "A fun and quirky character patch featuring playful typography and a beloved shell Pokemon. Clean stitch paths and optimized density make this design run smoothly on any machine. Great for backpacks, denim jackets, and fan merchandise.",
    features: [
      "Playful character design",
      "Optimized density for smooth stitching",
      "Clean stitch paths",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.7,
    reviewCount: 89,
    designs: 1,
    fileSize: "1.8 MB",
  },
  {
    slug: "dragonite-delivery-service-patch",
    name: "Dragonite Delivery Service Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image:
      "/images/products/patch-digitizing/patch-dragonite-delivery-service.webp",
    badge: "sale",
    tagline:
      "Vintage delivery service badge patch — whimsical design for fan apparel.",
    description:
      "A vintage-style delivery service badge patch featuring a friendly dragon character. The circular badge design includes bold ring text and detailed fills that stitch cleanly on both light and dark fabrics. Perfect for fan apparel and collectible merchandise.",
    features: [
      "Vintage badge-style design",
      "Bold ring text for easy readability",
      "Detailed fills stitch cleanly on all fabrics",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 76,
    designs: 1,
    fileSize: "2.2 MB",
  },
  {
    slug: "error-404-patch",
    name: "Error 404 Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image: "/images/products/patch-digitizing/patch-error-404.webp",
    tagline:
      "Geeky error-code patch — perfect for tech enthusiasts and developers.",
    description:
      "A minimalist 'Error 404' patch design perfect for tech enthusiasts, developers, and geek culture apparel. Clean monospace-style lettering with a subtle glitch aesthetic. Lightweight density makes it ideal for caps, laptop sleeves, and backpacks.",
    features: [
      "Minimalist monospace lettering",
      "Subtle glitch aesthetic",
      "Lightweight density for caps & sleeves",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.6,
    reviewCount: 45,
    designs: 1,
    fileSize: "1.5 MB",
  },
  {
    slug: "kanto-fire-department-patch",
    name: "Kanto Fire Department Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image: "/images/products/patch-digitizing/patch-kanto-fire-department.webp",
    badge: "best",
    tagline:
      "Authentic fire department style patch — bold shield design for apparel.",
    description:
      "An authentic fire department-style shield patch with bold lettering and a classic shield shape. The design features clean satin borders, color-blocked sections, and a professional aesthetic that looks great on jackets, uniforms, and collectible displays. Digitized for both iron-on and sew-on application.",
    features: [
      "Authentic shield-style design",
      "Bold satin borders for merrow finishing",
      "Color-blocked sections for clean fills",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 92,
    designs: 1,
    fileSize: "2.6 MB",
  },
  {
    slug: "licensed-nursing-assistant-patch",
    name: "Licensed Nursing Assistant Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image:
      "/images/products/patch-digitizing/patch-licensed-nursing-assistant.webp",
    tagline:
      "Professional medical patch — clean design for scrubs and uniforms.",
    description:
      "A professional 'Licensed Nursing Assistant' patch designed for medical scrubs and uniforms. Clean lettering, medical cross accent, and a structured layout make this patch look official and polished. Optimized for high stitch count durability through repeated washing.",
    features: [
      "Professional medical design",
      "Medical cross accent",
      "Wash-durable digitizing",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.7,
    reviewCount: 54,
    designs: 1,
    fileSize: "1.9 MB",
  },
  {
    slug: "official-bean-of-the-year-patch",
    name: "Official Bean of the Year Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image:
      "/images/products/patch-digitizing/patch-official-bean-of-the-year.webp",
    badge: "sale",
    tagline:
      "Fun award-style patch — perfect for coffee lovers and café merchandise.",
    description:
      "A whimsical 'Official Bean of the Year' award-style patch perfect for coffee shops, café merchandise, and fun apparel. Features a circular badge design with playful typography and a coffee bean centerpiece. Light density makes it great for aprons and tote bags.",
    features: [
      "Whimsical award-style design",
      "Circular badge with coffee bean centerpiece",
      "Light density for aprons & totes",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.5,
    reviewCount: 38,
    designs: 1,
    fileSize: "1.7 MB",
  },
  {
    slug: "professional-dragon-slayer-patch",
    name: "Professional Dragon Slayer Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image:
      "/images/products/patch-digitizing/patch-professional-dragon-slayer.webp",
    badge: "new",
    tagline:
      "Epic fantasy patch — bold dragon design for gamers and fantasy fans.",
    description:
      "An epic 'Professional Dragon Slayer' patch featuring a bold dragon design with dramatic fills and sharp outlines. Perfect for gaming apparel, fantasy merchandise, and convention gear. Heavy satin stitching gives this patch a premium, raised feel that stands out on any garment.",
    features: [
      "Epic fantasy dragon design",
      "Heavy satin stitching for raised feel",
      "Sharp outlines for high visibility",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 67,
    designs: 1,
    fileSize: "2.3 MB",
  },
  {
    slug: "squirtle-squad-patch",
    name: "Squirtle Squad Patch",
    category: "patches",
    categoryLabel: "Custom Patches",
    price: 2.99,
    originalPrice: 4.0,
    image: "/images/products/patch-digitizing/patch-squirtle-squad.webp",
    badge: "best",
    tagline:
      "Iconic squad patch — retro character design for fans and collectors.",
    description:
      "An iconic squad patch featuring a beloved turtle character in retro sunglasses. The design captures the cool, laid-back vibe of the classic squad aesthetic. Clean color blocking and bold outlines make this patch pop on jackets, caps, and backpacks. A must-have for collectors and fan apparel.",
    features: [
      "Iconic retro character design",
      "Bold color-blocked sections",
      "Clean outlines for merrow finishing",
      "Fits 4x4 inch hoops",
      "Commercial license included",
    ],
    includes: [
      "Design in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color chart",
      "Stitch-map PDF",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 143,
    designs: 1,
    fileSize: "2.5 MB",
  },
];

export const BUNDLES: Product[] = [
  {
    slug: "font-mega-pack",
    name: "50 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 149.99,
    originalPrice: 200,
    image: "/images/products/bundles/bundle-1.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "50 premium patch designs — curated collection at an unbeatable price.",
    description:
      "A curated pack of 50 premium embroidery patch designs covering multiple themes including military, biker, sports, and brand identity. Every patch is hand-digitized with clean satin borders optimized for merrow-edge or laser-cut finishing. Ships with stitch-map PDFs and a lifetime commercial license.",
    features: [
      "50 premium patch designs",
      "Clean satin borders for easy finishing",
      "Multiple themes and styles",
      "Stitch-map PDFs included",
      "Lifetime commercial license",
    ],
    includes: [
      "50 designs in 7 formats",
      "Stitch-map PDFs",
      "Thread color charts",
      "Finishing guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 287,
    designs: 50,
    fileSize: "245 MB",
  },
  {
    slug: "patch-bundle-pro",
    name: "50 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 149.99,
    originalPrice: 200,
    image: "/images/products/bundles/bundle-2.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "50 premium patch designs — curated collection at an unbeatable price.",
    description:
      "A curated pack of 50 premium embroidery patch designs spanning military, biker, sports, outdoors, and brand identity themes. Every patch comes with stitch-map PDFs for clean finishing and is optimized for both twill applique and direct-to-garment stitching. Great value for shops that do patch work.",
    features: [
      "50 premium patch designs",
      "Stitch-map PDF for every patch",
      "Works on twill, felt and direct-to-garment",
      "Clean satin borders for easy finishing",
      "Commercial license",
    ],
    includes: [
      "50 designs in 7 formats",
      "Stitch-map PDFs",
      "Thread color charts",
      "Finishing guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 156,
    designs: 50,
    fileSize: "238 MB",
  },
  {
    slug: "animal-design-mega-pack",
    name: "70 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 209.99,
    originalPrice: 280,
    image: "/images/products/bundles/bundle-3.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "70 premium patch designs — expanded collection for growing shops.",
    description:
      "70 premium patch designs covering animal themes, wildlife portraits, stylized mascots, and tribal silhouettes. Each design is tested on multiple fabrics and hoop sizes. Perfect for shops that need a versatile library of animal artwork for jackets, patches, and kids apparel.",
    features: [
      "70 premium patch designs",
      "Animal, wildlife and mascot themes",
      "Multiple hoop sizes per design",
      "Tested on cotton, denim, fleece and caps",
      "Commercial license",
    ],
    includes: [
      "70 designs in 7 formats",
      "Thread color charts",
      "Hoop placement guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 198,
    designs: 70,
    fileSize: "312 MB",
  },
  {
    slug: "sports-logo-bundle",
    name: "70 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 209.99,
    originalPrice: 280,
    image: "/images/products/bundles/bundle-4.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "70 premium patch designs — expanded collection for growing shops.",
    description:
      "70 premium patch designs covering sports logos, team mascots, and athletic themes. Each design comes in multiple sizes optimized for caps, left-chest, and full-back placements. Color-blocked fills and clean outlines make these patches stitch cleanly on any fabric.",
    features: [
      "70 premium patch designs",
      "Sports, team and athletic themes",
      "Multiple sizes per design",
      "Color-blocked for clean fills",
      "Commercial license",
    ],
    includes: [
      "70 designs in 7 formats",
      "Thread color charts",
      "Team color variant guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.7,
    reviewCount: 124,
    designs: 70,
    fileSize: "298 MB",
  },
  {
    slug: "floral-design-collection",
    name: "100 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 299.99,
    originalPrice: 400,
    image: "/images/products/bundles/bundle-5.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "100 premium patch designs — the ultimate collection for serious shops.",
    description:
      "100 premium patch designs covering floral, vintage, decorative, and artistic themes. Light density and smooth underlay make these safe for delicate fabrics while bold designs work beautifully on denim and canvas. The ultimate collection for shops that need variety and volume.",
    features: [
      "100 premium patch designs",
      "Floral, vintage and decorative themes",
      "Multiple hoop sizes per design",
      "Optimized for all fabric types",
      "Commercial license",
    ],
    includes: [
      "100 designs in 7 formats",
      "Thread color charts",
      "Hoop placement guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.6,
    reviewCount: 73,
    designs: 100,
    fileSize: "420 MB",
  },
  {
    slug: "mascot-character-pack",
    name: "100 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 299.99,
    originalPrice: 400,
    image: "/images/products/bundles/bundle-6.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "100 premium patch designs — the ultimate collection for serious shops.",
    description:
      "100 premium patch designs covering mascots, characters, school spirit, and brand identity themes. Heavy satin fills and bold outlines make these designs read clearly even at small sizes. Each design comes with cap and jacket-back variants. The ultimate pack for high-volume shops.",
    features: [
      "100 premium patch designs",
      "Mascot, character and brand themes",
      "Cap and jacket-back sizes included",
      "Bold satin fills for high visibility",
      "Commercial license",
    ],
    includes: [
      "100 designs in 7 formats",
      "Color charts (Madeira and Robison-Anton)",
      "Size variant guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.7,
    reviewCount: 91,
    designs: 100,
    fileSize: "445 MB",
  },
  {
    slug: "vintage-logo-bundle",
    name: "50 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 149.99,
    originalPrice: 186.67,
    image: "/images/products/bundles/bundle-7.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "50 premium patch designs — curated selection across multiple themes.",
    description:
      "50 premium patch designs covering military, biker, sports, and brand identity themes. Every patch is hand-digitized with clean satin borders optimized for merrow-edge or laser-cut finishing. Ships with stitch-map PDFs and a lifetime commercial license.",
    features: [
      "50 premium patch designs",
      "Clean satin borders for easy finishing",
      "Multiple themes and styles",
      "Stitch-map PDFs included",
      "Commercial license",
    ],
    includes: [
      "50 designs in 7 formats",
      "Stitch-map PDFs",
      "Thread color charts",
      "Finishing guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.6,
    reviewCount: 58,
    designs: 50,
    fileSize: "164 MB",
  },
  {
    slug: "monogram-initials-set",
    name: "50 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 149.99,
    originalPrice: 186.67,
    image: "/images/products/bundles/bundle-8.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "50 premium patch designs — curated selection across multiple themes.",
    description:
      "50 premium patch designs covering monogram, lettering, and text-based themes. Each design is digitized for multiple sizes with clean satins that hold their shape on terry cloth, cotton, and denim. Perfect for personalization shops and gift embroidery.",
    features: [
      "50 premium patch designs",
      "Monogram and lettering themes",
      "Multiple sizes per design",
      "Clean satin stitching on all fabrics",
      "Commercial license",
    ],
    includes: [
      "50 designs in 7 formats",
      "Thread color charts",
      "Size variant guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 134,
    designs: 50,
    fileSize: "89 MB",
  },
  {
    slug: "logo-starter-kit",
    name: "50 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 149.99,
    originalPrice: 186.67,
    image: "/images/products/bundles/bundle-9.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "50 premium patch designs — curated selection across multiple themes.",
    description:
      "50 premium patch designs covering corporate logos, sports, outdoor, automotive, and lifestyle themes. Each design is optimized for left-chest and cap sizes with clean underlay and proper density. A great value starter kit for any embroidery shop.",
    features: [
      "50 premium patch designs",
      "Logo and brand identity themes",
      "Optimized for left-chest and cap sizes",
      "Clean underlay and proper density",
      "Commercial license",
    ],
    includes: [
      "50 designs in 7 formats",
      "Thread color charts",
      "Size variant guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 167,
    designs: 50,
    fileSize: "156 MB",
  },
  {
    slug: "premium-patch-collection",
    name: "50 Patches Pack",
    category: "patches",
    categoryLabel: "Patch Bundles",
    price: 149.99,
    originalPrice: 186.67,
    image: "/images/products/bundles/bundle-10.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline:
      "50 premium patch designs — curated selection across multiple themes.",
    description:
      "50 premium patch designs covering military, biker, sports, anime, fantasy, retro, and professional themes. Every patch includes stitch-map PDFs and is optimized for merrow-edge or laser-cut finishing. A great value pack for patch shops of all sizes.",
    features: [
      "50 premium patch designs",
      "Multiple themes and styles",
      "Stitch-map PDF for every patch",
      "Merrow-edge and laser-cut optimized",
      "Commercial license",
    ],
    includes: [
      "50 designs in 7 formats",
      "Stitch-map PDFs",
      "Thread color charts",
      "Finishing guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 203,
    designs: 50,
    fileSize: "198 MB",
  },
];

export const ALL_PRODUCTS: Product[] = [...PRODUCTS, ...BUNDLES];

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return PRODUCTS.slice(0, count);
  const sameCategory = ALL_PRODUCTS.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const others = ALL_PRODUCTS.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function getDiscountPercent(p: Product): number | null {
  if (!p.originalPrice || p.originalPrice <= p.price) return null;
  return Math.round((1 - p.price / p.originalPrice) * 100);
}

export const BADGE_STYLES: Record<ProductBadge, string> = {
  sale: "bg-[#c8102e] text-white",
  best: "bg-[#16a34a] text-white",
  new: "bg-[#16a34a] text-white",
};

export const BADGE_LABELS: Record<ProductBadge, string> = {
  sale: "SALE",
  best: "BEST SELLER",
  new: "NEW",
};
