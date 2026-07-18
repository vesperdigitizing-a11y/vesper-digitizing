import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesCTA from "@/components/ServicesCTA";
import Stats from "@/components/Stats";
import TiltCard from "@/components/TiltCard";
import { IconByName, type IconName, Plus, ArrowRight, Clock, Refresh, ShieldCheck, Globe, Star } from "@/components/icons";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Patches | Vesper Digitizing",
  description:
    "Custom Patches — merrow border, laser cut, woven, chenille, PVC and iron-on patches in any shape or size. Fast turnaround, unlimited revisions.",
};

const PATCH_TYPES = [
  {
    icon: "patch" as IconName,
    title: "Merrow Border Patches",
    desc: "Classic overlocked edge with a raised thread border. The traditional patch look — durable, clean, and timeless. Best for simple shapes like circles, squares, and rectangles.",
  },
  {
    icon: "layers" as IconName,
    title: "Laser Cut Patches",
    desc: "Precision laser-cut edges for intricate shapes that merrow can't achieve. Perfect for detailed logos, custom outlines, and die-cut designs with tight corners.",
  },
  {
    icon: "patch" as IconName,
    title: "Woven Patches",
    desc: "Fine thread woven patches with photographic detail. Smaller text and tighter details than embroidered patches. Ideal for badges and uniform insignia.",
  },
  {
    icon: "cube" as IconName,
    title: "Chenille Patches",
    desc: "Fuzzy, raised chenille yarn for varsity letters and mascot patches. The classic letterman jacket look — bold, textured, and nostalgic.",
  },
  {
    icon: "sparkles" as IconName,
    title: "PVC Patches",
    desc: "Rubber-like PVC patches for tactical gear, outdoor equipment and apparel that takes a beating. Waterproof, fade-proof, and virtually indestructible.",
  },
  {
    icon: "shirt" as IconName,
    title: "Iron-On Patches",
    desc: "Heat-seal backing for easy at-home application. Just press with an iron for 30 seconds — no sewing required. Permanent bond that survives the wash.",
  },
];

const BACKINGS = [
  { label: "Iron-On", desc: "Heat-seal backing for fabric" },
  { label: "Sew-On", desc: "Stitched directly onto garment" },
  { label: "Velcro", desc: "Hook-and-loop, removable" },
  { label: "Adhesive", desc: "Peel-and-stick, temporary" },
];

const SIZES = [
  { size: `1" – 2"`, desc: "Small cap and collar patches" },
  { size: `2" – 3"`, desc: "Standard left-chest size" },
  { size: `3" – 4"`, desc: "Medium jacket and bag patches" },
  { size: `4" – 6"`, desc: "Large back and banner patches" },
  { size: `6"+`, desc: "Oversized and custom shapes" },
];

const PROCESS_STEPS = [
  { num: "01", icon: "upload" as IconName, title: "Send Your Design", desc: "Upload your logo, sketch, or reference image in any format — we accept them all." },
  { num: "02", icon: "search" as IconName, title: "Design Review", desc: "Our digitizers analyze your artwork and recommend the best patch type, size, and backing." },
  { num: "03", icon: "penTool" as IconName, title: "Digitizing", desc: "We map every stitch path, density, and color stop with precision for clean production." },
  { num: "04", icon: "shieldCheck" as IconName, title: "Proof & Approve", desc: "You receive a digital proof simulation. Free unlimited revisions until it's exactly right." },
  { num: "05", icon: "send" as IconName, title: "Production Files", desc: "Final files delivered in DST, PES, JEF, and more — ready for any embroidery machine." },
];

const WHY = [
  { icon: "diamond" as IconName, title: "Stitch Quality", desc: "Tight, clean stitches with proper density and underlay — no gaps, no puckering." },
  { icon: "zap" as IconName, title: "24h Turnaround", desc: "Most patch files delivered within 24 hours. Rush available for +30%." },
  { icon: "refresh" as IconName, title: "Free Revisions", desc: "Unlimited revisions until the proof matches your vision. No extra charges, ever." },
  { icon: "shieldCheck" as IconName, title: "Wash-Tested", desc: "Every patch design is validated for 50+ wash cycles. Durability guaranteed." },
  { icon: "tag" as IconName, title: "Flat Pricing", desc: "Transparent per-design pricing. No setup fees, no hidden costs, no surprises." },
  { icon: "globe" as IconName, title: "Worldwide Shipping", desc: "We ship physical patches to 45+ countries. Digital files delivered instantly." },
];

