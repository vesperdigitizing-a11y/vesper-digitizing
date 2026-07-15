import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Vesper Digitizing",
  description:
    "Privacy Policy for Vesper Digitizing — how we collect, use, and protect your personal information.",
};

const SECTIONS = [
  {
    title: "1. Introduction",
    body: "Vesper Digitizing (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vesperdigitizing.com, use our digitizing services, or purchase products from our store. We comply with all applicable data protection laws and regulations. By using our services, you consent to the practices described in this policy.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect information that you provide directly to us when you create an account, request a quote, place an order, or contact us. This includes your name, email address, phone number, billing address, and any artwork or design files you upload. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages visited, and the dates and times of your visits. This technical data is collected through cookies and similar tracking technologies.",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use the information we collect to provide and maintain our digitizing services, process your orders and payments, communicate with you about your projects and orders, send you quotes and proofs for approval, provide customer support, send newsletters and promotional materials (if you opt in), improve our website and services, comply with legal obligations, and protect against fraudulent or unauthorized activity. Your uploaded artwork files are used solely for the purpose of creating your digitized designs and are not shared with third parties.",
  },
  {
    title: "4. Information Sharing and Disclosure",
    body: "We do not sell, rent, or trade your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors (Stripe, PayPal), shipping carriers, email service providers, and cloud storage providers. These providers are contractually obligated to protect your information and use it only for the purposes we specify. We may also disclose your information if required by law, court order, or government regulation, or if we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.",
  },
  {
    title: "5. Data Security",
    body: "We implement appropriate technical, administrative, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include SSL/TLS encryption for data transmission, secure servers with access controls, regular security audits, and restricted employee access to personal data on a need-to-know basis. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. Your uploaded design files are stored securely and are only accessible to authorized digitizers working on your project.",
  },
  {
    title: "6. Cookies and Tracking Technologies",
    body: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, remember your preferences, and serve relevant advertisements. You can control cookies through your browser settings and can set your browser to refuse cookies or alert you when cookies are being sent. However, some parts of our website may not function properly without cookies. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period or until you delete them).",
  },
  {
    title: "7. Your Rights and Choices",
    body: "You have the right to access, correct, update, or delete your personal information. You can also opt out of receiving promotional emails by clicking the unsubscribe link in any email we send. To exercise any of these rights, please contact us at support@vesperdigitizing.com. If you are a resident of the European Economic Area (EEA) or California, you have additional rights under the GDPR or CCPA, respectively, including the right to data portability and the right to restrict or object to certain types of processing. We will respond to your request within 30 days of receipt.",
  },
  {
    title: "8. Children's Privacy",
    body: "Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately at support@vesperdigitizing.com, and we will take steps to delete such information. If we learn that we have collected personal information from a child under 13 without parental consent, we will delete that information as quickly as possible.",
  },
  {
    title: "9. Third-Party Links",
    body: "Our website may contain links to third-party websites or services that we do not control. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by Vesper Digitizing through our website and services. We may integrate with third-party services such as Google Maps, social media platforms, and CRM providers, and these services may collect their own data subject to their own privacy policies.",
  },
  {
    title: "10. Changes to This Privacy Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the updated policy on this page and updating the \"Last updated\" date at the top. We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes constitutes acceptance of the updated policy.",
  },
  {
    title: "11. Contact Us",
    body: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at: Vesper Digitizing, 1901 Avenue of the Stars, Suite 2000, Los Angeles, CA 90067, USA. Email: support@vesperdigitizing.com. Phone: +1 (123) 456-7890. We are committed to resolving any privacy-related issues promptly and transparently.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#f5f5f5] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                Legal
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-5xl">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="mt-4 text-sm text-[#6b7280]">
                Last updated: January 2026
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {SECTIONS.map((section, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div>
                    <h2 className="font-display text-lg font-bold text-[#1a1a1a] sm:text-xl">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#6b7280] sm:text-base">
                      {section.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
