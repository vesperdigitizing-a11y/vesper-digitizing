import { ArrowRight, Phone } from "./icons";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function ServicesCTA() {
  return (
    <section id="quote" className="relative overflow-hidden  flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ctabg/servicecta.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 w-full">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mt-3 text-base text-white/95 sm:text-lg drop-shadow-md">
                Let&apos;s turn your ideas into perfect embroidery.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-7 text-sm font-semibold uppercase tracking-wide text-[#c8102e] shadow-xl transition-all hover:bg-white/90 hover:scale-105 hover:shadow-2xl"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/80 bg-white/10 backdrop-blur-sm px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-white/20 hover:scale-105"
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
