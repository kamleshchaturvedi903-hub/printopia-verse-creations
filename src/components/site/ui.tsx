import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/site";
import { Button } from "@/components/ui/button";

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <Tag className="mt-4 text-balance text-3xl font-bold leading-[1.1] text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

/* ---------- Breadcrumbs ---------- */
export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
      <Link to="/" className="hover:text-primary">
        Home
      </Link>
      {items.map((i) => (
        <span key={i.label} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3" />
          {i.to ? (
            <Link to={i.to} className="hover:text-primary">
              {i.label}
            </Link>
          ) : (
            <span className="text-foreground">{i.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ---------- Page hero ---------- */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: { label: string; to?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-spark opacity-20 blur-3xl animate-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-brand opacity-15 blur-3xl"
      />
      <div className="container-lux relative py-16 md:py-24">
        <Crumbs items={crumbs} />
        {eyebrow && (
          <span className="mt-6 inline-block rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

/* ---------- Product card ---------- */
export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Reveal delay={index * 60}>
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="lift group flex h-full flex-col overflow-hidden rounded-3xl border bg-card"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={`${product.name} — custom 3D printed by 3D Printopia Verse`}
            loading="lazy"
            width={900}
            height={900}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-spark px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              {product.badge}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-1 text-accent">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-semibold text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <h3 className="mt-2 font-display text-base font-semibold text-ink">
            {product.name}
          </h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {product.short}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="font-display text-lg font-bold text-ink">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.compareAt && (
                <span className="ml-2 text-xs text-muted-foreground line-through">
                  ₹{product.compareAt.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-xs font-semibold text-primary transition-transform group-hover:translate-x-1">
              View →
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-ink md:text-5xl">
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ---------- CTA band ---------- */
export function CtaBand({
  title = "Ready to hold your imagination in your hands?",
  text = "Send us a photo or an idea. You'll have a concept, a price and a timeline within two hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-lux py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-night px-6 py-16 text-center md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-spark opacity-30 blur-3xl animate-glow"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brand opacity-25 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/custom-orders">Start a custom order</Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/products">Browse the collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
