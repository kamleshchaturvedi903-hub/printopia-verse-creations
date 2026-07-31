import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bannerSlides } from "@/lib/portfolio";

const INTERVAL = 3800;

export function PortfolioSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = bannerSlides.length;

  const go = useCallback((n: number) => setIndex((n + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((v) => (v + 1) % count), INTERVAL);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        touchX.current = null;
        setPaused(false);
        if (start == null) return;
        const dx = e.changedTouches[0].clientX - start;
        if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
      }}
    >
      <div
        className="relative overflow-hidden rounded-4xl border shadow-lift"
        role="region"
        aria-roledescription="carousel"
        aria-label="Printing portfolio gallery"
      >
        <div className="relative aspect-16/10 w-full sm:aspect-21/9">
          {bannerSlides.map((s, i) => {
            const active = i === index;
            return (
              <figure
                key={s.id}
                aria-hidden={!active}
                className={`absolute inset-0 transition-all duration-[900ms] ease-out ${
                  active ? "z-10 opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width={1600}
                  height={900}
                  className={`h-full w-full object-cover transition-transform duration-[5000ms] ease-out ${
                    active ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-night/80 via-night/20 to-transparent"
                />
                <figcaption className="glass absolute inset-x-4 bottom-4 rounded-2xl px-5 py-4 sm:inset-x-8 sm:bottom-8 sm:max-w-md">
                  <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {s.caption}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="glass absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ink transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="glass absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ink transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {bannerSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show ${s.title}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
              i === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
