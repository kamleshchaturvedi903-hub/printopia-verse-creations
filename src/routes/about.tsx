import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, Layers, Users } from "lucide-react";
import { company, images, stats } from "@/lib/site";
import { seo, canonical } from "@/lib/seo";
import { Counter, CtaBand, PageHero, Reveal, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seo({
      path: "/about",
      title: "About Our 3D Printing Studio in Ahmedabad | 3D Printopia Verse",
      description:
        "Meet the sculptors, painters and engineers behind 3D Printopia Verse — a premium custom 3D printing studio in Vastrapur, Ahmedabad serving customers across India.",
    }),
    links: canonical("/about"),
  }),
  component: About,
});

const values = [
  {
    icon: Layers,
    title: "Craft over speed",
    text: "A face takes three hours to paint. We don't rush it, and we don't outsource it.",
  },
  {
    icon: HeartHandshake,
    title: "Honest quotes",
    text: "Fixed price before work begins. No hidden finishing charges, ever.",
  },
  {
    icon: Users,
    title: "You approve everything",
    text: "Nothing goes to the printer until you've seen and signed off the 360° preview.",
  },
  {
    icon: Award,
    title: "Replace, don't argue",
    text: "If a piece arrives damaged, a replacement goes into production the same day.",
  },
];

function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        eyebrow="About us"
        title="A studio built by people who couldn't stop tinkering"
        subtitle="3D Printopia Verse began with one desktop printer in a Vastrapur apartment and a stubborn belief that personalised gifts in India could look as good as anything imported."
      />

      <section className="container-lux grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <img
            src={images.hero}
            alt="3D printed miniature figurines produced at the 3D Printopia Verse studio"
            loading="lazy"
            decoding="async"
            width={1600}
            height={1000}
            className="aspect-4/3 w-full rounded-4xl border object-cover shadow-lift"
          />
        </Reveal>
        <div>
          <h2 className="font-display text-3xl font-bold text-ink">What we actually do all day</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We turn photographs into physical objects. That sounds simple until you try to sculpt
            someone's grandmother from four blurry photos and get the smile right.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our team of sculptors, print technicians and miniature painters handles every stage
            in-house: digital sculpting, resin printing at 25 microns, support removal, curing,
            sanding, priming, airbrushing, detail work and packing. Nothing is sent to a third-party
            workshop.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Today we deliver across {company.countries.join(", ")} — but the studio is still in
            Ahmedabad, and you can still walk in and watch a print run.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero">
              <Link to="/our-story">Read our story</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Visit the studio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-lux">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-20">
        <SectionHeading
          eyebrow="How we work"
          title="Four rules we don't break"
          subtitle="They cost us money occasionally. They're the reason customers come back."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full rounded-3xl border bg-card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
