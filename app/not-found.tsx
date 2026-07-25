import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search, Target } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] px-4 py-20">
          {/* Decorative background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #c8102e 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />

          {/* Floating stitch decorations */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg className="absolute left-[10%] top-[15%] h-8 w-8 rotate-45 text-[#c8102e]/10" viewBox="0 0 24 24" fill="currentColor"><path d="M21.17 2.83a2 2 0 0 0-2.83 0L2.83 18.34a2 2 0 0 0 2.83 2.83L18.34 5.66a2 2 0 0 0 0-2.83Z" /></svg>
            <svg className="absolute right-[12%] top-[25%] h-6 w-6 -rotate-12 text-[#c8102e]/10" viewBox="0 0 24 24" fill="currentColor"><path d="M21.17 2.83a2 2 0 0 0-2.83 0L2.83 18.34a2 2 0 0 0 2.83 2.83L18.34 5.66a2 2 0 0 0 0-2.83Z" /></svg>
            <svg className="absolute bottom-[20%] left-[15%] h-10 w-10 rotate-90 text-[#c8102e]/8" viewBox="0 0 24 24" fill="currentColor"><path d="M21.17 2.83a2 2 0 0 0-2.83 0L2.83 18.34a2 2 0 0 0 2.83 2.83L18.34 5.66a2 2 0 0 0 0-2.83Z" /></svg>
            <svg className="absolute bottom-[30%] right-[8%] h-7 w-7 rotate-135 text-[#c8102e]/10" viewBox="0 0 24 24" fill="currentColor"><path d="M21.17 2.83a2 2 0 0 0-2.83 0L2.83 18.34a2 2 0 0 0 2.83 2.83L18.34 5.66a2 2 0 0 0 0-2.83Z" /></svg>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            {/* Giant 404 */}
            <h1 className="font-display text-[8rem] font-black leading-none tracking-tight text-white/5 select-none sm:text-[12rem]">
              404
            </h1>
            <h2 className="-mt-16 font-display text-3xl font-extrabold leading-tight text-white sm:-mt-24 sm:text-5xl">
              Page Not <span className="text-[#c8102e]">Found</span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-base text-gray-400 sm:text-lg">
              The page you are looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-7 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-200 hover:bg-[#a30d24] hover:shadow-[0_0_30px_-5px_rgb(200_16_46/0.4)] hover:scale-105"
              >
                <Target className="h-4 w-4" />
                Back to Home
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-white/20 bg-white/5 px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:scale-105"
              >
                <Search className="h-4 w-4" />
                Contact Us
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="text-gray-600">Popular:</span>
              <Link href="/services" className="transition-colors hover:text-[#c8102e]">Services</Link>
              <span className="text-gray-700">&middot;</span>
              <Link href="/portfolio" className="transition-colors hover:text-[#c8102e]">Portfolio</Link>
              <span className="text-gray-700">&middot;</span>
              <Link href="/store" className="transition-colors hover:text-[#c8102e]">Store</Link>
              <span className="text-gray-700">&middot;</span>
              <Link href="/about" className="transition-colors hover:text-[#c8102e]">About</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
