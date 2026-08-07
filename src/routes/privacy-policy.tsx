import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";
import { seo, canonical } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: seo({
      path: "/privacy-policy",
      title: "Privacy Policy | 3D Printopia Verse",
      description:
        "How 3D Printopia Verse collects, uses, stores and protects your personal data, photographs and reference files when you order custom 3D printed products.",
    }),
    links: canonical("/privacy-policy"),
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="1 July 2026"
      intro="We handle personal photographs every single day. Here is exactly what we do with them, and what we never do."
      sections={[
        {
          heading: "1. Information we collect",
          body: [
            "We collect the information you give us directly: your name, email address, phone number, delivery address, billing details, and the photographs or 3D files you upload for your order.",
            "We also collect basic technical data such as browser type, device type and pages visited, using analytics cookies that you can decline through our cookie banner.",
          ],
        },
        {
          heading: "2. How we use your photographs",
          body: [
            "Photographs and reference files are used solely to design and produce your order. They are shared only with the sculptors and print technicians working on your piece.",
            "We never sell, licence or publish your photographs. We will only feature a finished piece in our gallery or on social media if you give explicit written permission.",
          ],
        },
        {
          heading: "3. Data retention",
          body: [
            "Order photographs and 3D models are retained for 24 months so that reprints and repairs are possible, then permanently deleted. You may request earlier deletion at any time by emailing " +
              company.email +
              ".",
          ],
        },
        {
          heading: "4. Payments",
          body: [
            "Payments are processed by regulated third-party payment gateways. We never see or store your full card details on our servers.",
          ],
        },
        {
          heading: "5. Your rights",
          body: [
            "You can request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it. Write to " +
              company.email +
              " and we will respond within 30 days.",
          ],
        },
        {
          heading: "6. Contact",
          body: [
            company.name +
              ", " +
              company.address +
              ". Phone: " +
              company.phone +
              ". Email: " +
              company.email +
              ".",
          ],
        },
      ]}
    />
  ),
});
