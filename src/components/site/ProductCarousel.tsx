import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/site";
import { ProductCard } from "@/components/site/ui";

/**
 * Premium auto-playing product carousel.
 * Desktop 4 cards · tablet 2 · mobile 1. Infinite loop, hover pause, swipe.
 */
export function ProductCarousel({
  products,
  interval = 3500,
  perViewDesktop = 4,
  label = "Product carousel",
}: {
  products: Product[];
  interval?: number;
  perViewDesktop?: 2 | 3 | 4;
  label?: string;
}) {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? perViewDesktop : w >= 640 ? Math.min(2, perViewDesktop) : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [perViewDesktop]);

  const pages = Math.max(1, Math.ceil(products.length / perView));

  useEffect(() => {
    setIndex((i) => (i >= pages ? 0 : i));
  }, [pages]);

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + pages) % pages), [pages]);

  useEffect(() => {
    if (paused || pages < 2) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [paused, pages, interval, go]);

  const slides = useMemo(() => products, [products]);
  if (slides.length === 0) return null;

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
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
        if (start === null) return;
        const dx = e.changedTouches[0].clientX - start;
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((p) => (
            <div
              key={p.slug}
              className="shrink-0 px-2.5"
              style={{ width: `${100 / perView}%` }}
              aria-hidden={undefined}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous products"
            className="absolute -left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border bg-card/90 text-ink shadow-lift backdrop-blur transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:-left-5"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next products"
            className="absolute -right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border bg-card/90 text-ink shadow-lift backdrop-blur transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:-right-5"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
