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
  {
    slug: "classic-font-pack",
    name: "Classic Font Pack",
    category: "fonts",
    categoryLabel: "Embroidery Fonts",
    price: 25.99,
    originalPrice: 49.99,
    image: "/images/store/fonts.jpg",
    badge: "sale",
    tagline: "Timeless serif and sans-serif fonts for monograms and text embroidery.",
    description:
      "The Classic Font Pack brings together 150+ timeless embroidery fonts covering elegant serifs, clean sans-serifs, and decorative scripts. Every glyph is hand-digitized for clean stitch-out on caps, left-chest, and jacket-back placements. Multiple sizes (0.5\", 1\", 2\", 3\") are included so you can match the design to the garment without re-digitizing. Ships with a lifetime commercial license and free updates whenever we add new fonts to the pack.",
    features: [
      "150+ hand-digitized fonts in multiple sizes",
      "Clean stitch-out on caps, left chest & jacket backs",
      "Sizes included: 0.5\", 1\", 2\", 3\" tall",
      "Lifetime commercial license included",
      "Free updates whenever new fonts are added",
    ],
    includes: [
      "150+ font files in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "PDF catalog with font previews",
      "Commercial license PDF",
      "Installation & sizing guide",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 214,
    designs: 150,
    fileSize: "245 MB",
  },
  {
    slug: "animal-embroidery-pack",
    name: "Animal Embroidery Pack",
    category: "animal",
    categoryLabel: "Animal Designs",
    price: 14.99,
    originalPrice: 24.99,
    image: "/images/store/animal.jpg",
    badge: "best",
    tagline: "20 realistic and stylized animal designs for jackets, backs, and patches.",
    description:
      "A curated set of 20 animal embroidery designs ranging from realistic wildlife portraits to stylized mascots. Each design is optimized for a 4x4 hoop and tested on multiple fabric types. Stitch counts are kept reasonable so even dense designs run smoothly on home machines. Perfect for jacket backs, patches, and statement pieces.",
    features: [
      "20 animal designs — realistic & stylized",
      "Fits 4x4 inch hoops (100x100 mm)",
      "Tested on cotton, denim, fleece & cap frames",
      "Optimized stitch counts for home machines",
      "Includes mirrored and reversed variants",
    ],
    includes: [
      "20 designs in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Thread color charts (Madeira & Robison-Anton)",
      "Hoop placement guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 187,
    designs: 20,
    fileSize: "78 MB",
  },
  {
    slug: "patch-bundle-pack",
    name: "Patch Bundle Pack",
    category: "patches",
    categoryLabel: "Patch Collections",
    price: 19.99,
    originalPrice: 34.99,
    image: "/images/store/patch_bundle.jpg",
    badge: "sale",
    tagline: "50 premium patch designs — ready to stitch on twill, felt, or directly onto garments.",
    description:
      "50 of our best-selling patch designs bundled together at a steep discount. Includes military, biker, sports, and outdoors themes with clean satin borders that make appliqué or merrow-edge finishing a breeze. Every patch comes with a stitch-map PDF so your finisher knows exactly where the border runs.",
    features: [
      "50 patch designs across 4 themes",
      "Clean satin borders ready for merrow or laser cut",
      "Includes stitch-map PDF for each patch",
      "Works on twill, felt, fleece & direct-to-garment",
      "Lifetime commercial license",
    ],
    includes: [
      "50 designs in DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Stitch-map PDFs for finishing",
      "Thread color charts",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.7,
    reviewCount: 142,
    designs: 50,
    fileSize: "156 MB",
  },
  {
    slug: "sports-logo-pack",
    name: "Sports Logo Pack",
    category: "sports",
    categoryLabel: "Sports Logos",
    price: 24.99,
    originalPrice: 39.99,
    image: "/images/store/sports.png",
    badge: "new",
    tagline: "30 bold sports team logos engineered for caps, jerseys, and jacket backs.",
    description:
      "30 high-impact sports logo designs built specifically for embroidery. Bold fills, clean outlines, and color-blocked sections make these logos pop on jerseys, caps, and jacket backs. Each logo is provided in three sizes (left-chest, cap, full-back) so you can use the same artwork across an entire team kit.",
    features: [
      "30 sports logos in 3 sizes each",
      "Three sizes: left chest, cap, full back",
      "Color-blocked for clean embroidery fills",
      "Tested on polyester, mesh & fleece",
      "Commercial license for team decoration",
    ],
    includes: [
      "30 logos × 3 sizes = 90 files",
      "Formats: DST, PES, EXP, JEF, HUS, VP3, XXX",
      "Team color variant guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 96,
    designs: 30,
    fileSize: "184 MB",
  },
  {
    slug: "floral-design-collection",
    name: "Floral Design Collection",
    category: "floral",
    categoryLabel: "Floral Designs",
    price: 12.99,
    image: "/images/store/floral.jpg",
    tagline: "Delicate floral sprays and borders for monograms, hemlines, and yokes.",
    description:
      "A romantic collection of 25 floral designs — sprays, borders, and standalone blooms — digitized for fine-fabric embroidery. Light density and smooth underlay make these safe for linen, lawn, and silk. Use them as standalone motifs, frame a monogram, or run a border along a hemline.",
    features: [
      "25 floral sprays, borders & standalone blooms",
      "Low-density digitizing for fine fabrics",
      "Fits 4x4 and 5x7 hoops",
      "Smooth underlay prevents puckering on linen",
      "Commercial license",
    ],
    includes: [
      "25 designs in 7 formats",
      "Hoop placement guide",
      "Thread charts (Madeira)",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.6,
    reviewCount: 58,
    designs: 25,
    fileSize: "62 MB",
  },
  {
    slug: "mascot-character-pack",
    name: "Mascot Character Pack",
    category: "mascot",
    categoryLabel: "Mascot Characters",
    price: 18.99,
    originalPrice: 29.99,
    image: "/images/store/mascot.jpg",
    badge: "sale",
    tagline: "20 bold mascot characters for schools, teams, and brand identities.",
    description:
      "20 mascot characters built for high-visibility embroidery — eagles, lions, wolves, knights, and more. Heavy satin fills and bold outlines make these designs read clearly even at cap size. Perfect for school spirit wear, team jerseys, and branded merchandise. Each mascot comes with a small (cap) and large (jacket back) variant.",
    features: [
      "20 mascot characters in 2 sizes",
      "Bold satin fills for high visibility",
      "Includes cap and jacket-back sizes",
      "Color charts for popular thread brands",
      "Commercial license",
    ],
    includes: [
      "20 mascots × 2 sizes = 40 files",
      "7 embroidery formats each",
      "Color charts (Madeira & Robison-Anton)",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.7,
    reviewCount: 73,
    designs: 20,
    fileSize: "128 MB",
  },
  {
    slug: "vintage-logo-bundle",
    name: "Vintage Logo Bundle",
    category: "vintage",
    categoryLabel: "Vintage Logos",
    price: 16.99,
    image: "/images/store/vintage.jpg",
    tagline: "18 retro badge-style logos for apparel brands and small businesses.",
    description:
      "18 vintage badge-style logos that look hand-stitched — complete with faux-distress textures, ribbon banners, and aged fills. These designs are perfect for apparel brands, breweries, coffee shops, and barbershops looking for that heritage look. Light distressing is achieved through stitch spacing rather than thread color, so the texture holds up wash after wash.",
    features: [
      "18 vintage badge logos",
      "Faux-distress texture via stitch spacing",
      "Includes ribbon banner variants",
      "Fits 5x7 hoops",
      "Commercial license",
    ],
    includes: [
      "18 designs in 7 formats",
      "Distress variation guide",
      "Thread color charts",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.6,
    reviewCount: 41,
    designs: 18,
    fileSize: "94 MB",
  },
  {
    slug: "monogram-initials-set",
    name: "Monogram Initials Set",
    category: "monogram",
    categoryLabel: "Monogram Sets",
    price: 9.99,
    image: "/images/store/monogram.jpg",
    badge: "new",
    tagline: "Full A-Z monogram alphabets in 3 styles — vine, block, and circle.",
    description:
      "A complete monogram solution: three full A-Z alphabets in vine, block, and circle styles. Mix and match to create three-letter monograms for towels, robes, linens, and gifts. Every letter is digitized for 2-inch and 3-inch finished sizes, with clean satins that hold their shape on terry cloth and cotton.",
    features: [
      "3 full A-Z alphabets — vine, block & circle",
      "2 sizes per letter (2\" and 3\")",
      "Clean satin stitching holds on terry cloth",
      "Mix styles for three-letter monograms",
      "Commercial license",
    ],
    includes: [
      "78 letter files (26 × 3 styles)",
      "2 sizes each = 156 total files",
      "7 embroidery formats",
      "Monogram layout guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 112,
    designs: 78,
    fileSize: "112 MB",
  },
];

export const BUNDLES: Product[] = [
  {
    slug: "font-mega-pack",
    name: "Font Mega Pack",
    category: "fonts",
    categoryLabel: "Embroidery Fonts",
    price: 39.99,
    originalPrice: 79.99,
    image: "/images/store/fonts.jpg",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 50,
    tagline: "500+ premium embroidery fonts — every font we sell, in one pack.",
    description:
      "Our complete font library: 500+ embroidery fonts covering every style — serif, sans-serif, script, display, monogram, and decorative. Every font is hand-digitized in multiple sizes and ships with a lifetime commercial license. This is the most cost-effective way to get every font we offer, and updates are free for life.",
    features: [
      "500+ embroidery fonts in every style",
      "Multiple sizes per font (0.5\" to 4\")",
      "Hand-digitized for clean stitch-out",
      "Lifetime commercial license",
      "Free lifetime updates",
    ],
    includes: [
      "500+ font files in 7 formats",
      "PDF catalog with previews",
      "Commercial license PDF",
      "Sizing & installation guide",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 287,
    designs: 500,
    fileSize: "620 MB",
  },
  {
    slug: "patch-bundle-pro",
    name: "Patch Bundle Pro",
    category: "patches",
    categoryLabel: "Patch Collections",
    price: 29.99,
    originalPrice: 42.99,
    image: "/images/store/patch_bundle.jpg",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 30,
    tagline: "100+ patch designs — every patch in our catalog, one low price.",
    description:
      "100+ patch designs spanning military, biker, sports, outdoors, and brand-identity themes. Every patch comes with stitch-map PDFs for clean finishing and is optimized for both twill appliqué and direct-to-garment stitching. A massive value for shops that do a lot of patch work.",
    features: [
      "100+ patch designs across 6 themes",
      "Stitch-map PDF for every patch",
      "Works on twill, felt & direct-to-garment",
      "Clean satin borders for easy finishing",
      "Commercial license",
    ],
    includes: [
      "100+ designs in 7 formats",
      "Stitch-map PDFs",
      "Thread color charts",
      "Finishing guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 156,
    designs: 100,
    fileSize: "312 MB",
  },
  {
    slug: "animal-design-mega-pack",
    name: "Animal Design Mega Pack",
    category: "animal",
    categoryLabel: "Animal Designs",
    price: 34.99,
    originalPrice: 58.99,
    image: "/images/store/animal.jpg",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 40,
    tagline: "200+ animal embroidery designs — from realistic portraits to stylized mascots.",
    description:
      "200+ animal designs covering every category — realistic wildlife, stylized mascots, cute cartoon critters, and tribal-style silhouettes. Each design is tested on multiple fabrics and hoop sizes. Perfect for shops that need a deep library of animal artwork for jackets, patches, and kids' apparel.",
    features: [
      "200+ animal designs",
      "Realistic, stylized, cartoon & tribal styles",
      "Multiple hoop sizes per design",
      "Tested on cotton, denim, fleece & caps",
      "Commercial license",
    ],
    includes: [
      "200+ designs in 7 formats",
      "Thread color charts",
      "Hoop placement guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.8,
    reviewCount: 198,
    designs: 200,
    fileSize: "428 MB",
  },
  {
    slug: "sports-logo-bundle",
    name: "Sports Logo Bundle",
    category: "sports",
    categoryLabel: "Sports Logos",
    price: 44.99,
    originalPrice: 69.99,
    image: "/images/store/sports.png",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 35,
    tagline: "150+ sports team logos across every major sport — ready to decorate.",
    description:
      "150+ bold sports logos covering football, basketball, baseball, hockey, soccer, and esports. Each logo comes in cap, left-chest, and full-back sizes. Color-blocked fills and clean outlines make these logos stitch cleanly even on challenging fabrics like polyester mesh.",
    features: [
      "150+ sports logos across 6 sports",
      "3 sizes per logo (cap, chest, back)",
      "Color-blocked for clean fills",
      "Tested on polyester mesh & fleece",
      "Commercial license for team decoration",
    ],
    includes: [
      "150+ logos × 3 sizes = 450+ files",
      "7 embroidery formats each",
      "Team color variant guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.7,
    reviewCount: 124,
    designs: 150,
    fileSize: "510 MB",
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
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = ALL_PRODUCTS.filter(
    (p) => p.slug !== slug && p.category !== current.category
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
