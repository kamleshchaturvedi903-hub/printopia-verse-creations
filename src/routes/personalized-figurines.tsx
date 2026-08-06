import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Check, Palette, Sparkles } from "lucide-react";
import { images, products } from "@/lib/site";
import { seo, faqSchema } from "@/lib/seo";
import { CtaBand, PageHero, ProductCard, Reveal, SectionHeading } from "@/components/site/ui";
import { QuoteForm } from "@/components/site/QuoteForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const pageFaqs = [
  {
    q: "Will it actually look like the person?",
    a: "Yes — that is the entire product. With 6–10 good photographs our sculptors reliably capture likeness, and you see a 360° preview before printing so you can request changes.",
  },
  {
    q: "Can you sculpt someone who has passed away?",
    a: "We do this often, and we treat it with care. Older or lower-resolution photographs are fine; our artists reconstruct detail and share previews at every stage.",
  },
  {
    q: "How tall are personalised figurines?",
    a: "Standard heights are 10 cm, 15 cm and 20 cm. Larger commissions up to 40 cm are quoted individually.",
  },
  {
    q: "Can you add pets, props or text to the base?",
    a: "Yes. Pets, musical instruments, bikes, trophies and engraved base text are all popular additions and priced per element.",
  },
];

export const Route = createFileRoute("/personalized-figurines")({
  head: () => ({
    meta: seo({
      title: "Personalised 3D Printed Figurines From Your Photos | 3D Printopia Verse",
      description:
        "Custom human figurines sculpted from your photographs — miniature you, couples, families, babies and pets. Hand-painted resin, free 360° preview, delivery in 8–14 days.",
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(pageFaqs)) }],
  }),
  component: Personalized,
});

const steps = [
  {
    icon: Camera,
    title: "Send photos",
    text: "6–10 clear shots: front, both profiles, three-quarter and one full-body.",
  },
  {
    icon: Sparkles,
    title: "We sculpt",
    text: "A digital artist builds face, hair, outfit and posture, then sends a 360° render.",
  },
  {
    icon: Palette,
    title: "Print & paint",
    text: "25-micron resin printing, then hand-painting down to eye colour and jewellery.",
  },
];

function Personalized() {
  const featured = products.filter((p) =>
    [
      "mini-me-family-portrait",
      "superhero-action-figure",
      "baby-memory-figurine",
      "pet-miniature-portrait",
    ].includes(p.slug),
  );

  return (
    <>
      <PageHero
        crumbs={[{ label: "Personalized Figurines" }]}
        eyebrow="Personalised figurines"
        title="A miniature of you, sculpted from photographs"
        subtitle="The most personal object you can give someone: themselves, at this exact moment in their life, in their favourite outfit, at 15 cm tall."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero" size="lg">
            <Link to="/custom-orders">Start my figurine</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/pricing">See pricing</Link>
          </Button>
        </div>
      </PageHero>

      <section className="container-lux py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.hero}
              alt="Personalised 3D printed family figurines hand-painted in resin"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1000}
              className="aspect-4/3 w-full rounded-4xl border object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              Likeness is a craft, not a setting
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Automated photo-to-3D scanning produces something that resembles a person. Hand
              sculpting produces something that <em>is</em> the person — the asymmetry of a smile,
              the way a shirt sits on the shoulders, the exact curl of the hair.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm text-muted-foreground">
              {[
                "Sculpted by hand from your photographs — never auto-generated",
                "Outfits, accessories and hairstyles matched individually",
                "Optional engraved base with names and dates",
                "Free unlimited revisions before printing begins",
                "Delivered in protective cut foam with insured tracking",
              ].map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-lux">
          <SectionHeading eyebrow="The process" title="Three steps, two hours of your time" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-3xl border bg-card p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-20">
        <SectionHeading eyebrow="Popular" title="Most-ordered personalised pieces" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="container-lux grid gap-12 pb-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            Questions about personalised figurines
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {pageFaqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold text-ink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <QuoteForm title="Get a figurine quote" compact />
      </section>

      <CtaBand />
    </>
  );
}
