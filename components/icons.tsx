import type { SVGProps, ReactElement } from "react";

/**
 * Inline SVG icon set for Vesper Digitizing.
 * All icons inherit currentColor and accept standard SVG props.
 * Stroke-width 1.75 by default for the elegant line-icon look used on the site.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Crown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 7l4 5 5-7 5 7 4-5-2 12H5L3 7z" />
    <path d="M5 19h14" />
  </svg>
);

export const ArrowRight = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export const ChevronLeft = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const ChevronRight = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const Phone = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Mail = (props: IconProps) => (
  <svg {...base(props)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Clock = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Refresh = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const ShieldCheck = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Globe = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const Headset = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
    <path d="M21 16a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </svg>
);

export const Diamond = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 3h12l4 6-10 13L2 9z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);

export const Zap = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const BadgeCheck = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Target = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const Users = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Shirt = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
  </svg>
);

export const Cap = (props: IconProps) => (
  <svg {...base(props)}>
    {/* Cap crown — rounded dome */}
    <path d="M3 15c0-6 4-10 9-10s9 4 9 10" />
    {/* Cap brim — curved visor at the bottom */}
    <path d="M3 15c0 2 2 4 4 4h10c2 0 4-2 4-4" />
    {/* Center front panel seam */}
    <path d="M12 5v10" />
    {/* Side panel seams */}
    <path d="M6.5 15c0-4 2.5-7 5.5-7" />
    <path d="M17.5 15c0-4-2.5-7-5.5-7" />
    {/* Button on top */}
    <circle cx="12" cy="5" r="1" />
  </svg>
);

export const Jacket = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 4l4-2 4 3 4-3 4 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M12 5v15" />
    <path d="M8 9l4 2 4-2" />
  </svg>
);

export const Cube = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

export const Layers = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12.83 2.18 2 7.82 12 13l10-5.18L12.83 2.18z" />
    <path d="M2 17.82 12 23l10-5.18" />
    <path d="m2 12.82 10 5.18 10-5.18" />
  </svg>
);

export const Patch = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 4h16v16H4z" />
    <path d="M4 8h16M4 12h16M4 16h16" />
  </svg>
);

export const PenTool = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m12 19 7-7 3 3-7 7-3-3z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2 9.586 9.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

export const Sparkles = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9.94 14.66 12 22l2.06-7.34L21 12l-6.94-2.06L12 2 9.94 9.94 2 12z" />
    <path d="M19 3v4" />
    <path d="M21 5h-4" />
  </svg>
);

export const Upload = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M17 8l-5-5-5 5" />
    <path d="M12 3v12" />
  </svg>
);

export const Search = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Send = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4z" />
  </svg>
);

export const Smile = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
);

export const Plus = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export const Star = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);

export const Quote = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

export const Cart = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

export const Menu = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 12h16M4 6h16M4 18h16" />
  </svg>
);

export const Facebook = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Twitter = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Instagram = (props: IconProps) => (
  <svg {...base(props)}>
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const MapPin = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);


export const Tag = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  </svg>
);

export const Linkedin = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Download = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const Lock = (props: IconProps) => (
  <svg {...base(props)}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Trophy = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v6a5 5 0 0 1-10 0z" />
    <path d="M7 5H4v1a4 4 0 0 0 4 4" />
    <path d="M17 5h3v1a4 4 0 0 1-4 4" />
  </svg>
);

export const User = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
  </svg>
);

export const Youtube = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8z" />
    <path d="M10 15V9l5 3z" fill="currentColor" stroke="none" />
  </svg>
);

export const Threads = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2C6.5 2 3 5.8 3 11.9c0 4 1.4 6.7 3.6 8.5 1.8 1.4 3.5 1.6 5.4 1.6 2.7 0 5.1-1 6.3-3.5.7-1.4.9-2.9.5-4.4-.5-1.9-1.9-3-3.9-3.3-1.4-.2-2.7 0-3.7.6" />
    <path d="M15.2 9.9c-.3-1.4-1.5-2.3-3.1-2.3-2.1 0-3.6 1.5-3.6 3.4 0 1.7 1.2 3 3 3.3 1.8.3 3.2-.2 4.1-1.4.6-.9.8-2.1.5-3.4" />
  </svg>
);

export const TikTok = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M16 3v9.5a4 4 0 1 1-4-4" />
    <path d="M16 3a5 5 0 0 0 5 5" />
    <path d="M16 8a5 5 0 0 0 5 0" />
  </svg>
);

export const Eye = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Heart = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

/** Mapping helpers for service / feature / step / stat icons. */
export type IconName =
  | "shirt"
  | "cap"
  | "jacket"
  | "cube"
  | "layers"
  | "patch"
  | "penTool"
  | "sparkles"
  | "diamond"
  | "zap"
  | "users"
  | "target"
  | "headset"
  | "shieldCheck"
  | "globe"
  | "refresh"
  | "clock"
  | "upload"
  | "search"
  | "send"
  | "smile"
  | "tag"
  | "linkedin"
  | "download"
  | "badge-check"
  | "lock"
  | "trophy"
  | "user"
  | "youtube"
  | "chenille"
  | "towel"
  | "sleeve";



export const Chenille = (props: IconProps) => (
  <svg {...base(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3C7 3 3 7.5 3 12s4 9 9 9 9-4.5 9-9S17 3 12 3z" />
    <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5" />
    <path d="M12 7c2.8 0 5 2.2 5 5" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

export const Towel = (props: IconProps) => (
  <svg {...base(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <path d="M8 4v6" />
    <path d="M16 4v6" />
    <path d="M3 14h18" />
  </svg>
);

export const Sleeve = (props: IconProps) => (
  <svg {...base(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L2 8v10c0 2.2 1.8 4 4 4h2V2" />
    <path d="M18 2l4 6v10c0 2.2-1.8 4-4 4h-2V2" />
    <path d="M8 22h8" />
    <path d="M8 2h8" />
  </svg>
);

export const IconByName: Record<IconName, (p: IconProps) => ReactElement> = {
  shirt: Shirt,
  cap: Cap,
  jacket: Jacket,
  cube: Cube,
  layers: Layers,
  patch: Patch,
  penTool: PenTool,
  sparkles: Sparkles,
  diamond: Diamond,
  zap: Zap,
  users: Users,
  target: Target,
  headset: Headset,
  shieldCheck: ShieldCheck,
  globe: Globe,
  refresh: Refresh,
  clock: Clock,
  upload: Upload,
  search: Search,
  send: Send,
  smile: Smile,
  tag: Tag,
  linkedin: Linkedin,
  download: Download,
  "badge-check": BadgeCheck,
  lock: Lock,
  trophy: Trophy,
  user: User,
  youtube: Youtube,
  chenille: Chenille,
  towel: Towel,
  sleeve: Sleeve,
};
