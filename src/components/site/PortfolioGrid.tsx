import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { portfolioCategories, portfolioItems, type PortfolioItem } from "@/lib/portfolio";
import { Reveal } from "@/components/site/ui";

export function PortfolioGrid({ grouped = true }: { grouped?: boolean }) {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shown = useMemo(
    () => portfolioItems.filter((i) => filter === "all" || i.category === filter),
    [filter],
  );

  const move = useCallback(
    (dir: number) =>
      setLightbox((v) => (v == null ? v : (v + dir + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (lightbox == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, move]);

  const activeCat = portfolioCategories.find((c) => c.slug === filter) ?? null;
  const groups = [{ cat: grouped ? activeCat : null, items: shown }];

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter portfolio by category">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          All work
        </FilterChip>
        {portfolioCategories.map((c) => (
          <FilterChip
            key={c.slug}
            active={filter === c.slug}
            onClick={() => setFilter(c.slug)}
          >
            {c.name}
          </FilterChip>
        ))}
      </div>

      <div className="mt-12 space-y-16">
        {groups.map((g, gi) => (
          <section key={g.cat?.slug ?? "filtered"} aria-labelledby={`pf-${g.cat?.slug ?? "all"}`}>
            {g.cat && (
              <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b pb-3">
                <h3
                  id={`pf-${g.cat.slug}`}
                  className="font-display text-xl font-semibold text-ink"
                >
                  {g.cat.name}
                </h3>
                <p className="text-sm text-muted-foreground">{g.cat.blurb}</p>
              </div>
            )}
            <div
              className={`grid gap-5 ${
                g.items.length === 1
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : g.items.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {g.items.map((it, i) => (
                <Reveal key={it.id} delay={((gi + i) % 6) * 60}>
                  <Tile
                    item={it}
                    wide={g.items.length === 1}
                    onOpen={() => setLightbox(shown.findIndex((s) => s.id === it.id))}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {lightbox != null && shown[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[lightbox].title}
          className="fixed inset-0 z-100 flex items-center justify-center bg-night/90 p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setLightbox(null)}
        >
          <figure
            className="relative max-h-[90dvh] w-full max-w-4xl overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={shown[lightbox].image}
              alt={shown[lightbox].alt}
              className="max-h-[75dvh] w-full bg-night object-contain"
            />
            <figcaption className="glass flex items-center justify-between gap-4 px-5 py-4">
              <span>
                <span className="block font-display text-sm font-semibold text-ink">
                  {shown[lightbox].title}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {shown[lightbox].meta}
                </span>
              </span>
              <span className="text-xs text-muted-foreground">
                {lightbox + 1} / {shown.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
            className="glass absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-ink"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            className="glass absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            className="glass absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ink"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
        active
          ? "border-primary bg-primary/10 text-primary"
          : "text-muted-foreground hover:border-primary hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Tile({
  item,
  onOpen,
  wide = false,
}: {
  item: PortfolioItem;
  onOpen: () => void;
  wide?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${item.title} in full screen`}
      className="lift group relative block w-full overflow-hidden rounded-3xl border bg-card text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
    >
      <div
        className={`overflow-hidden ${
          wide ? "aspect-16/10 sm:aspect-21/9" : item.tall ? "aspect-3/4" : "aspect-4/3"
        }`}
      >
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          width={1024}
          height={item.tall ? 1365 : 768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-night/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="glass absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-ink opacity-0 transition-opacity group-hover:opacity-100">
        <ZoomIn className="h-4 w-4" />
      </span>
      <span className="block p-5">
        <span className="block font-display text-sm font-semibold text-ink">{item.title}</span>
        <span className="mt-1 block text-xs text-muted-foreground">{item.meta}</span>
      </span>
    </button>
  );
}
