import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: seo({
      title: "Terms & Conditions | 3D Printopia Verse",
      description:
        "The terms governing custom 3D printing orders with 3D Printopia Verse: quotations, approvals, intellectual property, production timelines, payment and liability.",
    }),
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="1 July 2026"
      intro="Plain-language terms covering how orders are quoted, approved, produced and delivered."
      sections={[
        {
          heading: "1. Quotations and orders",
          body: [
            "All quotations are valid for 15 days. An order is confirmed once you approve the quotation and pay the applicable advance — normally 50% for custom work and 100% for orders under ₹2,000.",
          ],
        },
        {
          heading: "2. Design approval",
          body: [
            "We share a 360° digital preview before printing. Revisions requested at this stage are free and unlimited within reason. Once you approve the preview, production begins and design changes may incur additional charges.",
          ],
        },
        {
          heading: "3. Intellectual property",
          body: [
            "You confirm that you own or have permission to use any photographs, artwork, logos or characters you send us. We decline commissions that infringe third-party copyright or trademarks.",
            "We retain copyright in original sculpts created by our artists, and grant you unlimited personal use of the physical piece you purchase.",
          ],
        },
        {
          heading: "4. Timelines",
          body: [
            "Stated production times are working days and begin from design approval, not order placement. Courier transit is additional. We flag any delay proactively.",
          ],
        },
        {
          heading: "5. Handmade variation",
          body: [
            "Every piece is hand-finished. Minor variation in paint tone, layer texture and base finish is inherent to the craft and is not considered a defect.",
          ],
        },
        {
          heading: "6. Liability",
          body: [
            "Our liability for any order is limited to the value of that order. We are not liable for indirect losses arising from courier delays outside our control.",
          ],
        },
        {
          heading: "7. Governing law",
          body: [
            "These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Ahmedabad, Gujarat. Queries: " +
              company.email +
              ".",
          ],
        },
      ]}
    />
  ),
});
