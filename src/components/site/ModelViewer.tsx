import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { Expand, Maximize2, RotateCcw } from "lucide-react";

const ModelCanvas = lazy(() => import("@/components/site/ModelCanvas"));

function Skeleton() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="h-24 w-24 animate-pulse rounded-full bg-primary/15 blur-xl" />
    </div>
  );
}

export function ModelViewer({
  className = "",
  controls = false,
  autoRotateSpeed = 0.8,
  src,
  label = "Interactive 3D preview of a premium 3D printed collectible",
}: {
  className?: string;
  controls?: boolean;
  autoRotateSpeed?: number;
  src?: string;
  label?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<{ reset: () => void } | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const onScreen = entries.some((e) => e.isIntersecting);
        setActive(onScreen);
        if (onScreen) setVisible(true);
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const requestFullscreen = () => {
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label={label}
      onDoubleClick={() => orbitRef.current?.reset()}
      className={`relative touch-none select-none ${className}`}
    >
      <ClientOnly fallback={<Skeleton />}>
        {visible ? (
          <Suspense fallback={<Skeleton />}>
            <ModelCanvas
              autoRotateSpeed={autoRotateSpeed}
              src={src}
              controlsRef={orbitRef}
              active={active}
            />
          </Suspense>
        ) : (
          <Skeleton />
        )}
      </ClientOnly>

      {controls && (
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            type="button"
            onClick={() => orbitRef.current?.reset()}
            aria-label="Reset camera view"
            className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground backdrop-blur-md transition-transform hover:scale-105"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={requestFullscreen}
            aria-label="View model fullscreen"
            className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground backdrop-blur-md transition-transform hover:scale-105"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      )}

      {controls && (
        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-[11px] font-semibold text-primary-foreground backdrop-blur-md">
          <Expand className="h-3.5 w-3.5 text-primary" /> Drag to rotate
        </span>
      )}
    </div>
  );
}
