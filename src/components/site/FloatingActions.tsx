import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { company } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setShow(window.scrollY > 600);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="glass grid h-11 w-11 place-items-center rounded-full text-foreground shadow-lift"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
      <a
        href={company.phoneHref}
        aria-label={`Call ${company.phone}`}
        className="grid h-12 w-12 place-items-center rounded-full bg-card text-primary shadow-lift transition-transform hover:-translate-y-1"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-spark px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("pv-cookies")) {
      const t = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const close = (value: string) => {
    window.localStorage.setItem("pv-cookies", value);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm rounded-3xl border bg-popover p-5 shadow-lift">
      <p className="font-display text-sm font-semibold text-ink">We use cookies</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        We use essential cookies to run this site and analytics cookies to understand what our
        customers love. You can change your mind at any time.
      </p>
      <div className="mt-4 flex gap-2">
        <Button size="sm" variant="hero" onClick={() => close("all")}>
          Accept all
        </Button>
        <Button size="sm" variant="outline" onClick={() => close("essential")}>
          Essential only
        </Button>
      </div>
    </div>
  );
}
