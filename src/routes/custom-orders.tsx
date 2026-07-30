import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, ShieldCheck } from "lucide-react";
import { company } from "@/lib/site";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/ui";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/custom-orders")({
  head: () => ({
    meta: seo({
      title: "Custom 3D Printing Orders & Free Quote Request | 3D Printopia Verse",
      description:
        "Upload your photos or 3D files and get a fixed custom 3D printing quote within 2 working hours. Bespoke figurines, collectibles, prototypes and bulk gifting.",
    }),
  }),
  component: CustomOrders,
});

const promises = [
  { icon: Clock, title: "2-hour response", text: "Every enquiry receives a real reply from a designer within two working hours." },
  { icon: ShieldCheck, title: "Fixed quotes", text: "The price you approve is the price you pay. No finishing surcharges." },
  { icon: Check, title: "Approve before print", text: "You see a 360° render first. Revisions at that stage are unlimited and free." },
];

const checklist = [
  "6–10 photographs per person (front, both profiles, three-quarter, full body)",
  "Reference images of outfits, poses or products",
  "Preferred height and finish (matte, satin or gloss)",
  "Any text for an engraved base",
  "Your delivery deadline and destination country",
  "STL/OBJ files if you already have a 3D model",
];

function CustomOrders() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Custom Orders" }]}
        eyebrow="Custom orders"
        title="Tell us what you're imagining"
        subtitle="Whether it's one figurine of your grandmother or 500 branded awards, the process starts the same way — with a conversation and a free quote."
      />

      <section className="container-lux grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            What to send us
          </h2>
          <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
            {checklist.map((c) => (
              <li key={c} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4">
            {promises.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-3xl border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-spark p-6 text-primary-foreground">
            <p className="font-display text-lg font-bold">Prefer to talk it through?</p>
            <p className="mt-2 text-sm opacity-90">
              Call {company.phone} or message us on WhatsApp — Monday to Saturday, 10 AM to 8
              PM IST.
            </p>
          </div>
        </div>

        <QuoteForm
          title="Custom order & quote request"
          intro="Fill this in once and we'll take it from there. Attach as many reference images as you like."
        />
      </section>

      <CtaBand
        title="Bulk order? Corporate programme?"
        text="Volume enquiries get a same-day quote and a dedicated account manager."
      />
    </>
  );
}
