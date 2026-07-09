import { ArrowRight, Phone } from "./icons";
import ScrollReveal from "./ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#c8102e]">
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
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slow"
      />
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
                Ready to Start Your Project?
              </h2>
              <p className="mt-3 text-base text-white/85 sm:text-lg">
                Get in touch with us today and experience premium digitizing services.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-7 text-sm font-semibold uppercase tracking-wide text-[#c8102e] shadow-lg transition-all hover:bg-white/90 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+12134567890"
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/40 bg-transparent px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10 hover:scale-105"
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
