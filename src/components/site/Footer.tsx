import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import logoAsset from "@/assets/printopia-logo.png.asset.json";
import { categories, company } from "@/lib/site";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Story", to: "/our-story" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQs", to: "/faqs" },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
  { label: "Shipping & Returns", to: "/shipping-returns" },
  { label: "Refund Policy", to: "/refund-policy" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-surface">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="logo-plate shrink-0">
              <img
                src={logoAsset.url}
                alt="3D Printopia Verse logo"
                loading="lazy"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>
            <span className="font-display text-lg font-bold text-ink">
              3D Printopia<span className="text-gradient"> Verse</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            A premium custom 3D printing studio in Ahmedabad, crafting personalised
            figurines, collectibles and corporate gifts for customers across India.
          </p>
          <a
            href={company.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            <Instagram className="h-4 w-4" /> {company.instagramHandle}
          </a>
          <div className="mt-4 flex flex-wrap gap-2">
            {company.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink">
            Quick Links
          </h3>
          <ul className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink">
            Product Categories
          </h3>
          <ul className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-ink">
            Get In Touch
          </h3>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href={company.phoneHref} className="hover:text-primary">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href={company.emailHref} className="break-all hover:text-primary">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-primary">
                WhatsApp us
              </a>
            </li>
          </ul>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              const email = new FormData(e.currentTarget).get("email");
              if (typeof email === "string" && /.+@.+\..+/.test(email)) {
                toast.success("You're subscribed. Watch your inbox for new drops.");
                e.currentTarget.reset();
              } else {
                toast.error("Please enter a valid email address.");
              }
            }}
          >
            <label
              htmlFor="footer-newsletter"
              className="text-xs font-semibold uppercase tracking-widest text-ink"
            >
              Newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="footer-newsletter"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-xl border bg-background px-3 py-2 text-sm outline-hidden focus:ring-2 focus:ring-ring"
              />
              <Button type="submit" size="icon" variant="hero" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t">
        <div className="container-lux flex flex-col gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved. GSTIN
            available on request.
          </p>
          <div className="flex flex-wrap gap-4">
            {policyLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
