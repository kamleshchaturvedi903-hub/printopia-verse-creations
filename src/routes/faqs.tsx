import { createFileRoute } from "@tanstack/react-router";
import { faqs, company } from "@/lib/site";
import { seo, faqSchema, canonical } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: seo({
      path: "/faqs",
      title: "FAQs — Custom 3D Printing Questions Answered | 3D Printopia Verse",
      description:
        "How many photos do we need? How much does a figurine cost? How long does delivery take? Answers to the questions customers ask before ordering custom 3D printed gifts.",
    }),
    links: canonical("/faqs"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) }],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "FAQs" }]}
        eyebrow="Support"
        title="Frequently asked questions"
        subtitle="Everything about photos, pricing, materials, timelines and shipping — answered plainly."
      />

      <section className="container-lux py-16">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold text-ink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-3xl border bg-card p-8 text-center">
            <h2 className="font-display text-xl font-bold text-ink">Still have a question?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A real designer answers our WhatsApp, {company.hours}.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero">
                <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                  Message on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={company.phoneHref}>Call {company.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
