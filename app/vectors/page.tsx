import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesCTA from "@/components/ServicesCTA";
import Stats from "@/components/Stats";
import TiltCard from "@/components/TiltCard";
import {
  Clock,
  IconByName,
  type IconName,
  Plus,
  Refresh,
  ShieldCheck,
  Star,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Vector Art | Vesper Digitizing",
  description:
    "Raster to Vector Art logo vectorization, clip art, illustrations, and custom vector art. Scalable, print-ready vector files in any format.",
};

const VECTOR_TYPES = [
  {
    icon: "penTool" as IconName,
    title: "Logo Vectorization",
    desc: "Convert your raster logo (PNG, JPG) into a crisp, scalable vector. Perfect for print, signage, embroidery and web never pixelates at any size.",
  },
  {
    icon: "layers" as IconName,
    title: "Raster to Vector",
    desc: "Any image photo, sketch, screenshot converted to clean vector paths. No more pixelation, no more quality loss when scaling up.",
  },
  {
    icon: "sparkles" as IconName,
    title: "Clip Art Conversion",
    desc: "Turn low-res clip art into high-quality vectors. Clean lines, smooth curves, ready for commercial use without licensing worries.",
  },
  {
    icon: "penTool" as IconName,
    title: "Illustration Vectors",
    desc: "Hand-drawn illustrations traced into editable vector art. Keep the hand-drawn feel with infinite scalability for any application.",
  },
  {
    icon: "shirt" as IconName,
    title: "Apparel Vector Art",
    desc: "Vector artwork optimized for screen printing, DTG, and heat transfer. Color-separated and print-ready for production.",
  },
  {
    icon: "patch" as IconName,
    title: "Embroidery Vectors",
    desc: "Vector files prepped for embroidery digitizing stitch paths, underlay, and pull-compensation built in from the start.",
  },
];

const FORMATS = [
  { label: "AI", desc: "Adobe Illustrator" },
  { label: "EPS", desc: "Universal vector" },
  { label: "SVG", desc: "Web & scalable" },
  { label: "PDF", desc: "Print-ready" },
  { label: "CDR", desc: "CorelDRAW" },
  { label: "DXF", desc: "CAD / cutting" },
];

const USE_CASES = [
  { label: "Print", desc: "Business cards, flyers, banners" },
  { label: "Signage", desc: "Storefronts, vehicle wraps, billboards" },
  { label: "Apparel", desc: "Screen print, DTG, heat transfer" },
  { label: "Web", desc: "Logos, icons, SVG animations" },
  { label: "Embroidery", desc: "Digitizing-ready vector files" },
  { label: "Laser/CNC", desc: "Cutting paths for production" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    icon: "upload" as IconName,
    title: "Upload Image",
    desc: "Send your raster image PNG, JPG, photo, sketch. We accept any resolution and format.",
  },
  {
    num: "02",
    icon: "search" as IconName,
    title: "Image Analysis",
    desc: "Our vector artists analyze the image for complexity, colors, and the best tracing approach.",
  },
  {
    num: "03",
    icon: "penTool" as IconName,
    title: "Manual Tracing",
    desc: "We manually trace every path no auto-tracing. Clean curves, precise anchor points, perfect symmetry.",
  },
  {
    num: "04",
    icon: "shieldCheck" as IconName,
    title: "Proof & Revise",
    desc: "You receive a side-by-side proof. Free unlimited revisions until the vector matches perfectly.",
  },
  {
    num: "05",
    icon: "send" as IconName,
    title: "Format Delivery",
    desc: "Final files delivered in AI, EPS, SVG, PDF, and more all formats included, no extra charge.",
  },
];

const WHY = [
  {
    icon: "diamond" as IconName,
    title: "Manual Tracing",
    desc: "Every vector is hand-traced by a human artist no auto-trace artifacts, no jagged edges.",
  },
  {
    icon: "zap" as IconName,
    title: "24h Turnaround",
    desc: "Most vector files delivered within 24 hours. Rush delivery available for +30%.",
  },
  {
    icon: "refresh" as IconName,
    title: "Free Revisions",
    desc: "Unlimited revisions until the vector is exactly right. No extra charges, no limits.",
  },
  {
    icon: "shieldCheck" as IconName,
    title: "Print-Ready",
    desc: "Every file is production-ready proper color modes, clean paths, optimized for your use case.",
  },
  {
    icon: "tag" as IconName,
    title: "Flat Pricing",
    desc: "Transparent per-image pricing. No setup fees, no hidden costs. Simple and fair.",
  },
  {
    icon: "globe" as IconName,
    title: "All Formats",
    desc: "AI, EPS, SVG, PDF, CDR, DXF delivered in one zip. Need a specific format? Just ask.",
  },
];

