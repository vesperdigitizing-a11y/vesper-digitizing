import { ArrowRight, Phone } from "./icons";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden  flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ctabg/aboutcta.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 w-full">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-4xl lg:text-5xl">
                Ready to Bring Your Designs to Life?
              </h2>
              <p className="mt-2 text-base text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] sm:text-lg">
                Let&rsquo;s create something amazing together.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] shadow-lg transition-all hover:bg-white/90 hover:scale-105 hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md border-2 border-white/90 bg-white/20 backdrop-blur-[2px] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:bg-white/30 hover:scale-105"
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
