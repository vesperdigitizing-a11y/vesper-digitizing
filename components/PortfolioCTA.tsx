import { ArrowRight, Phone } from "./icons";
import ScrollReveal from "./ScrollReveal";

export default function PortfolioCTA() {
  return (
    <section id="quote" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
                Have a Design in Mind?
              </h2>
              <p className="mt-3 font-display text-2xl font-bold text-gradient sm:text-3xl">
                Let&apos;s turn it into a masterpiece.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)] hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-[#e5e7eb] bg-white px-7 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition-all hover:border-[#1a1a1a] hover:bg-[#f5f5f5] hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative red thread curve on the right */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -right-12 bottom-0 hidden h-40 w-64 text-[#c8102e]/10 lg:block animate-float-slow"
          viewBox="0 0 256 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M0 80 Q 64 0, 128 80 T 256 80" />
          <path d="M0 100 Q 64 20, 128 100 T 256 100" />
          <path d="M0 120 Q 64 40, 128 120 T 256 120" />
        </svg>
      </div>
    </section>
  );
}
