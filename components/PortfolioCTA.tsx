import { ArrowRight, Phone } from "./icons";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function PortfolioCTA() {
  return (
    <section id="quote" className="relative overflow-hidden  flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ctabg/portfoliocta.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark overlay for text readability */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 w-full">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[#c8102e] drop-shadow-lg sm:text-4xl lg:text-5xl">
                Have a Design in Mind?
              </h2>
              <p className="mt-3 font-display text-xl font-bold text-[#c8102e]/95 drop-shadow-md sm:text-2xl">
                Let&apos;s turn it into a masterpiece.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Button 1: Solid Brand Red -> Hover par Dark Red */}
              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-xl transition-all duration-200 hover:bg-[#a80d26] hover:shadow-2xl hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              {/* Button 2: Border Red -> Hover par Solid Brand Red fill */}
              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-xl transition-all duration-200 hover:bg-[#a80d26] hover:shadow-2xl hover:scale-105"
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
