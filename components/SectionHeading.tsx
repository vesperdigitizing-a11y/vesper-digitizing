type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-white/70" : "text-[#c8102e]"
          }`}
        >
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
          <span className="h-px w-6 bg-current opacity-60" />
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-[#1a1a1a]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${
            light ? "text-white/70" : "text-[#6b7280]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
