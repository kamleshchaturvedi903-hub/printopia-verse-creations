import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/shipping-returns")({
  head: () => ({
    meta: seo({
      title: "Shipping & Returns Policy | 3D Printopia Verse",
      description:
        "Delivery timelines and costs across India, plus how returns and damage replacements work for custom 3D printed products.",
    }),
  }),
  component: () => (
    <LegalPage
      eyebrow="Support"
      title="Shipping & Returns"
      updated="1 July 2026"
      intro="How your piece travels, what it costs, and what happens in the rare event that something arrives damaged."
      sections={[
        {
          heading: "1. Dispatch timelines",
          body: [
            "Ready-made items dispatch within 2 working days. Custom figurines dispatch after production, typically 8–14 working days from design approval. Wedding and large group commissions take 14–18 working days.",
          ],
        },
        {
          heading: "2. Shipping within India",
          body: [
            "Standard insured courier is free on orders above ₹3,000 and ₹149 below that. Metro delivery takes 2–4 days, other locations 4–6 days. Every shipment is fully tracked.",
          ],
        },
        {
          heading: "3. International shipping",
          body: [
            "We deliver to every serviceable pin code in India. Standard delivery is free above ₹2,499; below that it is ₹149. Transit is typically 2–3 working days to metro cities and 3–6 working days elsewhere after dispatch.",
            "Import duties and local taxes, where applicable, are payable by the recipient.",
          ],
        },
        {
          heading: "4. Packaging",
          body: [
            "Every figurine ships in cut foam inside a double-walled carton. Fragile elements are separately braced, and display domes are boxed independently.",
          ],
        },
        {
          heading: "5. Damage in transit",
          body: [
            "Photograph the outer packaging and the item and email us within 48 hours of delivery at " +
              company.email +
              ". A replacement goes into production the same working day at no cost to you.",
          ],
        },
        {
          heading: "6. Returns",
          body: [
            "Ready-made catalogue items can be returned unused within 7 days of delivery for a full refund less return shipping.",
            "Personalised and custom-made pieces cannot be returned for change of mind, because they cannot be resold. Our free preview-approval stage exists precisely to avoid that situation.",
          ],
        },
      ]}
    />
  ),
});
