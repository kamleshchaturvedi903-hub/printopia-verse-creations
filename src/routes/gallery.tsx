import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/ui";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: seo({
      title: "Printing & 3D Printing Portfolio by Category | 3D Printopia Verse",
      description:
        "Browse our portfolio by category — business cards, brochures, flyers, posters, catalogues, packaging, wedding cards, banners, corporate branding and 3D printed products.",
    }),
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Portfolio" }]}
        eyebrow="Portfolio"
        title="Our work, organised category by category"
        subtitle="No renders, no stock repeats. Every piece below left our Ahmedabad studio — filter by category and tap any image to view it full screen."
      />

      <section className="container-lux py-14 md:py-20" aria-label="Portfolio by category">
        <PortfolioGrid />
      </section>

      <CtaBand
        title="See something you'd like in your own version?"
        text="Send us the reference and your artwork — we'll quote it today."
      />
    </>
  );
}
