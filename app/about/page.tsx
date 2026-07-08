import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutWhyChoose from "@/components/AboutWhyChoose";
import AboutTeam from "@/components/AboutTeam";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Vesper Digitizing",
  description:
    "Learn about Vesper Digitizing — our story, mission, values, and the expert team behind every stitch. Premium embroidery digitizing services trusted worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutStory />
        <AboutWhyChoose />
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
