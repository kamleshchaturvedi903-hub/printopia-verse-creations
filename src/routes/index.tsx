import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Globe2,
  Instagram,
  MessageCircle,
  Play,
  Quote,
  Sparkles,
  Star,
  Wand2,
  Leaf,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";
import {
  blogPosts,
  categories,
  company,
  faqs,
  images,
  personalized,
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
import { ModelViewer } from "@/components/site/ModelViewer";
import { ProductCarousel } from "@/components/site/ProductCarousel";
import { AnimeCollection } from "@/components/site/AnimeCollection";
import showcaseModel from "@/assets/showcase-model.glb.asset.json";
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
        "Turn photos into hand-painted 3D printed figurines. Personalised human figures, anime collectibles, pet miniatures, wedding toppers & corporate gifts. Ahmedabad studio, delivered across India.",
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
      <AnimeCollection />
      <PersonalizedRange />
      <HowItWorks />
      <ToyCategories />
      <Explore360 />
      <Explore3DSecond />
      <Showcase />
      <Stats />
      <BeforeAfter />
      <Testimonials />
      <InstagramStrip />
      <FaqPreview />
      <LatestBlog />
      <CtaBand />
    </>
  );
}

/* ------------------------------- Hero ------------------------------- */
function Hero() {
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
            <Sparkles className="h-3.5 w-3.5" /> Ahmedabad · Delivering across India
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-[4rem]">
            Premium <span className="text-gradient">3D Printed</span> Collectibles
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Custom-made anime figures, action figures, gifts, miniatures, home décor and
            personalized 3D creations — sculpted, printed and hand-finished in our studio.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">
                Explore Collection <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/custom-orders">
                <Play className="h-4 w-4" /> Get Custom Quote
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
              <Globe2 className="h-4 w-4 text-primary" /> Delivered across India
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-8 rounded-full bg-primary/20 blur-3xl animate-glow"
          />
          <ModelViewer
            className="relative h-[22rem] w-full sm:h-[26rem] lg:h-[34rem]"
            autoRotateSpeed={0.7}
          />
          <div className="glass absolute -left-3 top-8 hidden rounded-2xl px-4 py-3 shadow-lift animate-float sm:block">
            <p className="text-xs font-semibold text-ink">Drag to rotate</p>
            <p className="text-[11px] text-muted-foreground">interactive 3D preview</p>
          </div>
          <div className="glass absolute -right-2 bottom-10 hidden rounded-2xl px-4 py-3 shadow-lift animate-float sm:block">
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
        subtitle="From a ₹319 keychain to a museum-grade family portrait — ten categories, all produced in the same studio, by the same artists, all 20% off."
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

        <div className="mt-16 rounded-4xl border bg-card p-6 md:p-10">
          <div className="max-w-xl">
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
          <div className="mt-10">
            <ProductCarousel products={fresh} label="New arrivals" />
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

/* ------------------------- Toy categories ------------------------- */
const toyCategories = [
  {
    slug: "kids-collection",
    name: "Kids Collection",
    text: "Child-safe articulated toys and hero figures printed in tough PLA+.",
    image: images.kids,
  },
  {
    slug: "anime-collection",
    name: "Anime Toys",
    text: "Collector-grade resin statues with effect parts and display bases.",
    image: images.anime,
  },
  {
    slug: "corporate-gifts",
    name: "Corporate Gifts",
    text: "Branded trophies, desk awards and bulk employee gifting.",
    image: images.corporate,
  },
  {
    slug: "vehicles",
    name: "Vehicles Collection",
    text: "Scale supercars, bikes and dream-garage replicas in show finishes.",
    image: images.vehicles,
  },
];

function ToyCategories() {
  return (
    <section className="relative overflow-hidden border-y bg-surface py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-brand opacity-10 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-spark opacity-10 blur-3xl animate-glow"
      />
      <div className="container-lux relative">
        <SectionHeading
          eyebrow="Toy categories"
          title="Premium 3D Printed Toy Collections"
          subtitle="Ultra-detailed, hand-finished toys for every shelf — explore the collections our studio is best known for."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toyCategories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <article className="lift group flex h-full flex-col overflow-hidden rounded-3xl border bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.name} — premium 3D printed toys`}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={900}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-ink">{c.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-5 w-full">
                    <Link to="/category/$slug" params={{ slug: c.slug }}>
                      View Collection <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 360° viewer --------------------------- */
function Explore360() {
  const features = [
    { icon: Sparkles, title: "Premium Print Quality", note: "25-micron layer precision" },
    { icon: Wand2, title: "Personalized Designs", note: "Built around your idea" },
    { icon: Leaf, title: "Eco-Friendly Materials", note: "Plant-based PLA options" },
    { icon: ShieldCheck, title: "Durable Finish", note: "Sealed, hand-painted coats" },
    { icon: Clock, title: "Fast Production", note: "Dispatch in 8–14 days" },
    { icon: PackageCheck, title: "Secure Packaging", note: "Foam-cradled, insured" },
  ];

  return (
    <section className="relative overflow-hidden bg-night py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-primary/25 blur-3xl animate-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[22rem] w-[22rem] rounded-full bg-spark opacity-25 blur-3xl"
      />
      <div className="container-lux relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">
            Interactive 3D showcase
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Premium 3D Printed Collectibles
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            Designed with precision using high-quality 3D printing technology for
            collectors, gifting, décor, anime lovers, gamers and custom figurines.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="glass group flex h-full items-start gap-3 rounded-2xl p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary-foreground">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary-foreground">
                      {f.title}
                    </span>
                    <span className="block text-xs text-primary-foreground/65">
                      {f.note}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-4xl border border-primary-foreground/15 bg-primary-foreground/5 p-2 backdrop-blur-xl">
            <ModelViewer
              controls
              className="h-[24rem] w-full sm:h-[30rem] lg:h-[34rem]"
              autoRotateSpeed={1}
              label="Interactive 3D preview — rotate to explore the printed collectible"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px] font-medium text-primary-foreground/80">
            {[
              "Interactive 3D preview",
              "Rotate to explore",
              "Custom designed",
              "High precision 3D printing",
            ].map((l) => (
              <span key={l} className="rounded-full border border-primary-foreground/15 bg-primary-foreground/8 px-3 py-1.5 backdrop-blur-md">
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="container-lux relative mt-14 text-center">
        <h3 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
          Bring your ideas to life with 3D printing
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="lg">
            <Link to="/custom-orders">
              Get your custom model <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/contact">Request a free quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Second 3D showcase ---------------------- */
function Explore3DSecond() {
  return (
    <section className="relative overflow-hidden border-t border-primary-foreground/10 bg-night py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-primary/25 blur-3xl animate-glow"
      />
      <div className="container-lux relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-primary-foreground/15 bg-primary-foreground/5 p-2 backdrop-blur-xl">
            <ModelViewer
              controls
              src={showcaseModel.url}
              className="h-[24rem] w-full sm:h-[30rem] lg:h-[34rem]"
              autoRotateSpeed={0.8}
              label="Interactive 3D preview of a second printed collectible — drag to rotate"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">
            Interactive 3D showcase · II
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Explore another studio sculpt in full 3D
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            Drag to rotate, pinch to zoom and inspect every printed surface. This is the same
            geometry we send to the printer — no renders, no retouching.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-primary-foreground/80">
            {[
              "Auto rotate",
              "Drag & touch controls",
              "Pinch to zoom",
              "Soft realistic lighting",
            ].map((l) => (
              <span
                key={l}
                className="rounded-full border border-primary-foreground/15 bg-primary-foreground/8 px-3 py-1.5 backdrop-blur-md"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/custom-orders">
                Customise this model <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/products">Browse the collection</Link>
            </Button>
          </div>
        </Reveal>
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

/* ---------------------- Personalized products ---------------------- */
function PersonalizedRange() {
  return (
    <section className="container-lux py-20 md:py-28">
      <SectionHeading
        eyebrow="Personalised range"
        title={
          <>
            Made for one person only — <span className="text-gradient">yours</span>
          </>
        }
        subtitle="Name plates, photo lithophanes, keychains, trophies, mini figures and branded gift sets. All personalised, all printed in our Ahmedabad studio."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {personalized.map((item, i) => (
          <Reveal key={item.slug} delay={i * 70}>
            <Link
              to="/products/$slug"
              params={{ slug: item.slug }}
              className="lift group flex h-full flex-col overflow-hidden rounded-3xl border bg-card"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={`${item.name} — personalised 3D printed gift by 3D Printopia Verse`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-night/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-semibold text-ink">{item.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.blurb}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  From ₹{item.from.toLocaleString("en-IN")}
                  <span className="ml-2 text-xs font-medium text-muted-foreground">
                    after 20% off
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- Instagram --------------------------- */
function InstagramStrip() {
  const shots = products.slice(0, 6);

  return (
    <section className="container-lux py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl border bg-card p-6 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-spark opacity-15 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                <Instagram className="h-3.5 w-3.5" /> Instagram
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Watch every piece come to life
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Behind-the-scenes prints, paint timelapses and unboxings from customers across
                India. Follow {company.instagramHandle} for new drops first.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-7">
                <a href={company.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" /> Follow on Instagram
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {shots.map((s) => (
                <a
                  key={s.slug}
                  href={company.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${s.name} on our Instagram`}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
                >
                  <img
                    src={s.image}
                    alt={`${s.name} — 3D Printopia Verse Instagram post`}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-night/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Instagram className="h-5 w-5 text-primary-foreground" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
