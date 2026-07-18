"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Threads,
  TikTok,
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
  { name: "Left Chest Logos", href: "/services?category=left-chest" },
  { name: "Cap Digitizing", href: "/services?category=cap-digitizing" },
  { name: "Jacket Back", href: "/services?category=jacket-back" },
  { name: "3D Puff Digitizing", href: "/services?category=3d-puff" },
  { name: "Applique Digitizing", href: "/services?category=applique" },
  { name: "Custom Patches", href: "/patches" },
  { name: "Vector Art", href: "/vectors" },
  { name: "Custom Embroidery", href: "/services" },
];

const HELP_LINKS = [
  { label: "FAQs", href: "/contact#faq" },
  { label: "How It Works", href: "/services#process" },
  { label: "Payment Methods", href: "/contact#payment" },
  { label: "Shipping & Delivery", href: "/store#shipping" },
  { label: "Return Policy", href: "/terms-and-conditions#returns" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const SOCIALS = [
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584633009301",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=4spjm4i",
  },
  {
    Icon: Threads,
    label: "Threads",
    href: "https://www.threads.com/@vesperdigitizing?invite=0",
  },
  { Icon: TikTok, label: "TikTok", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#1a1a1a] text-white"
    >
      {/* Decorative top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c8102e]/50 to-transparent" />

      {/* Background pattern */}
      <div
        aria-hidden
        className="dark-dots pointer-events-none absolute inset-0 opacity-50"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand + tagline + socials */}
          <div className="lg:col-span-1">
            <Image
              src="/images/LogoTransparent.png"
              alt="Vesper Digitizing"
              width={805}
              height={310}
              className="h-14 w-auto brightness-0 invert sm:h-18 relative right-6"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              We provide premium quality digitizing services with fast delivery
              and unbeatable customer support.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIALS.map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#c8102e] hover:shadow-[0_4px_12px_-4px_rgba(200,16,46,0.5)] focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-[#c8102e] hover:translate-x-1 focus:outline-none focus:text-[#c8102e]"
                  >
                    <span className="relative">
                      <span className="h-px w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-3" />
                      <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#c8102e]" />
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-[#c8102e] hover:translate-x-1 focus:outline-none focus:text-[#c8102e]"
                  >
                    <span className="relative flex items-center gap-2">
                      <span className="h-px w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-3" />
                      <svg
                        className="absolute -right-4 top-1/2 -translate-y-1/2 h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#c8102e]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4">
              Help &amp; Support
            </h3>
            <ul className="space-y-2.5">
              {HELP_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-[#c8102e] hover:translate-x-1 focus:outline-none focus:text-[#c8102e]"
                  >
                    <span className="relative">
                      <span className="h-px w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-3" />
                      <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#c8102e]" />
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section - Corrected Address */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              {/* Email */}
              <li className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform duration-300 group-hover:scale-110" />
                <a
                  href="mailto:support@vesperdigitizing.com"
                  className="transition-colors duration-300 hover:text-[#c8102e] focus:outline-none focus:text-[#c8102e]"
                >
                  support@vesperdigitizing.com
                </a>
              </li>

              {/* Phone */}
              <li className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform duration-300 group-hover:scale-110" />
                <span className="space-y-0.5">
                  <a
                    href="tel:+121334567890"
                    className="block transition-colors duration-300 hover:text-[#c8102e] focus:outline-none focus:text-[#c8102e]"
                  >
                    +1 (213) 456-7890
                  </a>
                  <a
                    href="tel:+19876543210"
                    className="block transition-colors duration-300 hover:text-[#c8102e] focus:outline-none focus:text-[#c8102e]"
                  >
                    +1 (987) 654-3210
                  </a>
                </span>
              </li>

              {/* Business Hours */}
              <li className="group flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed">
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>

              {/* Location - CORRECTED TO LA ADDRESS */}
              <li className="group flex items-start gap-3 pt-2 border-t border-white/10">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e] transition-transform duration-300 group-hover:scale-110" />
                <div className="leading-relaxed">
                  <p className="font-medium text-white/90">Head Office</p>
                  <p className="text-sm text-white/60 mt-0.5">
                    1901 Avenue of the Stars, Suite 2000
                  </p>
                  <p className="text-sm text-white/60">
                    Los Angeles, CA 90067, USA
                  </p>

                  <a
                    href="https://maps.google.com/?q=1901+Avenue+of+the+Stars+Suite+2000+Los+Angeles+CA+90067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#c8102e] hover:text-[#a30d24] transition-colors duration-300 focus:outline-none focus:underline"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-3">
                Newsletter
              </div>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Subscribe for updates and exclusive offers.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your email address"
                  className="h-9 w-full min-w-0 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-[#c8102e] focus:bg-white/10 focus:ring-1 focus:ring-[#c8102e]/50"
                />
                <button
                  type="submit"
                  className="group inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-[#c8102e] px-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#a30d24] hover:shadow-[0_4px_12px_-4px_rgba(200,16,46,0.5)] focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50"
                  aria-label="Subscribe to newsletter"
                >
                  Submit
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60 order-2 sm:order-1">
            © 2026 Vesper Digitizing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/60 order-1 sm:order-2">
            <a
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
