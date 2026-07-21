"use client";

import { useState } from "react";
import { Phone, Mail, Clock, ArrowRight, Send } from "./icons";
import { useToast } from "@/lib/toast-context";
import ScrollReveal from "./ScrollReveal";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["+1 (213) 456-7890", "+1 (987) 654-3210"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["support@vesperdigitizing.com", "contact@vesperdigitizing.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
  },
];

export default function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    const formData = new FormData(form);
    formData.append("access_key", "c0c3ce9e-bbe4-46ea-8fc0-07928844c58c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 1 hour.",
          variant: "success",
          duration: 4000,
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again in a moment.",
          variant: "error",
          duration: 4000,
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please check your connection and try again.",
        variant: "error",
        duration: 4000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left: form */}
          <ScrollReveal variant="left">
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all duration-500 hover:shadow-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                <span className="h-px w-6 bg-current opacity-60" />
                Contact Form
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-[#1a1a1a] sm:text-3xl">
                Send Us a Message
              </h2>
              <div className="mt-3 h-[3px] w-16 rounded-full bg-[#c8102e]" />
              <p className="mt-4 text-sm text-[#6b7280]">
                Fill out the form below and we&rsquo;ll get back to you as soon as
                possible.
              </p>

              <form
                className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2"
                onSubmit={handleSubmit}
              >
                <label className="group flex flex-col gap-1.5 text-sm font-medium text-[#1a1a1a]">
                  Your Name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="h-11 rounded-md border border-[#e5e7eb] bg-white px-4 text-sm outline-none transition-all focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/10 group-hover:border-[#c8102e]/40"
                  />
                </label>
                <label className="group flex flex-col gap-1.5 text-sm font-medium text-[#1a1a1a]">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="h-11 rounded-md border border-[#e5e7eb] bg-white px-4 text-sm outline-none transition-all focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/10 group-hover:border-[#c8102e]/40"
                  />
                </label>
                <label className="group flex flex-col gap-1.5 text-sm font-medium text-[#1a1a1a]">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    className="h-11 rounded-md border border-[#e5e7eb] bg-white px-4 text-sm outline-none transition-all focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/10 group-hover:border-[#c8102e]/40"
                  />
                </label>
                <label className="group flex flex-col gap-1.5 text-sm font-medium text-[#1a1a1a]">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    className="h-11 rounded-md border border-[#e5e7eb] bg-white px-4 text-sm outline-none transition-all focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/10 group-hover:border-[#c8102e]/40"
                  />
                </label>
                <label className="group flex flex-col gap-1.5 text-sm font-medium text-[#1a1a1a] sm:col-span-2">
                  Your Message
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    className="rounded-md border border-[#e5e7eb] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/10 group-hover:border-[#c8102e]/40"
                  />
                </label>

                <label className="flex items-center gap-2 text-sm text-[#6b7280] sm:col-span-2">
                  <input type="checkbox" required className="h-4 w-4 accent-[#c8102e]" />
                  I agree to the Privacy Policy
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(200,16,46,0.5)] transition-all hover:bg-[#a30d24] hover:shadow-[0_12px_28px_-6px_rgba(200,16,46,0.6)] disabled:opacity-70 sm:col-span-2"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right: contact info */}
          <ScrollReveal variant="right">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all duration-500 hover:shadow-2xl">
                <h3 className="font-display text-2xl font-extrabold text-[#1a1a1a]">
                  Get In Touch
                </h3>
                <div className="mt-3 h-[3px] w-12 rounded-full bg-[#c8102e]" />

                <div className="mt-8 flex flex-col gap-7">
                  {CONTACT_INFO.map((info) => (
                    <div
                      key={info.title}
                      className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c8102e]/25 bg-[#c8102e]/5 text-[#c8102e] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c8102e] group-hover:text-white">
                        <info.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#1a1a1a]">{info.title}</p>
                        {info.lines.map((l) => (
                          <p key={l} className="text-sm text-[#6b7280]">{l}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live chat */}
                <div className="mt-8 rounded-xl bg-[#1a1a1a] p-5 dark-mesh">
                  <p className="text-sm font-semibold text-white">Live Chat</p>
                  <p className="mt-1 text-xs text-white/60">
                    Chat with our support team in real-time
                  </p>
                  <a
                    href="https://wa.me/11234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 group inline-flex h-9 items-center gap-2 rounded-md bg-[#c8102e] px-4 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#a30d24]"
                  >
                    Chat on WhatsApp
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
