import { Upload, Search, PenTool, ShieldCheck, Send, Smile } from "./icons";

const STEPS = [
  { icon: Upload, title: "Upload Artwork", desc: "Send us your logo or design in any format." },
  { icon: Search, title: "Analysis", desc: "Our experts analyze the artwork for best results." },
  { icon: PenTool, title: "Digitizing", desc: "We digitize with precision and industry standards." },
  { icon: ShieldCheck, title: "Quality Check", desc: "Every file goes through strict quality control." },
  { icon: Send, title: "Delivery", desc: "Receive your files in your desired format." },
  { icon: Smile, title: "Satisfaction", desc: "Your satisfaction is our ultimate success." },
];

export default function AboutProcess() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Our Process
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            From Artwork to <span className="text-[#c8102e]">Perfection</span>
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div
            aria-hidden
            className="absolute left-12 right-12 top-6 hidden h-px bg-[#e5e7eb] lg:block"
          />
          {STEPS.map((s, idx) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c8102e]/25 bg-white text-[#c8102e]">
                <s.icon className="h-5 w-5" />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#c8102e] text-[9px] font-bold text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mt-4 font-display text-sm font-bold text-[#1a1a1a]">
                {s.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
