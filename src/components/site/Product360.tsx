import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2, Maximize2, RotateCw } from "lucide-react";
import { products360 } from "@/lib/portfolio";

/**
 * Lightweight 360° viewer.
 * - With `frames` (24–72 images) it plays a true image sequence.
 * - Without frames it falls back to a CSS-3D turntable of the product still.
 * Drag / swipe to rotate, wheel or pinch to zoom, arrow keys for keyboard users.
 */
export function Product360Viewer() {
  const [pi, setPi] = useState(0);
  const [angle, setAngle] = useState(-18);
  const [zoom, setZoom] = useState(1);
  const [interacting, setInteracting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; angle: number } | null>(null);
  const pinch = useRef<{ dist: number; zoom: number } | null>(null);

  const product = products360[pi];
  const frames = product.frames;

  useEffect(() => setLoaded(false), [pi]);

  useEffect(() => {
    if (interacting) return;
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = t - last;
      last = t;
      setAngle((a) => a + dt * 0.012);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [interacting]);

  const select = useCallback(
    (n: number) => {
      setPi((n + products360.length) % products360.length);
      setAngle(-18);
      setZoom(1);
    },
    [],
  );

  const frameSrc = frames
    ? frames[((Math.round((angle / 360) * frames.length) % frames.length) + frames.length) %
        frames.length]
    : product.image;

  const fullscreen = () => {
    const el = stage.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div
        ref={stage}
        role="group"
        tabIndex={0}
        aria-label={`360 degree viewer for ${product.name}. Use left and right arrow keys to rotate.`}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            setInteracting(true);
            setAngle((a) => a + 12);
          }
          if (e.key === "ArrowLeft") {
            setInteracting(true);
            setAngle((a) => a - 12);
          }
          if (e.key === "Escape") setInteracting(false);
        }}
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          drag.current = { x: e.clientX, angle };
          setInteracting(true);
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          setAngle(drag.current.angle + (e.clientX - drag.current.x) * 0.45);
        }}
        onPointerUp={() => {
          drag.current = null;
          window.setTimeout(() => setInteracting(false), 1400);
        }}
        onPointerLeave={() => {
          drag.current = null;
        }}
        onWheel={(e) => {
          setInteracting(true);
          setZoom((z) => Math.min(2.4, Math.max(1, z - e.deltaY * 0.0015)));
          window.setTimeout(() => setInteracting(false), 1200);
        }}
        onTouchStart={(e) => {
          if (e.touches.length === 2) {
            const [a, b] = [e.touches[0], e.touches[1]];
            pinch.current = { dist: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), zoom };
            setInteracting(true);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 2 && pinch.current) {
            const [a, b] = [e.touches[0], e.touches[1]];
            const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
            setZoom(Math.min(2.4, Math.max(1, pinch.current.zoom * (d / pinch.current.dist))));
          }
        }}
        onTouchEnd={() => {
          pinch.current = null;
        }}
        className="glass relative aspect-4/3 touch-pan-y select-none overflow-hidden rounded-4xl border shadow-lift focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none sm:aspect-16/10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand opacity-20 blur-2xl"
        />

        {!loaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-card/70">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Loading 360° assets
            </p>
          </div>
        )}

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <img
            key={product.id}
            src={frameSrc}
            alt={product.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            width={1024}
            height={1024}
            onLoad={() => setLoaded(true)}
            className="h-[78%] w-auto max-w-[86%] rounded-3xl object-contain transition-opacity duration-500"
            style={
              frames
                ? { transform: `scale(${zoom})` }
                : {
                    transform: `rotateY(${angle}deg) scale(${zoom})`,
                    transformStyle: "preserve-3d",
                    opacity: loaded ? 1 : 0,
                  }
            }
          />
        </div>

        {product.hotspots?.map((h) => (
          <button
            key={h.label}
            type="button"
            aria-label={h.label}
            title={h.label}
            className="group absolute z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-primary/25 focus-visible:ring-primary focus-visible:outline-none"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            <span className="glass pointer-events-none absolute left-1/2 top-6 w-max max-w-[12rem] -translate-x-1/2 rounded-xl px-3 py-1.5 text-[11px] font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {h.label}
            </span>
          </button>
        ))}

        <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between gap-3">
          <span className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold text-ink">
            <RotateCw className="h-3.5 w-3.5 text-primary" /> Drag to rotate · scroll to zoom
          </span>
          <button
            type="button"
            onClick={fullscreen}
            aria-label="Open 360° viewer in fullscreen"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => select(pi - 1)}
            aria-label="Previous product"
            className="flex h-11 w-11 items-center justify-center rounded-full border text-ink transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => select(pi + 1)}
            aria-label="Next product"
            className="flex h-11 w-11 items-center justify-center rounded-full border text-ink transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {products360.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => select(i)}
            aria-pressed={i === pi}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
              i === pi
                ? "border-primary bg-primary/10 text-primary"
                : "text-muted-foreground hover:border-primary"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
