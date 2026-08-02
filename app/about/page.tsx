import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutStory from "@/components/AboutStory";
import AboutStats from "@/components/AboutStats";
import AboutWhyChoose from "@/components/AboutWhyChoose";
import AboutProcess from "@/components/AboutProcess";
import AboutTeam from "@/components/AboutTeam";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";
import { Clock, Trophy, Globe, BadgeCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us — Premium Embroidery Digitizing Specialists",
  description:
    "Learn about Vesper Digitizing — our story, mission, and expert team of digitizers delivering precision embroidery files trusted by clients worldwide.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Vesper Digitizing — Crafting Perfection One Stitch at a Time",
    description:
      "Our story, mission, and the expert team behind every stitch. Trusted embroidery digitizing worldwide.",
    images: ["/og-image.png"],
  },
};

const jsonLdAboutBreadcrumb = {
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
      "name": "About Us",
      "item": "https://vesperdigitizing.com/about"
    }
  ]
};

const ABOUT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We have been partnering with Vesper for over two years now. Their consistency and attention to detail is unmatched in the industry.",
    name: "David M.",
    country: "Germany",
    avatar: "/images/testimonials/david-m.webp",
  },
  {
    quote:
      "What sets Vesper apart is their team. Every project feels personal, and they always go the extra mile to get it right.",
    name: "Elena R.",
    country: "Australia",
    avatar: "/images/testimonials/elena-r.webp",
  },
  {
    quote:
      "From small logos to complex jacket-back designs, they handle everything with the same level of precision and care.",
    name: "Robert L.",
    country: "UAE",
    avatar: "/images/testimonials/robert-l.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdAboutBreadcrumb),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero
          badge="About Vesper Digitizing"
          badgeType="plain"
          title={"Crafting Perfection One Stitch at a Time"}
          titleHighlight="Stitch"
          description="At Vesper Digitizing, we turn your ideas into flawless embroidery. With precision, passion, and technology, we deliver digitizing solutions that help your brand stand out."
          image="/images/aboutHero.webp"
          imageAlt="About Vesper Digitizing"
          useBackgroundImage={false}
          ctaButtons={[
            { text: "Start Your Project", href: "/contact", variant: "solid" },
            { text: "View Portfolio", href: "/portfolio", variant: "outline" },
          ]}
          showStatsCard={true}
          statsCardValue={5000}
          statsCardSuffix="+"
          statsCardLabel="Completed Projects"
        />
        <AboutStory />
        <AboutStats />
        <AboutWhyChoose />
        <AboutProcess />
        <AboutTeam />
        <Testimonials
          eyebrow="Our Happy Customers"
          title="What Our Clients Say"
          subtitle="Real feedback from real clients who trust Vesper Digitizing with their embroidery work."
          testimonials={ABOUT_TESTIMONIALS}
        />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
