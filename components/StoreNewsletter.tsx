"use client";
import { ArrowRight } from "./icons";

export default function StoreNewsletter() {
  return (
    <section className="bg-[#c8102e] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Join Our Newsletter
            </h2>
            <p className="mt-3 text-base text-white/85 sm:text-lg">
              Get exclusive offers, new designs & updates straight to your
              inbox.
            </p>
          </div>

          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="h-12 w-full rounded-md border border-white/20 bg-white/10 px-4 text-sm text-white placeholder-white/50 outline-none transition-colors focus:border-white/40 focus:bg-white/15"
            />
            <button
              type="submit"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#1a1a1a] px-6 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1a1a1a]/80"
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
