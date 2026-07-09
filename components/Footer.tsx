"use client";

import Logo from "./Logo";
import {
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "./icons";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Store", href: "/store" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES = [
  "Left Chest Logos",
  "Cap Digitizing",
  "Jacket Back",
  "3D Puff Digitizing",
  "Applique Digitizing",
  "Patch Digitizing",
  "Vector Conversion",
  "Custom Embroidery",
];

const HELP_LINKS = [
  "FAQs",
  "How It Works",
  "Payment Methods",
  "Shipping & Delivery",
  "Return Policy",
  "Privacy Policy",
  "Terms & Conditions",
];

const SOCIALS = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#1a1a1a] text-white">
      {/* Decorative top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c8102e]/50 to-transparent" />

      {/* Background pattern */}
      <div
        aria-hidden
        className="dark-dots pointer-events-none absolute inset-0 opacity-50"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + tagline + socials */}
          <div className="lg:col-span-1">
            <Logo size={44} theme="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              We provide premium quality digitizing services with fast delivery
              and unbeatable customer support.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#c8102e] hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.6)]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-[#c8102e]"
                  >
                    <span className="h-px w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-[#c8102e]"
                  >
                    <span className="h-px w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-3" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Help &amp; Support
            </h3>
            <ul className="mt-5 space-y-3">
              {HELP_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-[#c8102e]"
                  >
                    <span className="h-px w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-3" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us + Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110" />
                <a
                  href="mailto:support@vesperdigitizing.com"
                  className="transition-colors hover:text-[#c8102e]"
                >
                  support@vesperdigitizing.com
                </a>
              </li>
              <li className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110" />
                <span>
                  <a
                    href="tel:+11234567890"
                    className="block transition-colors hover:text-[#c8102e]"
                  >
                    +1 (123) 456-7890
                  </a>
                  <a
                    href="tel:+11234561234"
                    className="block transition-colors hover:text-[#c8102e]"
                  >
                    +1 (123) 456-1234
                  </a>
                </span>
              </li>
              <li className="group flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform group-hover:scale-110" />
                <span>
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Newsletter
              </div>
              <p className="mt-3 text-xs text-white/70">
                Subscribe to get updates and exclusive offers.
              </p>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your email"
                  className="h-10 w-full min-w-0 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#c8102e] focus:bg-white/10"
                />
                <button
                  type="submit"
                  className="group inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-[#c8102e] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#a30d24] hover:shadow-[0_8px_20px_-6px_rgba(200,16,46,0.6)]"
                >
                  Submit
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            © 2024 Vesper Digitizing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/60">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
