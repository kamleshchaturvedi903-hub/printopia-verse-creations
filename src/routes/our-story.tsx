import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: seo({
      title: "Our Story — From One Printer to a Pan-India Studio | 3D Printopia Verse",
      description:
        "The story of 3D Printopia Verse: how a hobby printer in a Vastrapur apartment grew into a premium custom 3D printing studio delivering personalised figurines across India.",
      type: "article",
    }),
  }),
  component: Story,
});

const timeline = [
  {
    year: "2019",
    title: "One printer, one obsession",
    text: "It started with a single FDM printer bought to make a birthday gift. The gift took eleven failed attempts. The twelfth made someone cry — the good kind — and that was that.",
  },
  {
    year: "2021",
    title: "The first hundred figurines",
    text: "Word spread through family WhatsApp groups. We learned the hard lessons early: photographs matter more than software, and a bad paint job ruins a perfect print.",
  },
  {
    year: "2022",
    title: "Resin changes everything",
    text: "Moving to high-resolution resin printing at 25 microns unlocked facial likeness. For the first time, customers recognised themselves instantly. Orders tripled in six months.",
  },
  {
    year: "2023",
    title: "Corporate India comes calling",
    text: "A pharma company asked for 300 branded awards in three weeks. We delivered in eighteen days. Corporate gifting is now a third of our business.",
  },
  {
    year: "2024",
    title: "Going global",
    text: "Insured courier partnerships opened up every serviceable pin code in India. Families from Kochi to Guwahati started sending us photos.",
  },
  {
    year: "2026",
    title: "18,500 pieces and counting",
    text: "Same studio, same city, same rule: nothing ships unless it looks right under studio lighting.",
  },
];

function Story() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Our Story" }]}
        eyebrow="Our story"
        title="Eleven failed prints, one very good gift"
        subtitle="Every studio has an origin story. Ours involves a lot of wasted filament and one stubborn refusal to give up on a birthday present."
      />

      <section className="container-lux py-20">
        <div className="mx-auto max-w-3xl">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 60}>
              <div className="relative grid grid-cols-[minmax(0,4rem)_1fr] gap-6 pb-12">
                <div className="relative">
                  <span className="font-display text-lg font-bold text-gradient">{t.year}</span>
                  <span aria-hidden className="absolute left-2 top-8 h-full w-px bg-border" />
                </div>
                <div className="rounded-3xl border bg-card p-6">
                  <h2 className="font-display text-lg font-semibold text-ink">{t.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <img
            src={images.couple}
            alt="Hand-painted 3D printed couple figurine made at our Ahmedabad studio"
            loading="lazy"
            decoding="async"
            width={900}
            height={900}
            className="mx-auto mt-8 aspect-16/9 w-full max-w-4xl rounded-4xl border object-cover shadow-lift"
          />
        </Reveal>
      </section>

      <CtaBand
        title="Want to be part of the next chapter?"
        text="Send us the photo you've been meaning to do something with."
      />
    </>
  );
}
