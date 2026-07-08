import { ArrowRight, Phone } from "./icons";

export default function CTA() {
  return (
    <section id="quote" className="relative overflow-hidden bg-[#c8102e]">
      {/* Decorative pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Need Professional Digitizing?
            </h2>
            <p className="mt-3 text-base text-white/85 sm:text-lg">
              Let's create something amazing together.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-7 text-sm font-semibold uppercase tracking-wide text-[#c8102e] shadow-sm transition-colors hover:bg-white/90"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/40 bg-transparent px-7 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
