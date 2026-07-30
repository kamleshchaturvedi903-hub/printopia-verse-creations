import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Building2, Package, Timer } from "lucide-react";
import { clients, images } from "@/lib/site";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero, Reveal, SectionHeading } from "@/components/site/ui";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/business-gifts")({
  head: () => ({
    meta: seo({
      title: "Corporate Gifts & Branded 3D Printed Awards in Bulk | 3D Printopia Verse",
      description:
        "Custom 3D printed corporate gifts, branded trophies, desk awards, nameplates and employee gifting from 25 to 5,000 units. Brand-colour matched, individually engraved, delivered worldwide.",
    }),
  }),
  component: Business,
});

const tiers = [
  { units: "25 – 99 units", perks: ["Custom design included", "Brand colour matching", "7–12 day dispatch"], price: "from ₹1,899/unit" },
  { units: "100 – 499 units", perks: ["Dedicated account manager", "Individual name engraving", "Gift boxing included"], price: "from ₹1,299/unit" },
  { units: "500+ units", perks: ["Volume pricing", "Multi-address dispatch", "Annual design refresh"], price: "custom quote" },
];

const useCases = [
  { icon: Building2, title: "Client gifting", text: "Desk pieces built around your product or logo geometry — the kind that stay on a shelf for years." },
  { icon: Boxes, title: "Employee awards", text: "Recognition trophies with individually engraved names, no minimum per design." },
  { icon: Package, title: "Event giveaways", text: "Keychains, badges and miniatures for conferences, launches and exhibitions." },
  { icon: Timer, title: "Rush programmes", text: "Tight deadline? We've delivered 300-unit programmes in eighteen days." },
];

function Business() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Business Gifts" }]}
        eyebrow="Corporate & bulk"
        title="Branded gifts that don't end up in a drawer"
        subtitle="3D printing removes tooling costs, so you can order 25 units as economically as 500 — with geometry no moulded gift can match."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Request a corporate quote</Link>
        </Button>
      </PageHero>

      <section className="container-lux grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <img
            src={images.corporate}
            alt="Custom branded 3D printed corporate trophy, nameplate and keychain"
            loading="lazy"
            width={900}
            height={900}
            className="aspect-4/3 w-full rounded-4xl border object-cover shadow-lift"
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {useCases.map((u, i) => (
            <Reveal key={u.title} delay={i * 70}>
              <div className="h-full rounded-3xl border bg-card p-6">
                <u.icon className="h-5 w-5 text-primary" />
                <h2 className="mt-4 font-display text-base font-semibold text-ink">
                  {u.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Volume pricing"
            title="Transparent tiers, no tooling charges"
            subtitle="Final pricing depends on size, finish and packaging. Every quote is fixed before production starts."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.units} delay={i * 80}>
                <div className="h-full rounded-3xl border bg-card p-8">
                  <p className="font-display text-lg font-bold text-ink">{t.units}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">{t.price}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                    {t.perks.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-16 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Recent corporate clients
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="font-display text-base font-semibold text-muted-foreground/60">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-20">
        <div className="mx-auto max-w-2xl">
          <QuoteForm
            title="Corporate enquiry"
            intro="Tell us the quantity, the occasion and your deadline. Bulk quotes are returned the same working day."
          />
        </div>
      </section>

      <CtaBand
        title="Planning your annual gifting calendar?"
        text="Book a 20-minute call and we'll design three concepts for free."
      />
    </>
  );
}
