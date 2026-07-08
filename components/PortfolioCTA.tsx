import { ArrowRight, Phone } from "./icons";

export default function PortfolioCTA() {
  return (
    <section id="quote" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] px-6 py-12 sm:px-12 sm:py-16">
          {/* Decorative blurs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#c8102e]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#c8102e]/10 blur-3xl"
          />

          <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Have a Design in Mind?
              </h2>
              <p className="mt-3 font-display text-2xl font-bold text-[#c8102e] sm:text-3xl">
                Let's turn it into a masterpiece.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#a30d24]"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-7 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
