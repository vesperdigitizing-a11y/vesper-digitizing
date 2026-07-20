import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import Store from "@/components/Store";
import HomeFAQ from "@/components/HomeFAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vesper Digitizing | Premium Embroidery Digitizing Services",
  description:
    "Professional embroidery digitizing services. Transform your artwork into flawless embroidery files with precision, quality and fast turnaround.",
};

const HOME_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Vesper has transformed our embroidery business. Their attention to detail and quick turnaround is unmatched in the industry.",
    name: "Sarah M.",
    country: "USA",
    avatar: "/images/testimonials/sarah-m.jpg",
  },
  {
    quote:
      "We have been using Vesper for over 3 years now. Consistent quality and excellent customer service every single time.",
    name: "James L.",
    country: "UK",
    avatar: "/images/testimonials/james-l.jpg",
  },
  {
    quote:
      "The best digitizing service we have ever used. Complex designs are handled with perfection every time.",
    name: "Ahmed K.",
    country: "UAE",
    avatar: "/images/testimonials/ahmed-k.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero
          badge="Premium Digitizing Services"
          badgeType="dot"
          title={"Precision Digitizing for Premium Embroidery"}
          description="We transform artwork into flawless embroidery files with exceptional stitch quality, fast turnaround and professional support trusted by clients worldwide."
          image="/images/HeroImg.png"
          imageAlt="Vesper Digitizing"
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
        <Features />
        <Services />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials
          eyebrow="Our Happy Customers"
          title="What Our Clients Say"
          subtitle="Real feedback from real clients who trust Vesper Digitizing with their embroidery work."
          testimonials={HOME_TESTIMONIALS}
        />
        <Store />
        <HomeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
