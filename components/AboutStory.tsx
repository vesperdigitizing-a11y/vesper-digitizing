export default function AboutStory() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
              <span className="h-px w-6 bg-current opacity-60" />
              Our Story
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Passion. Precision. Perfection.
            </h2>
            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#c8102e]" />
            <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-[#1a1a1a]/70">
              <p>
                Vesper Digitizing was founded with a simple mission — to provide
                world-class embroidery digitizing services with unmatched quality
                and reliability. What started as a small team of passionate
                digitizers has grown into a trusted partner for thousands of
                clients worldwide.
              </p>
              <p>
                We understand that every stitch represents your brand. That&rsquo;s
                why we use advanced digitizing technology and skilled expertise
                to ensure every design looks perfect on fabric. From small logos
                to complex patches, we treat every project with the same level of
                care and dedication.
              </p>
              <p>
                Our commitment to excellence has made us a preferred choice for
                businesses, teams, and individuals who demand the very best in
                embroidery digitizing.
              </p>
            </div>
            <p className="mt-6 font-display text-2xl font-bold text-[#c8102e]">
              Vesper Digitizing
            </p>
            <p className="text-xs text-[#6b7280]">Founder & CEO</p>
          </div>

          {/* Right: values cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[#1a1a1a]">
                Our Mission
              </h3>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#c8102e]" />
              <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
                To deliver world-class digitizing services that help brands look
                better, stitch better, and grow better.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[#1a1a1a]">
                Our Vision
              </h3>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#c8102e]" />
              <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
                To be the most trusted and innovative embroidery digitizing
                partner for clients across the globe.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[#1a1a1a]">
                Our Values
              </h3>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#c8102e]" />
              <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
                Quality, integrity, and customer satisfaction drive everything
                we do. We never compromise on excellence.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-[#1a1a1a] p-6 shadow-sm text-white">
              <h3 className="font-display text-lg font-bold text-white">
                Our Promise
              </h3>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#c8102e]" />
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                100% satisfaction guaranteed on every file. If you&rsquo;re not
                happy, we&rsquo;ll redo it until you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
