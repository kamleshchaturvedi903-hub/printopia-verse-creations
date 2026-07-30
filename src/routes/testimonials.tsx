import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { testimonials, stats } from "@/lib/site";
import { seo } from "@/lib/seo";
import { Counter, CtaBand, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: seo({
      title: "Customer Reviews of Our 3D Printed Figurines | 3D Printopia Verse",
      description:
        "Read verified reviews from customers in India, the UK, UAE and Canada who ordered personalised 3D printed figurines, pet miniatures, wedding toppers and corporate gifts.",
    }),
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Testimonials" }]}
        eyebrow="Reviews"
        title="4.9 out of 5, from 1,800+ orders"
        subtitle="We ask every customer for an honest review after delivery. These are unedited."
      />

      <section className="container-lux py-16">
        <div className="grid gap-8 rounded-4xl border bg-card p-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <figure className="break-inside-avoid rounded-3xl border bg-card p-7">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-ink">
                  {t.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Join 18,500 happy customers"
        text="Send your photos today and see why people keep coming back."
      />
    </>
  );
}
