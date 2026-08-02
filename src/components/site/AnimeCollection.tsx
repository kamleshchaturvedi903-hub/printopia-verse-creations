import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/ui";
import { animeCharacters, animeSeries, type AnimeSeries } from "@/lib/anime";

export function AnimeCollection() {
  const [filter, setFilter] = useState<AnimeSeries | "all">("all");
  const list = useMemo(
    () => animeCharacters.filter((c) => filter === "all" || c.series === filter),
    [filter],
  );

  return (
    <section className="relative overflow-hidden bg-night py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[26rem] w-[26rem] rounded-full bg-primary/25 blur-3xl animate-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-spark opacity-25 blur-3xl"
      />

      <div className="container-lux relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/85 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Anime collection
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Popular Anime Collection
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Collector-grade sculpts of the characters our customers ask for most — printed
              at 25 microns, hand-painted and fully customisable in size, pose and base.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {(["all", ...animeSeries] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              aria-pressed={filter === s}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                filter === s
                  ? "border-primary bg-primary/20 text-primary-foreground shadow-glow"
                  : "border-primary-foreground/15 text-primary-foreground/70 hover:border-primary/60 hover:text-primary-foreground"
              }`}
            >
              {s === "all" ? "All" : s}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {list.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <article className="group glass flex h-full flex-col overflow-hidden rounded-3xl border border-primary-foreground/12 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                <div className="relative aspect-square overflow-hidden bg-primary-foreground/5">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={`${c.name} — 3D printable ${c.series} collectible figurine`}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/25 via-transparent to-spark/25 text-center">
                      <span className="px-3 font-display text-sm font-semibold text-primary-foreground/80">
                        {c.name}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-md">
                    3D printable model available
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-sm font-semibold text-primary-foreground sm:text-base">
                    {c.name}
                  </h3>
                  <p className="mt-1 flex-1 text-[11px] uppercase tracking-widest text-primary-foreground/55">
                    {c.series}
                  </p>
                  <Link
                    to="/custom-orders"
                    aria-label={`Customise a ${c.name} 3D printed figurine`}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    Customize Now
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