const FAQS = [
  {
    q: "What's the difference between raster and vector?",
    a: "Raster images (PNG, JPG) are made of pixels they pixelate when scaled up. Vectors (AI, EPS, SVG) are made of mathematical paths they scale infinitely without quality loss. If you need your logo on a business card AND a billboard, you need a vector.",
  },
  {
    q: "Can you convert any image to vector?",
    a: "Yes. We convert logos, photos, sketches, screenshots, clip art, hand-drawn illustrations, and more. The complexity of the source image affects turnaround time, but we can handle anything from a simple logo to a detailed illustration.",
  },
  {
    q: "Do you use auto-tracing software?",
    a: "No. Every vector is manually traced by a human artist using Adobe Illustrator. Auto-tracing produces jagged edges, too many anchor points, and imperfect curves. Manual tracing ensures clean, smooth, production-ready paths.",
  },
  {
    q: "What file formats do I receive?",
    a: "You receive all major vector formats in a single zip file: AI (Adobe Illustrator), EPS (universal), SVG (web), PDF (print), CDR (CorelDRAW), and DXF (CAD). Need a specific format? Just let us know we deliver it at no extra cost.",
  },
  {
    q: "How long does Vector Art take?",
    a: "Standard turnaround is 24 hours for most images. Simple logos are often delivered same-day. Complex illustrations may take 48 hours. Rush delivery (under 12 hours) is available for +30%.",
  },
  {
    q: "Can you color-separate for screen printing?",
    a: "Yes. We deliver print-ready vector files with proper color separation for screen printing, DTG, and heat transfer. Specify your print method at checkout and we'll optimize the file accordingly including halftones, underbases, and trap if needed.",
  },
];

