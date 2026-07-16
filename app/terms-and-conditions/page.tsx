import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vesper Digitizing",
  description:
    "Terms and Conditions for Vesper Digitizing — the terms governing your use of our embroidery digitizing services and online store.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Vesper Digitizing website (vesperdigitizing.com) and our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services. These terms apply to all visitors, users, and customers who access or use our digitizing services, vector conversion, patch manufacturing, or online store. Your continued use of our services constitutes acceptance of any updated or modified terms.",
  },
  {
    title: "2. Services Provided",
    body: "Vesper Digitizing provides professional embroidery digitizing services, including but not limited to: left chest logos, cap digitizing, jacket back designs, 3D puff digitizing, applique digitizing, Patches, and custom embroidery. We also offer raster-to-vector conversion services and custom patch manufacturing. All services are subject to availability, and we reserve the right to refuse or decline any project at our discretion. Delivery timelines are estimates and may vary based on project complexity and current workload. Rush delivery (under 12 hours) is available for an additional 30% fee.",
  },
  {
    title: "3. Orders and Payment",
    body: "When you place an order for our digitizing services, you agree to provide accurate and complete information, including design files, specifications, and contact details. Payment is due upon approval of the final proof for digitizing services. For store purchases, payment is due at checkout. We accept major credit cards, PayPal, and other payment methods as displayed on our website. All prices are listed in US Dollars (USD) unless otherwise stated. Prices are subject to change without prior notice, but any order already placed will be charged the price in effect at the time of order placement.",
  },
  {
    title: "4. Artwork and Intellectual Property",
    body: "You warrant that any artwork, logos, designs, or files you submit to us for digitizing or vector conversion do not infringe upon the intellectual property rights of any third party. You retain full ownership of your submitted artwork. Upon completion of services and full payment, the digitized files and vector art become your property. Vesper Digitizing retains the right to display completed work in our portfolio and marketing materials unless you explicitly request otherwise in writing. We do not claim ownership of your original designs, but we own the digitizing technique and stitch file methodology used to create the final product.",
  },
  {
    title: "5. Revisions and Approvals",
    body: "We offer free unlimited revisions on all digitizing and vector conversion projects until the proof matches your requirements. Revisions must be requested within 7 days of receiving the initial proof. After 7 days, the project is considered approved and additional changes may incur charges. For physical patch manufacturing, revisions to the digitized file must be completed before production begins. Once production starts, changes to the physical patch (size, backing, colors) cannot be made without additional charges. You are responsible for carefully reviewing all proofs before approving them for production.",
  },
  {
    title: "6. Delivery and Turnaround",
    body: "Standard turnaround time for digitizing services is 24 hours from the time of order confirmation. Rush delivery (under 12 hours) is available for an additional 30% fee. Vector conversion services typically take 24-48 hours depending on complexity. Physical patch manufacturing takes 7-10 business days after file approval and payment. Digital files are delivered via email or download link. We are not liable for delays caused by incomplete artwork, unclear instructions, or circumstances beyond our control. If we fail to meet the stated turnaround time, you may request a partial refund of the rush fee (if applicable), but standard turnaround times are estimates and not guaranteed.",
  },
  {
    title: "7. Store Purchases and Downloads",
    body: "Products purchased from our online store are digital downloads available immediately after payment confirmation. Due to the nature of digital products, all sales are final and non-refundable once the download link has been accessed. You are granted a commercial-use license for all store purchases, allowing you to use the designs for personal and commercial embroidery projects. You may not resell, redistribute, or share the digital files themselves. All store products come with a commercial-use license unless otherwise stated on the product page.",
  },
  {
    title: "8. Refund Policy",
    body: "For digitizing and vector conversion services: If you are not satisfied with the initial proof, we offer unlimited free revisions. If we are unable to meet your requirements after reasonable revisions, you may request a full refund before the final files are delivered. Once final files are delivered and downloaded, refunds are no longer available. For store purchases: Due to the digital nature of our products, refunds are not available after download. If you experience a technical issue with a downloaded file, contact us within 7 days for a replacement or resolution. Physical patch orders: Refunds are not available once production has begun. If patches are defective or do not match the approved proof, we will reprint or refund the defective items.",
  },
  {
    title: "9. Limitation of Liability",
    body: "Vesper Digitizing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim arising from our services shall not exceed the amount you paid for the specific service that gave rise to the claim. We are not responsible for any damage to materials, garments, or equipment resulting from the use of our digitized files. It is your responsibility to test the digitized files on your equipment and materials before full production runs. We are not liable for delays, service interruptions, or data loss caused by circumstances beyond our control, including natural disasters, server failures, or internet outages.",
  },
  {
    title: "10. Confidentiality",
    body: "We respect the confidentiality of your designs, logos, and business information. All files you submit to us are treated as confidential and are only accessible to the digitizers and staff working on your project. We do not share, sell, or distribute your design files to third parties. We may showcase completed work in our portfolio, but we will not display your designs if you request confidentiality in writing. Our staff is bound by confidentiality agreements, and we maintain secure storage for all client files. Files are retained for 90 days after project completion for revision purposes and are then permanently deleted unless you request long-term storage.",
  },
  {
    title: "11. Governing Law and Disputes",
    body: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of California, United States of America, without regard to its conflict of law provisions. Any disputes arising from or relating to these terms or our services shall be resolved through good-faith negotiations first. If the dispute cannot be resolved through negotiation, it shall be submitted to binding arbitration in Los Angeles, California. You agree to submit to the personal jurisdiction of the courts located in Los Angeles County, California, for any legal proceedings that fall outside the scope of arbitration.",
  },
  {
    title: "12. Changes to Terms",
    body: "We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated revision date. Your continued use of our services after any changes constitutes acceptance of the revised terms. We encourage you to review these terms periodically. If material changes are made, we may also notify you via email or through a prominent notice on our website. It is your responsibility to stay informed about any updates to these terms.",
  },
  {
    title: "13. Contact Information",
    body: "If you have any questions or concerns about these Terms and Conditions, please contact us at: Vesper Digitizing, 1901 Avenue of the Stars, Suite 2000, Los Angeles, CA 90067, USA. Email: support@vesperdigitizing.com. Phone: +1 (123) 456-7890. Our business hours are Monday through Saturday, 9:00 AM to 7:00 PM (Pacific Time). We are committed to providing transparent and fair terms for all our customers.",
  },
];

export default function TermsPage() {
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
                Terms &amp; <span className="text-gradient">Conditions</span>
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
