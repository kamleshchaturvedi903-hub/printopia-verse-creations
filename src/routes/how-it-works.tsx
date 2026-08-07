import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, canonical } from "@/lib/seo";
import { CtaBand, PageHero, Reveal, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: seo({
      path: "/how-it-works",
      title: "How Custom 3D Printing Works — Our 6-Stage Process | 3D Printopia Verse",
      description:
        "From your first photo to a hand-painted figurine on your shelf: sculpting, 360° preview approval, resin printing, finishing, quality control and insured delivery explained.",
    }),
    links: canonical("/how-it-works"),
  }),
  component: HowItWorks,
});

const stages = [
  {
    n: "01",
    title: "Brief & quote",
    time: "Within 2 hours",
    text: "Send photos or a description through WhatsApp or the enquiry form. We confirm feasibility, recommend a size and finish, and send a fixed price.",
  },
  {
    n: "02",
    title: "Digital sculpting",
    time: "2–4 days",
    text: "A sculptor builds the model in layers: posture, body, clothing with real fabric folds, then the face — which takes the longest and matters the most.",
  },
  {
    n: "03",
    title: "360° preview & approval",
    time: "Same day",
    text: "You receive a turntable render from every angle. Ask for as many changes as you want. Nothing is printed until you say yes.",
  },
  {
    n: "04",
    title: "Printing",
    time: "1–2 days",
    text: "Resin printing at 25-micron layers for display pieces, or PLA+/PETG/ASA for toys and outdoor items. Supports are placed to avoid visible surfaces.",
  },
  {
    n: "05",
    title: "Finishing & painting",
    time: "3–6 days",
    text: "Support removal, UV curing, wet sanding, priming, airbrushed base tones, then fine detail with brushes down to 0.1 mm. Sealed with matte or satin varnish.",
  },
  {
    n: "06",
    title: "QC, packing & delivery",
    time: "1 day + transit",
    text: "Photographed under studio lighting for your approval, packed in cut foam, dispatched with insured tracking across India.",
  },
];

function HowItWorks() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "How It Works" }]}
        eyebrow="The process"
        title="Six stages between your photo and your shelf"
        subtitle="Complete transparency at every step. You approve the design, you see the finished piece photographed, and only then does it ship."
      />

      <section className="container-lux py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="h-full rounded-3xl border bg-card p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-5xl font-bold leading-none text-gradient opacity-40">
                    {s.n}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                    {s.time}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Materials"
            title="We choose the material for the job, not the margin"
            subtitle="Tell us how the piece will be used and we'll recommend a material that still looks good in five years."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                m: "Photopolymer resin",
                use: "Display figurines, collectibles, faces",
                why: "25-micron detail, captures eyelashes and fabric weave.",
              },
              {
                m: "PLA+ / PETG",
                use: "Kids' toys, articulated models",
                why: "Impact resistant, child-safe, survives being dropped.",
              },
              {
                m: "ASA",
                use: "Nameplates, planters, outdoor decor",
                why: "UV stable — resists yellowing in Indian sunlight.",
              },
            ].map((x) => (
              <div key={x.m} className="rounded-3xl border bg-card p-7">
                <h3 className="font-display text-base font-semibold text-ink">{x.m}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  {x.use}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.why}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/custom-orders">Start your order</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
