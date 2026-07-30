import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Globe2,
  MessageCircle,
  Play,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import {
  blogPosts,
  categories,
  clients,
  company,
  faqs,
  images,
  products,
  stats,
  steps,
  testimonials,
  trustBadges,
} from "@/lib/site";
import { seo, faqSchema } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import {
  Counter,
  CtaBand,
  ProductCard,
  Reveal,
  SectionHeading,
} from "@/components/site/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seo({
      title: "Custom 3D Printed Figurines & Personalised Gifts | 3D Printopia Verse",
      description:
        "Turn photos into hand-painted 3D printed figurines. Personalised human figures, anime collectibles, pet miniatures, wedding toppers & corporate gifts. Ahmedabad studio, worldwide shipping.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(faqs.slice(0, 5))),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Categories />
      <BestSellers />
      <HowItWorks />
      <Showcase />
      <Stats />
      <BeforeAfter />
      <Testimonials />
      <Clients />
      <FaqPreview />
      <LatestBlog />
      <CtaBand />
    </>
  );
}

/* ------------------------------- Hero ------------------------------- */
function Hero() {
  const words = ["Figurines", "Collectibles", "Memories", "Gifts"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand opacity-15 blur-3xl animate-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-52 h-[24rem] w-[24rem] rounded-full bg-spark opacity-15 blur-3xl"
      />
      <div className="container-lux grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Ahmedabad · Shipping to 6 countries
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.03] text-ink sm:text-5xl lg:text-[4.1rem]">
            Your world, printed in
            <span className="relative ml-3 inline-block h-[1.15em] overflow-hidden align-bottom">
              <span
                className="block text-gradient transition-transform duration-700 ease-out"
                style={{ transform: `translateY(-${i * 1.15}em)` }}
              >
                {words.map((w) => (
                  <span key={w} className="block h-[1.15em]">
                    {w}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We sculpt and hand-paint high-detail 3D printed figurines from your photographs
            — people, pets, heroes and brands. Free 360° preview before we print a single
            layer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/custom-orders">
                Get your free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">
                <Play className="h-4 w-4" /> See the studio
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.9/5 from 1,800+ orders
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Delivery in 8–14 days
            </span>
            <span className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-primary" /> IN · US · UK · UAE · CA · AU
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="lift relative overflow-hidden rounded-4xl border shadow-lift">
            <img
              src={images.hero}
              alt="Hand-painted 3D printed miniature family figurines on a lit display base"
              width={1600}
              height={1000}
              fetchPriority="high"
              className="aspect-4/3 w-full object-cover"
            />
            <div className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  Mini-Me Family Portrait
                </p>
                <p className="text-xs text-muted-foreground">Resin · Hand-painted · 15 cm</p>
              </div>
              <Button asChild size="sm" variant="hero">
                <Link to="/products/$slug" params={{ slug: "mini-me-family-portrait" }}>
                  View
                </Link>
              </Button>
            </div>
          </div>

          <div className="glass absolute -left-3 top-8 hidden rounded-2xl px-4 py-3 shadow-lift animate-float sm:block">
            <p className="text-xs font-semibold text-ink">Free 360° preview</p>
            <p className="text-[11px] text-muted-foreground">before printing</p>
          </div>
          <div className="glass absolute -right-2 bottom-24 hidden rounded-2xl px-4 py-3 shadow-lift animate-float sm:block">
            <p className="text-xs font-semibold text-ink">25-micron detail</p>
            <p className="text-[11px] text-muted-foreground">studio resin</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Trust strip ---------------------------- */
function TrustStrip() {
  return (
    <section className="border-y bg-surface py-5">
      <div className="container-lux grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((b) => (
          <div key={b} className="flex items-center gap-3 text-sm text-foreground/80">
            <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
            <span>{b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- Categories ---------------------------- */
function Categories() {
  return (
    <section className="container-lux py-20 md:py-28">
      <SectionHeading
        eyebrow="Shop by category"
        title="Everything we make, sorted the way you shop"
        subtitle="From a ₹399 keychain to a museum-grade family portrait — every category is produced in the same studio, by the same artists."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 60}>
            <Link
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="lift group block h-full overflow-hidden rounded-3xl border bg-card"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.name} — custom 3D printed products`}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.blurb}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  From ₹{c.from} →
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- Best sellers --------------------------- */
function BestSellers() {
  const best = products.filter((p) => p.badge === "Best Seller").slice(0, 4);
  const fresh = products.filter((p) => p.badge === "New");
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-lux">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Best sellers"
            title="The pieces our customers keep coming back for"
            subtitle="Ranked by repeat orders, not by margin."
          />
          <Button asChild variant="outline">
            <Link to="/products">View all products</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {best.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 rounded-4xl border bg-card p-6 md:grid-cols-[auto_1fr] md:items-center md:p-10">
          <div className="max-w-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              New arrivals
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink">
              Fresh out of the print bed
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              New sculpts released every month. Early buyers get launch pricing and a free
              engraved base.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {fresh.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- How it works --------------------------- */
function HowItWorks() {
  return (
    <section className="container-lux py-20 md:py-28">
      <SectionHeading
        eyebrow="3-step ordering"
        title="From your photo to your shelf in three steps"
        subtitle="No design skills needed. No surprises. You approve everything before we print."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <div className="relative h-full rounded-3xl border bg-card p-8">
              <span className="font-display text-6xl font-bold leading-none text-gradient opacity-40">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="hero" size="lg">
          <Link to="/how-it-works">See the full process</Link>
        </Button>
      </div>
    </section>
  );
}

/* --------------------------- 3D showcase --------------------------- */
function TiltCard({ src, label, note }: { src: string; label: string; note: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState("");

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setT(`perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`);
      }}
      onMouseLeave={() => setT("")}
      style={{ transform: t }}
      className="overflow-hidden rounded-3xl border bg-card shadow-lift transition-transform duration-300 will-change-transform"
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        width={900}
        height={900}
        className="aspect-square w-full object-cover"
      />
      <div className="p-5">
        <p className="font-display text-sm font-semibold text-ink">{label}</p>
        <p className="text-xs text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <section className="relative overflow-hidden bg-night py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 h-96 w-96 rounded-full bg-spark opacity-25 blur-3xl animate-glow"
      />
      <div className="container-lux relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-primary-foreground/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
            Interactive showcase
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
            Move your cursor. Look closer.
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            Every surface you see here was printed, sanded, primed and painted by hand in
            our Ahmedabad studio.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TiltCard src={images.anime} label="Anime Hero" note="Resin · 20 cm" />
          <TiltCard src={images.pets} label="Pet Miniatures" note="Resin · 9 cm" />
          <TiltCard src={images.vehicles} label="Scale Vehicles" note="1:24 · auto paint" />
          <TiltCard src={images.kids} label="Kids Collection" note="PLA+ · child-safe" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Stats ------------------------------ */
function Stats() {
  return (
    <section className="container-lux py-20">
      <div className="grid gap-8 rounded-4xl border bg-card p-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------- Before / After -------------------------- */
function BeforeAfter() {
  const [pos, setPos] = useState(52);
  return (
    <section className="container-lux py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Reference vs result"
            title="Drag the slider. That's the same figure."
            subtitle="Left: the raw print straight off the build plate. Right: after 6 hours of sanding, priming and hand-painting. The finish is the whole product."
          />
          <Button asChild variant="hero" className="mt-8">
            <Link to="/gallery">Explore the gallery</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-4xl border shadow-lift">
          <img
            src={images.anime}
            alt="Finished hand-painted 3D printed anime figurine"
            loading="lazy"
            width={900}
            height={900}
            className="aspect-square w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={images.anime}
              alt="Unpainted raw 3D print before finishing"
              loading="lazy"
              width={900}
              height={900}
              className="aspect-square w-full object-cover grayscale contrast-75 brightness-90"
              style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-background"
            style={{ left: `${pos}%` }}
          />
          <input
            type="range"
            min={5}
            max={95}
            value={pos}
            aria-label="Compare raw print with finished figurine"
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-x-0 bottom-6 mx-auto w-4/5 cursor-ew-resize accent-primary"
          />
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold text-ink">
            Raw print
          </span>
          <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold text-ink">
            Hand-finished
          </span>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Testimonials --------------------------- */
function Testimonials() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Customer stories"
          title="18,500 figurines. A lot of happy tears."
        />
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${n * 100}%)` }}
          >
            {testimonials.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-2">
                <div className="mx-auto max-w-3xl rounded-4xl border bg-card p-8 text-center md:p-12">
                  <Quote className="mx-auto h-8 w-8 text-primary/40" />
                  <blockquote className="mt-6 text-balance text-lg leading-relaxed text-foreground md:text-xl">
                    "{t.text}"
                  </blockquote>
                  <div className="mt-6 flex justify-center gap-0.5 text-accent">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <figcaption className="mt-3 text-sm font-semibold text-ink">
                    {t.name}
                    <span className="block text-xs font-normal text-muted-foreground">
                      {t.role}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Show review ${i + 1}`}
              onClick={() => setN(i)}
              className={`h-2 rounded-full transition-all ${i === n ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Clients ----------------------------- */
function Clients() {
  return (
    <section className="border-y py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by corporate gifting teams
      </p>
      <div className="mt-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 pr-14">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-display text-lg font-semibold text-muted-foreground/60"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FAQ preview --------------------------- */
function FaqPreview() {
  return (
    <section className="container-lux py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow="Questions"
          title="The things people ask us before ordering"
          subtitle="Still unsure? Message us on WhatsApp — a real designer answers, not a bot."
        />
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 5).map((f, i) => (
              <AccordionItem key={f.q} value={`i-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold text-ink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/faqs">All FAQs</Link>
            </Button>
            <Button asChild variant="hero">
              <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Latest blog --------------------------- */
function LatestBlog() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-lux">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Journal"
            title="Guides from inside the studio"
            subtitle="Buying advice, gifting ideas and the technical detail behind good prints."
          />
          <Button asChild variant="outline">
            <Link to="/blog">Read the blog</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
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
      </div>
    </section>
  );
}
