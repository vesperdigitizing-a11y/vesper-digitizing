"use client";

import { useState } from "react";
import { Clock, MapPin, ArrowRight } from "./icons";
import ScrollReveal from "./ScrollReveal";

const OFFICE = {
  type: "Head Office",
  address: "1901 Avenue of the Stars, Suite 2000, Los Angeles, CA 90067, USA",
  note: "Corporate office & sales",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  lat: 34.0613,
  lng: -118.4131,
};

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  OFFICE.address,
)}`;

export default function ContactOffices() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl">
            Our <span className="text-gradient">Office</span>
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Office card */}
          <ScrollReveal className="h-full">
            <div className="group flex flex-col gap-6 rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#c8102e]/40 hover:shadow-2xl sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                    {OFFICE.type}
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">{OFFICE.address}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#c8102e]">
                    {OFFICE.note}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-[#e5e7eb] pt-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8102e]/10 text-[#c8102e] ring-1 ring-[#c8102e]/20">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#1a1a1a]">
                    Working Hours
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">{OFFICE.hours}</p>
                  <p className="text-sm text-[#6b7280]">Sunday: Closed</p>
                </div>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#c8102e] transition-colors hover:text-[#a30d24]"
              >
                Get Directions
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Enhanced Map — matches the office card height via h-full + items-stretch */}
          <ScrollReveal variant="right" className="h-full">
            <div className="group relative h-full min-h-[300px] overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#f5f5f5] shadow-sm transition-all duration-500 hover:shadow-2xl">
              {/* Loading skeleton */}
              {!loaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#f5f5f5]">
                  <div className="flex flex-col items-center gap-3 text-[#6b7280]">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#c8102e] border-t-transparent" />
                    <span className="text-xs font-medium">Loading map…</span>
                  </div>
                </div>
              )}

              {/* The iframe map — fills the container height */}
              <iframe
                title="Vesper Digitizing office location"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${OFFICE.lng - 0.008}%2C${OFFICE.lat - 0.006}%2C${OFFICE.lng + 0.008}%2C${OFFICE.lat + 0.006}&layer=mapnik&marker=${OFFICE.lat}%2C${OFFICE.lng}`}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />

              {/* Gradient overlay at bottom for card legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-90" />

              {/* Floating info card — bottom-left overlay */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs">
                <div className="pointer-events-auto rounded-xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-lg">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#1a1a1a]">
                        {OFFICE.type}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-xs text-[#6b7280]">
                        {OFFICE.address}
                      </p>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#c8102e] px-3 py-2 text-xs font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-[#a30d24]"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      Directions
                    </a>
                    <a
                      href={`https://www.openstreetmap.org/?mlat=${OFFICE.lat}&mlon=${OFFICE.lng}#map=16/${OFFICE.lat}/${OFFICE.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-8 items-center justify-center rounded-lg border border-[#e5e7eb] bg-white text-[#6b7280] transition-all hover:scale-105 hover:border-[#c8102e] hover:text-[#c8102e]"
                      aria-label="Open full map"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Top-right badge — "Visit us" */}
              <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1a1a1a] shadow-lg backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8102e] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8102e]" />
                </span>
                Visit us
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
