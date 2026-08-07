import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories, products } from "@/lib/site";
import { seo, canonical, breadcrumbSchema } from "@/lib/seo";
import { CtaBand, PageHero, ProductCard } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found | 3D Printopia Verse" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const c = loaderData.category;
    return {
      meta: seo({
        title: `${c.name} — Custom 3D Printed | 3D Printopia Verse`,
        description: `${c.blurb} Prices from ₹${c.from}. Hand-painted in Ahmedabad, delivered across India.`,
        path: `/category/${c.slug}`,
      }),
      links: canonical(`/category/${c.slug}`),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: c.name, path: `/category/${c.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = products.filter((p) => p.category === category.slug);
  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Products", to: "/products" }, { label: category.name }]}
        eyebrow={`From ₹${category.from}`}
        title={category.name}
        subtitle={category.blurb}
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/custom-orders">Customise this category</Link>
        </Button>
      </PageHero>

      <section className="container-lux py-16">
        {items.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed p-12 text-center">
            <h2 className="font-display text-xl font-bold text-ink">
              Every piece in this category is made to order
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Send us your reference — a photo, a sketch, a screenshot or a brand guideline — and
              we'll sculpt it from scratch. Quotes within two working hours.
            </p>
            <Button asChild variant="hero" className="mt-6">
              <Link to="/custom-orders">Request a quote</Link>
            </Button>
          </div>
        )}

        <h2 className="mt-20 font-display text-2xl font-bold text-ink">Browse other categories</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="rounded-full border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
