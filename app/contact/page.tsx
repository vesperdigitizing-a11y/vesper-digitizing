import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactFeatures from "@/components/ContactFeatures";
import ContactOffices from "@/components/ContactOffices";
import ContactFAQ from "@/components/ContactFAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Vesper Digitizing",
  description:
    "Get in touch with Vesper Digitizing for premium embroidery digitizing services. Send us a message, call us, or start a live chat. We reply within 1 hour.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactHero />
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
