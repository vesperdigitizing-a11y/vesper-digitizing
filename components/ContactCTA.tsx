import { ArrowRight, Phone } from "./icons";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden w-full flex items-center min-h-[250px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ctabg/contactcta.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full">
        {/* Fixed: Added missing Opening Tag */}
        <ScrollReveal>
          {/* Fixed: Added missing flex wrapper for text and button alignment */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-4xl lg:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-2 text-base text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] sm:text-lg">
                Get in touch with us today and experience premium digitizing
                services.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] shadow-lg transition-all hover:bg-white/90 hover:scale-105 hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+12134567890"
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
