import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { ToastProvider } from "@/lib/toast-context";
import CartDrawer from "@/components/CartDrawer";
import ScrollProgress from "@/components/ScrollProgress";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingCTA from "@/components/FloatingCTA";

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

export const metadata: Metadata = {
  title: "Vesper Digitizing — Premium Embroidery Digitizing Services",
  icons: {
    icon: [
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
      { url: "/faviconlight.ico", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description:
    "Vesper Digitizing transforms artwork into flawless embroidery files with exceptional stitch quality, fast turnaround and professional support trusted by clients worldwide.",
  keywords: [
    "embroidery digitizing",
    "left chest logo",
    "cap digitizing",
    "3D puff digitizing",
    "patch digitizing",
    "vector conversion",
    "vesper digitizing",
  ],
  authors: [{ name: "Vesper Digitizing" }],
  openGraph: {
    title: "Vesper Digitizing — Premium Embroidery Digitizing Services",
    description:
      "Precision digitizing crafted for premium embroidery. 24-hour delivery, unlimited revisions, 100% quality guaranteed.",
    type: "website",
  },
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
