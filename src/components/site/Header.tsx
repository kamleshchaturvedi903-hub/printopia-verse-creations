import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  ShoppingBag,
  Phone,
  ChevronDown,
  Instagram,
  X,
} from "lucide-react";
import logoAsset from "@/assets/printopia-logo.png.asset.json";
import { categories, company } from "@/lib/site";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products", mega: true },
  { label: "Personalized", to: "/personalized-figurines" },
  { label: "Business Gifts", to: "/business-gifts" },
  { label: "Gallery", to: "/gallery" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
] as const;

const moreLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Story", to: "/our-story" },
  { label: "Custom Orders", to: "/custom-orders" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        className={cn(
          "transition-all duration-500",
          scrolled ? "glass shadow-soft" : "bg-background",
        )}
        onMouseLeave={() => setMega(false)}
      >
        <div className="container-lux grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
          <Link
            to="/"
            aria-label="3D Printopia Verse — home"
            className="flex min-w-0 shrink-0 items-center gap-3 py-1"
          >
            <img
              src={logoAsset.url}
              alt="3D Printopia Verse logo"
              width={512}
              height={512}
              decoding="async"
              className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-[4.25rem] lg:w-[4.25rem]"
            />
            <span className="min-w-0 truncate font-display text-[15px] font-bold leading-none text-ink sm:text-base lg:text-xl">
              3D Printopia<span className="text-gradient"> Verse</span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1" aria-label="Primary">
            {nav.map((item) => (
              <div key={item.to} onMouseEnter={() => setMega(!!("mega" in item))}>
                <Link
                  to={item.to}
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground 2xl:px-3 2xl:text-sm"
                  activeProps={{ className: "bg-muted text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                  {"mega" in item && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              </div>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-[13px] font-medium text-foreground/80 hover:bg-muted 2xl:px-3 2xl:text-sm">
                More <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute right-0 top-full w-52 translate-y-2 rounded-2xl border bg-popover p-2 opacity-0 shadow-lift transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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

          <div className="flex shrink-0 items-center gap-1.5">
            <Link
              to="/products"
              aria-label="Cart"
              className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-muted"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
            </Link>
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-muted"
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
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-muted xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden origin-top border-t bg-popover shadow-lift transition-all duration-300 xl:block",
            mega
              ? "visible scale-y-100 opacity-100"
              : "invisible -translate-y-2 scale-y-95 opacity-0",
          )}
        >
          <div className="container-lux grid grid-cols-4 gap-6 py-8">
            <div className="col-span-3 grid grid-cols-4 gap-3">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setMega(false)}
                  className="group rounded-2xl p-3 transition-colors hover:bg-muted"
                >
                  <img
                    src={c.image}
                    alt={`${c.name} 3D printed products`}
                    loading="lazy"
                    className="mb-3 aspect-[4/3] w-full rounded-xl object-cover"
                  />
                  <p className="font-display text-sm font-semibold text-ink">{c.name}</p>
                  <p className="text-xs text-muted-foreground">From ₹{c.from}</p>
                </Link>
              ))}
            </div>
            <div className="rounded-3xl bg-spark p-6 text-primary-foreground">
              <p className="font-display text-lg font-bold">Not sure what to order?</p>
              <p className="mt-2 text-sm opacity-90">
                Send a photo on WhatsApp. Our design team replies with a concept and price
                within two hours.
              </p>
              <Button asChild variant="onDark" size="sm" className="mt-5">
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
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setMobile(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-background p-6 shadow-lift animate-in slide-in-from-right">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-ink">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setMobile(false)}
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6 grid gap-1" aria-label="Mobile">
              {[...nav, ...moreLinks].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobile(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Categories
            </p>
            <div className="mt-2 grid gap-1">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setMobile(false)}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                >
                  {c.name}
                </Link>
              ))}
            </div>
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
