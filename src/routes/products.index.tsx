import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/lib/site";
import { seo } from "@/lib/seo";
import { PageHero, ProductCard } from "@/components/site/ui";
import { CtaBand } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: seo({
      title: "Custom 3D Printed Products & Figurines Online | 3D Printopia Verse",
      description:
        "Browse personalised 3D printed figurines, anime collectibles, pet miniatures, robot toys, scale vehicles, wedding toppers and corporate gifts. Filter by category, price and delivery time.",
    }),
  }),
  component: Products,
});

const sorts = ["Popular", "Price: low to high", "Price: high to low", "Top rated"] as const;

function Products() {
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Popular");
  const [q, setQ] = useState("");
  const [max, setMax] = useState(10000);

  const list = useMemo(() => {
    let items = products.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        p.price <= max &&
        (p.name + p.short + p.tags.join(" ")).toLowerCase().includes(q.toLowerCase()),
    );
    if (sort === "Price: low to high") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "Price: high to low") items = [...items].sort((a, b) => b.price - a.price);
    if (sort === "Top rated") items = [...items].sort((a, b) => b.rating - a.rating);
    return items;
  }, [cat, sort, q, max]);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Products" }]}
        eyebrow="The collection"
        title="Custom 3D printed products, made to order"
        subtitle="Forty-four signature pieces across ten categories — every one of them customisable with your photos, names, colours and branding, and every price already 35% off."
      />

      <section className="container-lux py-14">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-max rounded-3xl border bg-card p-6 lg:sticky lg:top-28">
            <p className="flex items-center gap-2 font-display text-sm font-bold text-ink">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </p>

            <label htmlFor="p-search" className="mt-6 block text-xs font-semibold text-ink">
              Search
            </label>
            <input
              id="p-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              maxLength={60}
              placeholder="figurine, pet, trophy…"
              className="mt-2 w-full rounded-xl border bg-background px-3 py-2 text-sm outline-hidden focus:ring-2 focus:ring-ring"
            />

            <p className="mt-6 text-xs font-semibold text-ink">Category</p>
            <div className="mt-2 grid gap-1">
              <button
                onClick={() => setCat("all")}
                className={`rounded-xl px-3 py-2 text-left text-sm ${cat === "all" ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-muted"}`}
              >
                All products
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setCat(c.slug)}
                  className={`rounded-xl px-3 py-2 text-left text-sm ${cat === c.slug ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-muted"}`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <label htmlFor="p-price" className="mt-6 block text-xs font-semibold text-ink">
              Max price: ₹{max.toLocaleString("en-IN")}
            </label>
            <input
              id="p-price"
              type="range"
              min={500}
              max={10000}
              step={500}
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="mt-3 w-full accent-primary"
            />

            <Button asChild variant="hero" className="mt-6 w-full">
              <Link to="/custom-orders">Can't find it? Ask us</Link>
            </Button>
          </aside>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{list.length}</span>{" "}
                products
              </p>
              <div className="flex flex-wrap gap-2">
                {sorts.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSort(s)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${sort === s ? "border-primary bg-primary/10 text-primary" : "text-muted-foreground hover:border-primary"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>

            {list.length === 0 && (
              <div className="mt-16 rounded-3xl border border-dashed p-12 text-center">
                <p className="font-display text-lg font-semibold text-ink">
                  Nothing matches those filters
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We build bespoke pieces every day — describe what you want and we'll quote
                  it.
                </p>
                <Button asChild variant="hero" className="mt-6">
                  <Link to="/custom-orders">Request a custom piece</Link>
                </Button>
              </div>
            )}

            <nav
              aria-label="Pagination"
              className="mt-12 flex items-center justify-center gap-2 text-sm"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
                1
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground">
                2
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground">
                3
              </span>
            </nav>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
