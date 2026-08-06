/**
 * One shared IntersectionObserver for every scroll-reveal / lazy-mount on the
 * page. Dozens of individual observers cost measurable main-thread time
 * (TBT/INP); a single observer with a callback map does the same job.
 */
type Cb = () => void;

const callbacks = new WeakMap<Element, Cb>();
let observer: IntersectionObserver | null = null;

function get(rootMargin: string) {
  if (typeof IntersectionObserver === "undefined") return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const cb = callbacks.get(entry.target);
          if (cb) {
            callbacks.delete(entry.target);
            observer?.unobserve(entry.target);
            cb();
          }
        }
      },
      { rootMargin, threshold: 0.01 },
    );
  }
  return observer;
}

/** Fire `cb` once, the first time `el` scrolls into view. Returns a cleanup fn. */
export function observeOnce(el: Element, cb: Cb, rootMargin = "120px"): () => void {
  const io = get(rootMargin);
  if (!io) {
    cb();
    return () => {};
  }
  callbacks.set(el, cb);
  io.observe(el);
  return () => {
    callbacks.delete(el);
    io.unobserve(el);
  };
}

/** Run work when the browser is idle (falls back to a short timeout). */
export function onIdle(cb: () => void, timeout = 2000): () => void {
  if (typeof window === "undefined") return () => {};
  const ric = (window as unknown as { requestIdleCallback?: typeof requestIdleCallback })
    .requestIdleCallback;
  if (ric) {
    const id = ric(cb, { timeout });
    return () =>
      (
        window as unknown as { cancelIdleCallback?: (h: number) => void }
      ).cancelIdleCallback?.(id as unknown as number);
  }
  const id = window.setTimeout(cb, 200);
  return () => window.clearTimeout(id);
}
