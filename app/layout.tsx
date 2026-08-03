import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { ToastProvider } from "@/lib/toast-context";
import ScrollProgress from "@/components/ScrollProgress";

// Chrome that isn't needed for first paint — split into their own chunks
// so they don't add to the initial hydration payload on every page.
const CartDrawer = dynamic(() => import("@/components/CartDrawer"));
const AnnouncementBar = dynamic(() => import("@/components/AnnouncementBar"));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"));

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const pops = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vesperdigitizing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vesper Digitizing — Premium Embroidery Digitizing Services",
    template: "%s | Vesper Digitizing",
  },
  description:
    "Vesper Digitizing transforms artwork into flawless embroidery files with exceptional stitch quality, 24-hour turnaround, and professional support trusted by clients worldwide.",
  keywords: [
    "embroidery digitizing",
    "custom patch digitizing",
    "left chest logo digitizing",
    "cap digitizing",
    "3D puff digitizing",
    "vector art conversion",
    "vesper digitizing",
    "logo to vector",
    "embroidery design files",
    "custom embroidered patches",
  ],
  authors: [{ name: "Vesper Digitizing", url: siteUrl }],
  creator: "Vesper Digitizing",
  publisher: "Vesper Digitizing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Vesper Digitizing — Premium Embroidery Digitizing & Vector Art",
    description:
      "Precision digitizing crafted for premium embroidery. 24-hour delivery, unlimited revisions, 100% quality guaranteed.",
    url: siteUrl,
    siteName: "Vesper Digitizing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vesper Digitizing — Premium Embroidery Digitizing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesper Digitizing — Premium Embroidery Digitizing Services",
    description:
      "Transform artwork into flawless embroidery files with 24-hour turnaround and unlimited revisions.",
    images: ["/og-image.png"],
    creator: "@vesperdigitizing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Vesper Digitizing",
  "url": siteUrl,
  "logo": `${siteUrl}/android-chrome-512x512.png`,
  "image": `${siteUrl}/og-image.png`,
  "description": "Vesper Digitizing offers premium embroidery digitizing, custom patch digitizing, and vector art conversion services with 24-hour turnaround.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1901 Avenue of the Stars, Suite 2000",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90067",
    "addressCountry": "US"
  },
  "telephone": "+1-123-456-7890",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61584633009301",
    "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=4spjm4i",
    "https://www.threads.com/@vesperdigitizing?invite=0"
  ]
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vesper Digitizing",
  "url": siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteUrl}/store?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pops.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a]">
        <ToastProvider>
          <CartProvider>
            <ScrollProgress />
            <AnnouncementBar />
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-[100]"
            />
            {children}
            <CartDrawer />
            <FloatingCTA />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
