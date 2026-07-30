import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: seo({
      title: "Refund & Cancellation Policy | 3D Printopia Verse",
      description:
        "When you can cancel a custom 3D printing order, how refunds are calculated at each production stage, and how quickly money is returned to your account.",
    }),
  }),
  component: () => (
    <LegalPage
      eyebrow="Support"
      title="Refund Policy"
      updated="1 July 2026"
      intro="Custom work carries real cost from the moment sculpting begins. This policy explains exactly what is refundable, and when."
      sections={[
        {
          heading: "1. Cancellation before sculpting",
          body: [
            "Cancel within 24 hours of placing your order, before design work starts, and you receive a 100% refund with no deduction.",
          ],
        },
        {
          heading: "2. Cancellation during sculpting",
          body: [
            "Once a sculptor has started, 70% of the amount paid is refundable. The retained 30% covers design hours already invested.",
          ],
        },
        {
          heading: "3. Cancellation after preview approval",
          body: [
            "After you approve the 360° preview, printing and material costs are committed and the order is non-refundable. We will always try to adapt the piece instead — talk to us first.",
          ],
        },
        {
          heading: "4. Quality issues",
          body: [
            "If a delivered piece does not match the approved preview, we remake it free of charge or issue a full refund, at your choice. Report it within 7 days of delivery with photographs.",
          ],
        },
        {
          heading: "5. Refund processing",
          body: [
            "Approved refunds are initiated within 3 working days and reach your original payment method within 5–10 working days depending on your bank.",
          ],
        },
        {
          heading: "6. How to request a refund",
          body: [
            "Email " +
              company.email +
              " with your order number and reason, or call " +
              company.phone +
              " during studio hours. A human reviews every request — no automated rejections.",
          ],
        },
      ]}
    />
  ),
});
