"use client";
import { ArrowRight } from "./icons";
import Image from "next/image";

export default function StoreNewsletter() {
  return (
    <section className="relative overflow-hidden  flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ctabg/storecta.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark overlay for text readability */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 w-full">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl">
              Join Our Newsletter
            </h2>
            <p className="mt-3 text-base text-white/95 sm:text-lg drop-shadow-md max-w-lg">
              Get exclusive offers, new designs & updates straight to your
              inbox.
            </p>
          </div>

          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); (e.target as HTMLFormElement).reset(); }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              aria-label="Email address"
              className="h-12 w-full rounded-md border border-white/30 bg-white/15 backdrop-blur-sm px-4 text-sm text-white placeholder-white/60 outline-none transition-all focus:border-white/50 focus:bg-white/25 shadow-lg"
            />
            <button
              type="submit"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold uppercase tracking-wide text-[#c8102e] shadow-xl transition-all hover:bg-white/90 hover:scale-105 hover:shadow-2xl"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
