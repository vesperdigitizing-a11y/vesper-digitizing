const TEAM = [
  { name: "Zain Ul Abideen", role: "Founder & CEO",      initial: "ZA", color: "bg-[#c8102e]" },
  { name: "Hassan Raza",     role: "Lead Digitizer",     initial: "HR", color: "bg-[#1a1a1a]" },
  { name: "Usman Ali",       role: "Senior Digitizer",   initial: "UA", color: "bg-[#c8102e]" },
  { name: "Talha Mehmood",   role: "Quality Analyst",    initial: "TM", color: "bg-[#1a1a1a]" },
];

export default function AboutTeam() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            <span className="h-px w-6 bg-current opacity-60" />
            Meet Our Team
            <span className="h-px w-6 bg-current opacity-60" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            The Experts Behind Every Stitch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6b7280] sm:text-base">
            Our talented team of digitizers, designers, and quality analysts work
            together to deliver excellence on every project.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center rounded-xl border border-[#e5e7eb] bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Avatar with initial */}
              <div className={`flex h-24 w-24 items-center justify-center rounded-full ${member.color} font-display text-3xl font-extrabold text-white transition-transform group-hover:scale-105`}>
                {member.initial}
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#1a1a1a]">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#c8102e]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
