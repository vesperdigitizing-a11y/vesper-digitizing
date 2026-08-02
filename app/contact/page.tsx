import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ContactFeatures from "@/components/ContactFeatures";
import ContactOffices from "@/components/ContactOffices";
import ContactFAQ from "@/components/ContactFAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { Clock, Headset, Refresh, ShieldCheck, Star } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us — Get a Fast Digitizing Quote",
  description:
    "Get in touch with Vesper Digitizing for premium embroidery digitizing and vector art quotes. 24/7 customer support, fast 30-60 minute quote response.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Vesper Digitizing — Get a Free Digitizing Quote",
    description:
      "Send your design for a free quote. We reply within 30-60 minutes.",
    images: ["/og-image.png"],
  },
};

const jsonLdContactBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vesperdigitizing.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact Us",
      "item": "https://vesperdigitizing.com/contact"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdContactBreadcrumb),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero
          badge="Home › Contact Us"
          badgeType="breadcrumb"
          title={"Lets Create Something Amazing Together"}
          titleHighlight="Amazing Together"
          description="Have a question, need a quote, or want to discuss your project? We are here to help you with the best embroidery digitizing solutions."
          image="/images/HeroContact.webp"
          imageAlt="Contact Vesper Digitizing"
          useBackgroundImage={false}
          ctaButtons={[
            { text: "Start Your Project", href: "/contact", variant: "solid" },
            { text: "View Portfolio", href: "/portfolio", variant: "outline" },
          ]}
          badges={[
            {
              icon: Star,
              title: "Top Rated",
              sub: "Trusted by global brands",
            },
            {
              icon: ShieldCheck,
              title: "NDA Protected",
              sub: "100% safe designs",
            },
            {
              icon: Clock,
              title: "Fast Quotes",
              sub: "30-60 min response",
            },
            {
              icon: Refresh,
              title: "Free Review",
              sub: "Check before payment",
            },
          ]}
          showStatsCard={true}
          statsCardValue={5000}
          statsCardSuffix="+"
          statsCardLabel="Completed Projects"
        />
        <ContactForm />
        <ContactFeatures />
        <ContactOffices />
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
