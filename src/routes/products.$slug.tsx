import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Instagram, MessageCircle, Ruler, Star, Truck } from "lucide-react";
import { categories, company, products } from "@/lib/site";
import { seo } from "@/lib/seo";
import { CtaBand, Crumbs, ProductCard } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found | 3D Printopia Verse" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.product;
    return {
      meta: seo({
        title: `${p.name} — Custom 3D Printed | 3D Printopia Verse`,
        description: `${p.short} From ₹${p.price.toLocaleString("en-IN")}. Hand-painted, ${p.turnaround} delivery, shipped across India.`,
        type: "product",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            brand: { "@type": "Brand", name: "3D Printopia Verse" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: p.rating,
              reviewCount: p.reviews,
            },
            offers: {
              "@type": "Offer",
              price: p.price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const category = categories.find((c) => c.slug === p.category);
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="container-lux py-10">
        <Crumbs
          items={[
            { label: "Products", to: "/products" },
            { label: p.name },
          ]}
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-4xl border shadow-lift">
            <img
              src={p.image}
              alt={`${p.name} — hand-painted custom 3D printed figurine`}
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div>
            {p.badge && (
              <span className="rounded-full bg-spark px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                {p.badge}
              </span>
            )}
            <h1 className="mt-4 text-balance text-3xl font-bold text-ink sm:text-4xl">
              {p.name}
            </h1>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="font-semibold text-foreground">{p.rating}</span>
              <span className="text-muted-foreground">({p.reviews} verified reviews)</span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            <div className="mt-8 flex flex-wrap items-end gap-3">
              <span className="font-display text-4xl font-bold text-ink">
                ₹{p.price.toLocaleString("en-IN")}
              </span>
              {p.compareAt && p.compareAt > p.price && (
                <>
                  <span className="pb-1 text-sm text-muted-foreground line-through">
                    ₹{p.compareAt.toLocaleString("en-IN")}
                  </span>
                  <span className="mb-1 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    {Math.round(((p.compareAt - p.price) / p.compareAt) * 100)}% OFF
                  </span>
                  <span className="pb-1 text-sm font-semibold text-primary">
                    You save ₹{(p.compareAt - p.price).toLocaleString("en-IN")}
                  </span>
                </>
              )}
              <span className="pb-1 text-xs text-muted-foreground">incl. taxes</span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border bg-card p-4 text-sm">
                <Ruler className="h-4 w-4 text-primary" />
                <span>
                  Size: <strong className="text-ink">{p.height}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border bg-card p-4 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>
                  Delivery: <strong className="text-ink">{p.turnaround}</strong>
                </span>
              </div>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
              {[
                "Free 360° digital preview before printing",
                "Unlimited revisions at the preview stage",
                "Hand-painted finish with protective varnish",
                "Insured, tracked shipping across India",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/custom-orders">Customise & order</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> Ask a question
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={company.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" /> See it on Instagram
                </a>
              </Button>
            </div>

            {category && (
              <p className="mt-6 text-sm text-muted-foreground">
                Part of{" "}
                <Link
                  to="/category/$slug"
                  params={{ slug: category.slug }}
                  className="font-semibold text-primary hover:underline"
                >
                  {category.name}
                </Link>{" "}
                · Also see{" "}
                <Link to="/pricing" className="font-semibold text-primary hover:underline">
                  full pricing
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-lux py-16">
          <h2 className="font-display text-2xl font-bold text-ink">You may also like</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <ProductCard key={r.slug} product={r} index={i} />
            ))}
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
