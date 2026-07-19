import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutStats from "@/components/AboutStats";
import AboutWhyChoose from "@/components/AboutWhyChoose";
import AboutProcess from "@/components/AboutProcess";
import AboutTeam from "@/components/AboutTeam";
import Testimonials, { type Testimonial } from "@/components/Testimonials";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Vesper Digitizing",
  description:
    "Learn about Vesper Digitizing — our story, mission, values, and the expert team behind every stitch. Premium embroidery digitizing services trusted worldwide.",
};

const ABOUT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We have been partnering with Vesper for over two years now. Their consistency and attention to detail is unmatched in the industry.",
    name: "David M.",
    country: "Germany",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "What sets Vesper apart is their team. Every project feels personal, and they always go the extra mile to get it right.",
    name: "Elena R.",
    country: "Australia",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "From small logos to complex jacket-back designs, they handle everything with the same level of precision and care.",
    name: "Robert L.",
    country: "UAE",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
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
