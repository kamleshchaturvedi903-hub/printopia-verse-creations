import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { blogPosts } from "@/lib/site";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: seo({
      title: "3D Printing Blog — Gift Guides & Studio Insights | 3D Printopia Verse",
      description:
        "Guides on custom 3D printing, personalised gifts, anime collectibles, corporate gifting and print technology, written by the sculptors and technicians in our studio.",
    }),
  }),
  component: Blog,
});

function Blog() {
  const cats = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const [cat, setCat] = useState("All");
  const posts = blogPosts.filter((p) => cat === "All" || p.category === cat);
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        crumbs={[{ label: "Blog" }]}
        eyebrow="Journal"
        title="Notes from inside a 3D printing studio"
        subtitle="Buying guides, gifting ideas and the technical detail behind prints that actually look good."
      />

      <section className="container-lux py-14">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${cat === c ? "border-primary bg-primary/10 text-primary" : "text-muted-foreground hover:border-primary"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {featured && (
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="lift mt-10 grid overflow-hidden rounded-4xl border bg-card md:grid-cols-2"
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
              <div className="p-8 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                  Featured · {featured.category} · {featured.readTime}
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-sm font-semibold text-primary">Read the article →</p>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="lift group block h-full overflow-hidden rounded-3xl border bg-card"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={600}
                  className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                    {p.category} · {p.readTime}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
