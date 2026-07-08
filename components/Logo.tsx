import { Crown } from "./icons";

type LogoProps = {
  /** "horizontal" = wordmark beside crown+V (header/footer). "stacked" = crown+V above wordmark. */
  variant?: "horizontal" | "stacked";
  /** Color theme. "light" = for dark backgrounds (white text). "dark" = for light backgrounds (dark/red text). */
  theme?: "light" | "dark";
  /** Override the V size in pixels. */
  size?: number;
  className?: string;
};

/**
 * Vesper Digitizing brand logo: a crown above a "V" inside a red square,
 * followed by the wordmark "VESPER" (red) + "DIGITIZING" (gray/white).
 */
export default function Logo({
  variant = "horizontal",
  theme = "dark",
  size = 40,
  className = "",
}: LogoProps) {
  const isLight = theme === "light";
  const vBlock = (
    <div
      className="relative flex items-center justify-center rounded-md bg-[#c8102e] text-white shrink-0"
      style={{ width: size, height: size }}
    >
      <Crown
        className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#c8102e]"
        style={{ width: size * 0.55, height: size * 0.55 }}
        strokeWidth={2}
      />
      <span
        className="font-display font-extrabold leading-none"
        style={{ fontSize: size * 0.55, marginTop: size * 0.05 }}
      >
        V
      </span>
    </div>
  );

  const wordmark = (
    <div className="flex flex-col leading-none">
      <span
        className="font-display font-extrabold tracking-tight text-[#c8102e]"
        style={{ fontSize: size * 0.42 }}
      >
        VESPER
      </span>
      <span
        className={`font-display font-semibold tracking-[0.25em] ${
          isLight ? "text-white/80" : "text-[#6b7280]"
        }`}
        style={{ fontSize: size * 0.22, marginTop: size * 0.05 }}
      >
        DIGITIZING
      </span>
    </div>
  );

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        {vBlock}
        {wordmark}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {vBlock}
      {wordmark}
    </div>
  );
}