const FAQS = [
  { q: "What's the minimum order quantity for patches?", a: "For digital Patches files, there's no minimum — even a single design is fine. For physical patch manufacturing, the minimum is typically 50 pieces. Contact us for exact pricing based on your quantity, size, and backing type." },
  { q: "How long does Patches take?", a: "Standard turnaround is 24 hours for the digitized file. If you need it faster, rush delivery (under 12 hours) is available for an additional 30% fee. Physical patch manufacturing takes 7–10 business days after file approval." },
  { q: "What file formats do you deliver?", a: "We deliver all major embroidery formats: DST (standard), PES (Brother), JEF (Janome), EXP, VP3, and XXX. You'll receive all formats in a single zip file — specify your machine at checkout or we send the full set." },
  { q: "Can you match my brand colors exactly?", a: "Yes. We use Madeira + Isacord polyester thread in 380+ colors and cross-reference your brand PMS/HEX codes against physical thread charts under daylight-balanced bulbs. Color matching is included at no extra cost." },
  { q: "What's the difference between embroidered and woven patches?", a: "Embroidered patches have raised stitching on a twill backing — thicker, more tactile, and the classic patch look. Woven patches are made entirely from thread woven together — flatter, allows finer detail and smaller text, and feels smoother. We help you pick the right one for your design." },
  { q: "Do you offer physical patch manufacturing too?", a: "Yes — we handle the full process from digitizing to manufacturing. After you approve the digital proof, we produce the physical patches in your chosen type (merrow, laser-cut, woven, chenille, PVC), size, and backing. Minimum 50 pieces." },
];

