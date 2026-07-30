import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories, images } from "@/lib/site";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: seo({
      title: "3D Printed Figurine Gallery — Real Customer Work | 3D Printopia Verse",
      description:
        "Browse real hand-painted 3D printed figurines, anime collectibles, pet miniatures, scale vehicles and corporate awards produced in our Ahmedabad studio.",
    }),
  }),
  component: Gallery,
});

const items = [
  { src: images.hero, title: "Mini-Me Family Portrait", cat: "couple-wedding", tall: true },
  { src: images.anime, title: "Anime Hero Statue", cat: "anime-collection" },
  { src: images.pets, title: "Pet Miniature Duo", cat: "animals-pets" },
  { src: images.vehicles, title: "Scale Supercar Trio", cat: "vehicles", tall: true },
  { src: images.kids, title: "Kids Robot Collection", cat: "robot-toys" },
  { src: images.couple, title: "Wedding Cake Topper", cat: "couple-wedding" },
  { src: images.corporate, title: "Branded Award Set", cat: "corporate-gifts", tall: true },
  { src: images.kids, title: "Animal Figurine Set", cat: "kids-collection" },
  { src: images.anime, title: "Gaming Character Statue", cat: "anime-collection" },
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const shown = items.filter((i) => filter === "all" || i.cat === filter);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Gallery" }]}
        eyebrow="Gallery"
        title="Real pieces, photographed under studio lighting"
        subtitle="No renders, no stock photos. Everything below left our Ahmedabad studio and went to a real customer."
      />

      <section className="container-lux py-14">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${filter === "all" ? "border-primary bg-primary/10 text-primary" : "text-muted-foreground hover:border-primary"}`}
          >
            All work
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setFilter(c.slug)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${filter === c.slug ? "border-primary bg-primary/10 text-primary" : "text-muted-foreground hover:border-primary"}`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {shown.map((it, i) => (
            <Reveal key={`${it.title}-${i}`} delay={(i % 6) * 60}>
              <figure className="lift group relative overflow-hidden rounded-3xl border bg-card">
                <img
                  src={it.src}
                  alt={`${it.title} — custom 3D printed by 3D Printopia Verse`}
                  loading="lazy"
                  width={900}
                  height={it.tall ? 1200 : 900}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${it.tall ? "aspect-3/4" : "aspect-square"}`}
                />
                <figcaption className="glass absolute inset-x-3 bottom-3 rounded-2xl px-4 py-2.5 text-sm font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  {it.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="See something you'd like in your own version?"
        text="Send us the reference and your photos — we'll quote it today."
      />
    </>
  );
}
