import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GharVerify collects, uses, protects, and retains your personal and property documentation.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      updated="13 June 2026"
      intro="Your documents underpin your largest financial decision. This policy explains, in plain language, what we collect, why, and how we protect it."
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you provide directly: your name, contact details, and the property and documentation you submit for verification — including sale deeds, agreements, encumbrance certificates, approvals, and identity proofs.",
            "We also collect limited technical data (such as device and usage information) to operate and secure the platform.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information solely to deliver verification services: to authenticate documents, reconcile records against government sources, screen for litigation and encumbrances, generate your risk report, and communicate with you about your file.",
            "We do not sell your data, and we do not share your documents with sellers, brokers, or third parties except as required to complete a verification you have requested, or where compelled by law.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "Your documents are encrypted in transit (TLS) and at rest (AES-256), isolated to your private vault, access-controlled on a least-privilege basis, and protected by tamper-evident logging.",
            "Access to verification files is restricted to assigned personnel, and every access event is recorded for audit.",
          ],
        },
        {
          heading: "Data Retention",
          body: [
            "We retain verification records for the period necessary to deliver our services, support any subsequent dispute, and meet legal and regulatory obligations. You may request deletion of your personal data subject to these obligations.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information, and you may withdraw consent for future processing. To exercise these rights, contact us at secure@gharverify.com.",
          ],
        },
        {
          heading: "Cookies & Analytics",
          body: [
            "We use essential cookies to operate the site and limited analytics to improve it. You can control cookies through your browser settings.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this policy from time to time. Material changes will be reflected by an updated revision date at the top of this page.",
          ],
        },
      ]}
    />
  );
}
