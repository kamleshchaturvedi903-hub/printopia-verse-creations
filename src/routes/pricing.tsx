import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero, Reveal, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: seo({
      title: "3D Printing Prices in India — Figurine Cost Guide | 3D Printopia Verse",
      description:
        "Transparent pricing for custom 3D printed figurines with 20% off: single person from ₹2,799, couples from ₹3,999, pets from ₹1,999, corporate gifting from ₹639 per unit.",
    }),
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Signature",
    price: "₹2,799",
    unit: "per figure",
    text: "One person, 10 cm tall, hand-painted with a plain base. The perfect first order.",
    features: ["10 cm height", "Single figure", "Hand-painted finish", "360° preview", "8–12 day delivery"],
  },
  {
    name: "Premium",
    price: "₹5,599",
    unit: "per piece",
    featured: true,
    text: "Our most-ordered tier: two figures or one highly detailed 15 cm sculpt with props.",
    features: [
      "15 cm height",
      "Up to 2 figures or 1 figure + pet",
      "Props and accessories included",
      "Engraved acrylic base",
      "Priority 8-day production",
      "Free protective display dome",
    ],
  },
  {
    name: "Masterpiece",
    price: "₹10,399+",
    unit: "quoted individually",
    text: "Family groups, wedding scenes and 20 cm+ collector statues with effect parts.",
    features: [
      "20 cm+ height",
      "3+ figures or complex scenes",
      "Effect parts & lit display base",
      "Dedicated senior sculptor",
      "Studio photography of your piece",
    ],
  },
];

const table = [
  ["Pet miniature (8–10 cm)", "₹1,999 – ₹3,199"],
  ["Single person figurine (10–15 cm)", "₹2,799 – ₹4,399"],
  ["Couple statue / cake topper", "₹3,999 – ₹5,599"],
  ["Anime / gaming collectible (20 cm)", "₹4,399 – ₹7,199"],
  ["Family group (3–5 figures)", "₹7,199 – ₹15,199"],
  ["Scale vehicle model (1:24)", "₹3,439 – ₹5,999"],
  ["Articulated toy / robot", "₹1,039 – ₹1,999"],
  ["Corporate award (25+ units)", "₹639 – ₹1,519 per unit"],
  ["Personalised keychains (pack of 10)", "₹719"],
  ["LED nameplate", "₹1,199 – ₹2,799"],
];

function Pricing() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Pricing" }]}
        eyebrow="Pricing"
        title="Real prices, published openly"
        subtitle="Custom work is quoted individually, but you shouldn't have to fill in a form to find out roughly what something costs. Here's the honest range."
      />

      <section className="container-lux py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-4xl border p-8 ${p.featured ? "bg-night text-primary-foreground shadow-glow" : "bg-card"}`}
              >
                {p.featured && (
                  <span className="mb-4 w-max rounded-full bg-spark px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h2
                  className={`font-display text-lg font-bold ${p.featured ? "text-primary-foreground" : "text-ink"}`}
                >
                  {p.name}
                </h2>
                <p
                  className={`mt-4 font-display text-4xl font-bold ${p.featured ? "text-primary-foreground" : "text-ink"}`}
                >
                  {p.price}
                </p>
                <p className={`text-xs ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.unit}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {p.text}
                </p>
                <ul
                  className={`mt-6 flex-1 grid gap-2.5 text-sm ${p.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.featured ? "onDark" : "hero"}
                  className="mt-8 w-full"
                >
                  <Link to="/custom-orders">Get this quoted</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Price list"
            title="What things typically cost"
            subtitle="Prices include design, printing, hand-finishing and standard packaging. Shipping is calculated at checkout."
          />
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border bg-card">
            {table.map(([item, price], i) => (
              <div
                key={item}
                className={`flex items-center justify-between gap-4 px-6 py-4 text-sm ${i % 2 ? "bg-muted/40" : ""}`}
              >
                <span className="text-foreground">{item}</span>
                <span className="shrink-0 font-semibold text-ink">{price}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
            Rush production adds 25%. International shipping from ₹1,800 depending on
            destination and insured value. GST applicable as per Indian tax law.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want an exact number for your idea?"
        text="Send the details and get a fixed quote in two working hours."
      />
    </>
  );
}
