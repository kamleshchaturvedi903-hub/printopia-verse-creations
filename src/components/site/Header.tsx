import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, ShoppingBag, Phone, ChevronDown, X } from "lucide-react";
import logoAsset from "@/assets/printopia-logo.webp.asset.json";
import { categories, company } from "@/lib/site";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products", mega: true },
  { label: "Gallery", to: "/gallery" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
] as const;

/** Curated Products menu — ordered exactly as requested. */
const productLinks: { label: string; to: string; params?: { slug: string } }[] = [
  { label: "Anime Collection", to: "/category/$slug", params: { slug: "anime-collection" } },
  { label: "Personalized Gifts", to: "/personalized-figurines" },
  { label: "Business Gifts", to: "/business-gifts" },
  { label: "Toys", to: "/category/$slug", params: { slug: "kids-collection" } },
  { label: "Vehicles", to: "/category/$slug", params: { slug: "vehicles" } },
  { label: "Animals & Pets", to: "/category/$slug", params: { slug: "animals-pets" } },
  { label: "Religious Statues", to: "/custom-orders" },
  { label: "Corporate Gifts", to: "/category/$slug", params: { slug: "corporate-gifts" } },
  { label: "Custom 3D Printing", to: "/custom-orders" },
];

const moreLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Story", to: "/our-story" },
  { label: "Custom Orders", to: "/custom-orders" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

const linkCls =
  "flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:px-3";

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(true);
  const frame = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        setScrolled(window.scrollY > 12);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  // Close the mega menu on Escape for keyboard users.
  useEffect(() => {
    if (!mega && !mobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mega, mobile]);

  const closeAll = useCallback(() => {
    setMega(false);
    setMobile(false);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-night text-xs text-primary-foreground md:block">
        <div className="container-lux flex h-9 items-center justify-between">
          <p className="opacity-90">
            Free 360° design preview · Insured, tracked delivery across India
          </p>
          <div className="flex items-center gap-4 opacity-90">
            <a className="hover:opacity-100" href={company.phoneHref}>
              {company.phone}
            </a>
            <a className="hover:opacity-100" href={company.emailHref}>
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn("transition-colors duration-300", scrolled ? "glass shadow-soft" : "bg-background")}
        onMouseLeave={() => setMega(false)}
      >
        <div className="container-lux grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2.5 lg:flex lg:justify-between lg:gap-4">
          <Link
            to="/"
            aria-label="3D Printopia Verse — home"
            className="flex min-w-0 shrink-0 items-center gap-2.5 py-1"
          >
            <img
              src={logoAsset.url}
              alt="3D Printopia Verse logo"
              width={512}
              height={512}
              decoding="async"
              fetchPriority="high"
              className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            />
            <span className="min-w-0 truncate font-display text-[15px] font-bold leading-none text-ink sm:text-base lg:text-lg">
              3D Printopia<span className="text-gradient"> Verse</span>
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <div key={item.to} onMouseEnter={() => setMega("mega" in item)}>
                <Link
                  to={item.to}
                  className={linkCls}
                  aria-expanded={"mega" in item ? mega : undefined}
                  activeProps={{ className: "bg-muted text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={closeAll}
                >
                  {item.label}
                  {"mega" in item && (
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform", mega && "rotate-180")}
                    />
                  )}
                </Link>
              </div>
            ))}

            <div className="group relative" onMouseEnter={() => setMega(false)}>
              <button className={linkCls} aria-haspopup="true">
                More <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute right-0 top-full w-52 translate-y-2 rounded-2xl border bg-popover p-2 opacity-0 shadow-lift transition-[opacity,transform] duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {moreLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <Link
              to="/products"
              aria-label="Cart"
              className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-muted"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
            </Link>
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-muted"
            >
              {theme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </button>
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <Link to="/custom-orders">Get a Quote</Link>
            </Button>
            <button
              onClick={() => setMobile(true)}
              aria-label="Open menu"
              aria-expanded={mobile}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-muted lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Products mega menu */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden origin-top border-t bg-popover shadow-lift transition-[opacity,transform] duration-200 lg:block",
            mega
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0",
          )}
        >
          <div className="container-lux grid gap-6 py-7 lg:grid-cols-[1.1fr_1.4fr_0.9fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Shop by type
              </p>
              <div className="mt-3 grid gap-0.5">
                {productLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    params={l.params as never}
                    onClick={closeAll}
                    className="rounded-xl px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Featured categories
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {categories.slice(0, 6).map((c) => (
                  <Link
                    key={c.slug}
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    onClick={closeAll}
                    className="group rounded-2xl p-2 transition-colors hover:bg-muted"
                  >
                    <img
                      src={c.image}
                      alt={`${c.name} 3D printed products`}
                      loading="lazy"
                      decoding="async"
                      className="mb-2 aspect-4/3 w-full rounded-xl object-cover"
                    />
                    <p className="font-display text-[13px] font-semibold leading-tight text-ink">
                      {c.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">From ₹{c.from}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-spark p-5 text-primary-foreground">
              <p className="font-display text-base font-bold">Not sure what to order?</p>
              <p className="mt-2 text-sm opacity-90">
                Send a photo on WhatsApp. Our design team replies with a concept and price
                within two hours.
              </p>
              <Button asChild variant="onDark" size="sm" className="mt-4">
                <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                  Chat with a designer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={closeAll} />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-background p-5 shadow-lift animate-in slide-in-from-right">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-ink">Menu</span>
              <button
                aria-label="Close menu"
                onClick={closeAll}
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-5 grid gap-0.5" aria-label="Mobile">
              {nav
                .filter((l) => !("mega" in l))
                .map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={closeAll}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}

              <button
                onClick={() => setMobileProducts((v) => !v)}
                aria-expanded={mobileProducts}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-muted"
              >
                Products
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", mobileProducts && "rotate-180")}
                />
              </button>
              {mobileProducts && (
                <div className="mb-1 grid gap-0.5 border-l pl-3">
                  <Link
                    to="/products"
                    onClick={closeAll}
                    className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    All products
                  </Link>
                  {productLinks.map((l) => (
                    <Link
                      key={l.label}
                      to={l.to}
                      params={l.params as never}
                      onClick={closeAll}
                      className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}

              {moreLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={closeAll}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <Button asChild variant="hero" className="mt-6 w-full">
              <a href={company.phoneHref}>
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