export default function VectorsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO - Using Hero.tsx component */}
        <Hero
          badge="Vector Art Services"
          badgeType="dot"
          title="Vectors That Never Pixelate"
          titleHighlight="Never Pixelate"
          description="Convert any raster image logos, photos, sketches, clip art into clean, scalable vector files. Print at any size without losing quality."
          image="/images/vectorHero1.png"
          imageAlt="Vector Art Services"
          useBackgroundImage={false}
          ctaButtons={[
            { text: "Start Your Project", href: "/contact", variant: "solid" },
            { text: "View Portfolio", href: "/portfolio", variant: "outline" },
          ]}
          badges={[
            {
              icon: ShieldCheck,
              title: "Crisp Vector Paths",
              sub: "Clean nodes with no jagged edges",
            },
            {
              icon: Refresh,
              title: "High-Res Formats",
              sub: "AI, EPS, SVG & Print-Ready PDF",
            },
            {
              icon: Clock,
              title: "Urgent Vectorization",
              sub: "Redrawn manually within a few hours",
            },
            {
              icon: Star,
              title: "Manual Redrawing",
              sub: "No auto-tracing, 100% hand-drawn precision",
            },
          ]}
          showStatsCard={true}
          statsCardValue={5000}
          statsCardSuffix="+"
          statsCardLabel="Completed Projects"
        />

        {/* VECTOR TYPES */}
        <section id="types" className="bg-[#f5f5f5] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Vector Services"
                title="Every Vector Type You Need"
                subtitle="From logo vectorization to complex illustrations we handle every conversion with precision and care."
              />
            </ScrollReveal>
            <ScrollReveal
              stagger
              className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {VECTOR_TYPES.map((v) => {
                const Icon = IconByName[v.icon];
                return (
                  <TiltCard key={v.title} max={6}>
                    <article className="group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl cursor-pointer">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 transition-all duration-500 group-hover:from-[#c8102e]/5 group-hover:to-transparent"
                      />
                      <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]">
                        <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      </span>
                      <h3 className="relative font-display text-lg font-bold text-[#1a1a1a]">
                        {v.title}
                      </h3>
                      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[#6b7280]">
                        {v.desc}
                      </p>
                      <span
                        aria-label={`Learn more about ${v.title}`}
                        className="relative mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#1a1a1a] transition-all duration-300 group-hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white hover:rotate-90"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </article>
                  </TiltCard>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* FORMATS + USE CASES */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <ScrollReveal>
                  <SectionHeading
                    align="left"
                    eyebrow="Output Formats"
                    title="Delivered In Any Format"
                    subtitle="Every major vector format included at no extra charge."
                  />
                </ScrollReveal>
                <ScrollReveal stagger className="mt-8 grid grid-cols-2 gap-4">
                  {FORMATS.map((f) => (
                    <div
                      key={f.label}
                      className="group rounded-xl border border-[#e5e7eb] bg-white p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-xl"
                    >
                      <div className="font-display text-lg font-bold text-[#1a1a1a] transition-colors group-hover:text-[#c8102e]">
                        {f.label}
                      </div>
                      <p className="mt-1 text-xs text-[#6b7280]">{f.desc}</p>
                    </div>
                  ))}
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal>
                  <SectionHeading
                    align="left"
                    eyebrow="Use Cases"
                    title="Ready For Anything"
                    subtitle="Vectors optimized for every application you can imagine."
                  />
                </ScrollReveal>
                <ScrollReveal stagger className="mt-8 space-y-3">
                  {USE_CASES.map((u) => (
                    <div
                      key={u.label}
                      className="group flex items-center justify-between rounded-xl border border-[#e5e7eb] bg-white px-5 py-3 transition-all duration-300 hover:border-[#c8102e]/40 hover:bg-[#c8102e]/5"
                    >
                      <span className="font-display text-sm font-bold text-[#1a1a1a]">
                        {u.label}
                      </span>
                      <span className="text-xs text-[#6b7280]">{u.desc}</span>
                    </div>
                  ))}
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#f5f5f5] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Our Process"
                title="From Raster to Vector"
                subtitle="A streamlined five-step workflow that converts your images into perfect vector files."
              />
            </ScrollReveal>
            <div className="relative mt-14">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent lg:block"
              />
              <ScrollReveal stagger>
                <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
                  {PROCESS_STEPS.map((step) => {
                    const Icon = IconByName[step.icon];
                    return (
                      <li
                        key={step.num}
                        className="group relative flex list-none flex-col items-center text-center"
                      >
                        <span className="pointer-events-none absolute top-0 h-14 w-14 rounded-full bg-[#c8102e]/0 blur-md transition-all duration-500 group-hover:bg-[#c8102e]/30 group-hover:scale-150" />
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-2 ring-[#c8102e] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(200,16,46,0.6)]">
                          <Icon className="h-6 w-6 text-[#c8102e]" />
                          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#c8102e] text-[10px] font-bold text-white shadow-md">
                            {step.num}
                          </span>
                        </div>
                        <h3 className="relative mt-5 font-display text-sm font-bold text-[#1a1a1a] sm:text-base">
                          {step.title}
                        </h3>
                        <p className="relative mt-2 max-w-[10rem] text-xs leading-relaxed text-[#6b7280]">
                          {step.desc}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="relative bg-[#1a1a1a] py-16 sm:py-24 dark-mesh noise-overlay">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Why Choose Vesper?"
                title="The Vector Experts"
                subtitle="We've converted thousands of images for brands, printers, embroiderers, and designers worldwide."
                light
              />
            </ScrollReveal>
            <ScrollReveal
              stagger
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            >
              {WHY.map((f) => {
                const Icon = IconByName[f.icon];
                return (
                  <div
                    key={f.title}
                    className="group relative flex flex-col items-start overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-5 py-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_-15px_rgba(200,16,46,0.3)]"
                  >
                    <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 opacity-0 blur-md transition-opacity duration-500 group-hover:from-[#c8102e]/15 group-hover:to-transparent group-hover:opacity-100" />
                    <span className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="relative text-sm font-bold uppercase tracking-wider text-white">
                      {f.title}
                    </div>
                    <div className="relative mt-2 text-xs leading-relaxed text-white/60">
                      {f.desc}
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        <Stats />

        {/* FAQ */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Vector Questions"
                subtitle="Everything you need to know about our vector services. Can't find an answer? Contact us."
              />
            </ScrollReveal>
            <ScrollReveal stagger className="mt-10 space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-[#e5e7eb] bg-white px-5 py-4 transition-all duration-300 hover:border-[#c8102e]/30 hover:shadow-md [&_summary]:list-none"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#1a1a1a]">
                      {faq.q}
                    </span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] text-[#c8102e] transition-transform duration-300 group-open:rotate-45">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
