import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Phone } from "./icons";

export default function CTA() {
  return (
    <section id="quote" className="relative overflow-hidden bg-[#c8102e]">
      {/* Animated dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slow"
      />

      {/* Diagonal shimmer line — subtle moving highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 8s linear infinite",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Need Professional Digitizing?
              </h2>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                Let&apos;s create something amazing together.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Primary button — white bg, red text, dark red on hover */}
              <a
                href="#quote"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-7 text-sm font-semibold uppercase tracking-wide text-[#c8102e] shadow-lg transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Secondary button — transparent with white border, white bg on hover */}
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-white bg-transparent px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[#c8102e] hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
