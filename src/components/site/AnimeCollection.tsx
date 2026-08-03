import { memo } from "react";
import { Reveal } from "@/components/site/ui";
import { animeCharacters } from "@/lib/anime";
import { company } from "@/lib/site";

function AnimeCollectionBase() {
  return (
    <section
      aria-labelledby="anime-collection-heading"
      className="relative overflow-hidden bg-night py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-[22rem] w-[22rem] rounded-full bg-primary/20 blur-2xl"
      />

      <div className="container-lux relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/85">
              Anime collection
            </span>
            <h2
              id="anime-collection-heading"
              className="mt-4 text-balance font-display text-3xl font-bold text-primary-foreground sm:text-4xl"
            >
              Popular Anime Collection
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Collector-grade sculpts printed at 25 microns, hand-painted and fully
              customisable in size, pose and base.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {animeCharacters.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={Math.min(i, 4) * 60}>
                <article className="group glass flex h-full flex-col overflow-hidden rounded-3xl border border-primary-foreground/12 shadow-lift transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1.5">
                  <div className="relative aspect-square overflow-hidden bg-primary-foreground/5">
                    <img
                      src={c.image}
                      alt={`${c.name} hand-painted 3D printed anime collectible figurine`}
                      loading="lazy"
                      decoding="async"
                      width={900}
                      height={900}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-primary-foreground">
                      3D printable model
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-base font-semibold text-primary-foreground">
                      {c.name}
                    </h3>
                    <p className="mt-1 flex-1 text-[11px] uppercase tracking-widest text-primary-foreground/55">
                      {c.tagline}
                    </p>
                    <a
                      href={`${company.whatsappHref}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Order a ${c.name} 3D printed figurine on WhatsApp`}
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      Order Now
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const AnimeCollection = memo(AnimeCollectionBase);
