import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site";
import { seo, canonical, breadcrumbSchema } from "@/lib/seo";
import { CtaBand, Crumbs } from "@/components/site/ui";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | 3D Printopia Verse" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    return {
      meta: seo({
        title: `${p.title} | 3D Printopia Verse`,
        description: p.excerpt,
        type: "article",
        path: `/blog/${p.slug}`,
      }),
      links: canonical(`/blog/${p.slug}`),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: p.title, path: `/blog/${p.slug}` },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Organization", name: "3D Printopia Verse" },
          }),
        },
      ],
    };
  },
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="container-lux py-12">
        <Crumbs items={[{ label: "Blog", to: "/blog" }, { label: post.category }]} />
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
            {post.category} · {post.readTime} ·{" "}
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </div>

        <img
          src={post.image}
          alt={post.title}
          width={1200}
          height={700}
          className="mx-auto mt-10 aspect-16/9 w-full max-w-4xl rounded-4xl border object-cover shadow-lift"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {post.body.map((para: string, i: number) => (
            <p key={i} className="mb-5 text-base leading-[1.8] text-foreground/85">
              {para}
            </p>
          ))}

          <div className="mt-10 rounded-3xl border bg-card p-8">
            <h2 className="font-display text-lg font-bold text-ink">
              Thinking about ordering something like this?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Browse the{" "}
              <Link to="/products" className="font-semibold text-primary hover:underline">
                full collection
              </Link>
              , check{" "}
              <Link to="/pricing" className="font-semibold text-primary hover:underline">
                current pricing
              </Link>{" "}
              or{" "}
              <Link to="/custom-orders" className="font-semibold text-primary hover:underline">
                request a custom quote
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <section className="container-lux py-10">
        <h2 className="font-display text-2xl font-bold text-ink">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {more.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="lift block overflow-hidden rounded-3xl border bg-card"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                decoding="async"
                width={900}
                height={600}
                className="aspect-16/10 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                  {p.category}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
