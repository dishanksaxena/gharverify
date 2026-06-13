import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing your use of GharVerify's property verification services.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="13 June 2026"
      intro="These terms govern your use of GharVerify's website and verification services. By engaging us, you agree to them."
      sections={[
        {
          heading: "Scope of Services",
          body: [
            "GharVerify provides property verification services, including legal due diligence, title and registry verification, litigation screening, and registration support, as described on this website and in your engagement.",
            "The specific scope of any verification is defined by the plan and modules you select and by the documents and records reasonably available for the property in question.",
          ],
        },
        {
          heading: "Nature of Our Reports",
          body: [
            "Our reports provide an evidence-based assessment of discoverable risk as of the date of the report. They are not a guarantee of clear title, a warranty of the property, or a substitute for independent legal advice on your specific circumstances.",
            "Verification depends on the accuracy, completeness, and availability of source documents and government records, some of which may be incomplete, delayed, or inaccessible.",
          ],
        },
        {
          heading: "Your Responsibilities",
          body: [
            "You agree to provide accurate, complete, and lawfully obtained documents and information. You are responsible for the final decision to proceed with, renegotiate, or abandon any transaction.",
            "You must not use our services for any unlawful purpose or to misrepresent ownership or property status.",
          ],
        },
        {
          heading: "Fees & Payment",
          body: [
            "Fees are as quoted for your selected scope and are payable as set out in your engagement. Government fees, stamp duty, and registration charges are statutory and separate from our service fees. Applicable taxes (including GST) apply.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "To the maximum extent permitted by law, GharVerify's liability arising from any verification is limited to the fees paid for that verification. We are not liable for losses arising from facts that were not discoverable through the agreed scope, from inaccurate information you provided, or from your independent decisions.",
          ],
        },
        {
          heading: "Confidentiality",
          body: [
            "We treat your documents and information as confidential and handle them in accordance with our Privacy Policy.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These terms are governed by the laws of India, and the courts of Lucknow, Uttar Pradesh shall have jurisdiction over any dispute, subject to applicable law.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For any questions about these terms, contact us at secure@gharverify.com.",
          ],
        },
      ]}
    />
  );
}