export default function PatchesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white bg-right bg-cover bg-no-repeat hero-mesh lg:bg-center" style={{ backgroundImage: "url(/images/serviceHero.png)" }}>
          <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#c8102e]/10 blur-3xl animate-float" />
          <div aria-hidden className="absolute inset-0 z-0 lg:hidden" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.80) 50%, rgba(255,255,255,0.40) 65%, rgba(255,255,255,0.0) 80%)" }} />
          <div aria-hidden className="absolute inset-0 z-0 lg:hidden" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.80) 50%, rgba(255,255,255,0.92) 100%)" }} />

          <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-8 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-20 lg:pb-28 lg:px-8">
            <div className="flex flex-col items-start">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#c8102e]/20 bg-[#c8102e]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e] backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8102e] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
                  </span>
                  Custom Patch Design
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] text-balance sm:text-5xl lg:text-5xl">
                  Patches That <br className="hidden sm:block" />
                  <span className="text-gradient">Stand Out</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a]/80 sm:text-lg">
                  From merrow borders to laser-cut, woven, chenille and PVC — we digitize patches in any shape, size, or backing. Wash-tested up to 50 cycles, shipped worldwide.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#quote" className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)]">
                    Get Free Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a href="#types" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-[#1a1a1a] bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white">
                    Explore Types
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal stagger delay={400} className="mt-8 w-full">
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 max-w-md sm:gap-x-6">
                  {[{ icon: Clock, title: "24 Hours", sub: "Delivery" }, { icon: ShieldCheck, title: "100% Quality", sub: "Guaranteed" }, { icon: Refresh, title: "Unlimited", sub: "Revisions" }, { icon: Globe, title: "Worldwide", sub: "Shipping" }].map((b) => (
                    <div key={b.title} className="group flex items-start gap-1.5 sm:gap-2">
                      <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                      <div className="leading-tight">
                        <div className="whitespace-nowrap text-[10px] font-bold text-[#1a1a1a] sm:text-xs">{b.title}</div>
                        <div className="whitespace-nowrap text-[10px] text-[#6b7280] sm:text-xs">{b.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="scale" delay={500} className="relative hidden lg:block">
              <div className="absolute bottom-0 right-0 z-20 flex items-center gap-3 rounded-xl bg-white/95 px-5 py-4 shadow-2xl ring-1 ring-[#e5e7eb] backdrop-blur animate-float">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e]"><Star className="h-6 w-6" /></span>
                <div>
                  <div className="text-2xl font-extrabold text-[#c8102e] font-display"><AnimatedCounter value={2500} suffix="+" /></div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-[#6b7280]">Patches Delivered</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PATCH TYPES */}
        <section id="types" className="bg-[#f5f5f5] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <SectionHeading eyebrow="Patch Types" title="Every Patch Style Imaginable" subtitle="Choose the construction that fits your design, garment, and budget." />
            </ScrollReveal>
            <ScrollReveal stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PATCH_TYPES.map((p) => {
                const Icon = IconByName[p.icon];
                return (
                  <TiltCard key={p.title} max={6}>
                    <article className="group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl cursor-pointer">
                      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 transition-all duration-500 group-hover:from-[#c8102e]/5 group-hover:to-transparent" />
                      <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)]">
                        <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      </span>
                      <h3 className="relative font-display text-lg font-bold text-[#1a1a1a]">{p.title}</h3>
                      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[#6b7280]">{p.desc}</p>
                      <span aria-label={`Learn more about ${p.title}`} className="relative mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#1a1a1a] transition-all duration-300 group-hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white hover:rotate-90">
                        <Plus className="h-4 w-4" />
                      </span>
                    </article>
                  </TiltCard>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* BACKINGS + SIZES */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <ScrollReveal><SectionHeading align="left" eyebrow="Backing Options" title="How Will You Attach It?" subtitle="Every patch comes with your choice of backing." /></ScrollReveal>
                <ScrollReveal stagger className="mt-8 grid grid-cols-2 gap-4">
                  {BACKINGS.map((b) => (
                    <div key={b.label} className="group rounded-xl border border-[#e5e7eb] bg-white p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-xl">
                      <div className="font-display text-lg font-bold text-[#1a1a1a] transition-colors group-hover:text-[#c8102e]">{b.label}</div>
                      <p className="mt-1 text-xs text-[#6b7280]">{b.desc}</p>
                    </div>
                  ))}
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal><SectionHeading align="left" eyebrow="Patch Sizes" title="Any Size You Need" subtitle="From tiny collar patches to oversized back banners." /></ScrollReveal>
                <ScrollReveal stagger className="mt-8 space-y-3">
                  {SIZES.map((s) => (
                    <div key={s.size} className="group flex items-center justify-between rounded-xl border border-[#e5e7eb] bg-white px-5 py-3 transition-all duration-300 hover:border-[#c8102e]/40 hover:bg-[#c8102e]/5">
                      <span className="font-display text-sm font-bold text-[#1a1a1a]">{s.size}</span>
                      <span className="text-xs text-[#6b7280]">{s.desc}</span>
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
            <ScrollReveal><SectionHeading eyebrow="Our Process" title="From Design to Production" subtitle="A streamlined five-step workflow that turns your artwork into production-ready patch files." /></ScrollReveal>
            <div className="relative mt-14">
              <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#c8102e]/40 to-transparent lg:block" />
              <ScrollReveal stagger>
                <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
                  {PROCESS_STEPS.map((step) => {
                    const Icon = IconByName[step.icon];
                    return (
                      <li key={step.num} className="group relative flex list-none flex-col items-center text-center">
                        <span className="pointer-events-none absolute top-0 h-14 w-14 rounded-full bg-[#c8102e]/0 blur-md transition-all duration-500 group-hover:bg-[#c8102e]/30 group-hover:scale-150" />
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-2 ring-[#c8102e] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(200,16,46,0.6)]">
                          <Icon className="h-6 w-6 text-[#c8102e]" />
                          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#c8102e] text-[10px] font-bold text-white shadow-md">{step.num}</span>
                        </div>
                        <h3 className="relative mt-5 font-display text-sm font-bold text-[#1a1a1a] sm:text-base">{step.title}</h3>
                        <p className="relative mt-2 max-w-[10rem] text-xs leading-relaxed text-[#6b7280]">{step.desc}</p>
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
            <ScrollReveal><SectionHeading eyebrow="Why Choose Vesper?" title="The Patch Experts" subtitle="We've digitized thousands of patches for brands, teams, military, and businesses worldwide." light /></ScrollReveal>
            <ScrollReveal stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {WHY.map((f) => {
                const Icon = IconByName[f.icon];
                return (
                  <div key={f.title} className="group relative flex flex-col items-start overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-5 py-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_-15px_rgba(200,16,46,0.3)]">
                    <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/0 opacity-0 blur-md transition-opacity duration-500 group-hover:from-[#c8102e]/15 group-hover:to-transparent group-hover:opacity-100" />
                    <span className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e]/15 text-[#c8102e] ring-1 ring-[#c8102e]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="relative text-sm font-bold uppercase tracking-wider text-white">{f.title}</div>
                    <div className="relative mt-2 text-xs leading-relaxed text-white/60">{f.desc}</div>
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
            <ScrollReveal><SectionHeading eyebrow="FAQ" title="Patches Questions" subtitle="Everything you need to know before ordering. Can't find an answer? Contact us." /></ScrollReveal>
            <ScrollReveal stagger className="mt-10 space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-[#e5e7eb] bg-white px-5 py-4 transition-all duration-300 hover:border-[#c8102e]/30 hover:shadow-md [&_summary]:list-none">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#1a1a1a]">{faq.q}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] text-[#c8102e] transition-transform duration-300 group-open:rotate-45">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{faq.a}</p>
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
