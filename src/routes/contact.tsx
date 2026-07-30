import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/lib/site";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/ui";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: seo({
      title: "Contact Our 3D Printing Studio in Ahmedabad | 3D Printopia Verse",
      description:
        "Call +91 93992 34699, WhatsApp us or visit our Vastrapur studio at A13 Chandrapuri Apartment, Ahmedabad 380015. Quotes answered within 2 working hours.",
    }),
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { icon: Phone, label: "Call us", value: company.phone, href: company.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with a designer", href: company.whatsappHref },
    { icon: Mail, label: "Email", value: company.email, href: company.emailHref },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact Us" }]}
        eyebrow="Contact"
        title="Talk to a designer, not a chatbot"
        subtitle="Our studio is in Vastrapur, Ahmedabad. Walk in, call, or send us photos — whichever suits you."
      />

      <section className="container-lux grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="lift flex items-center gap-4 rounded-3xl border bg-card p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm font-semibold text-ink">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border bg-card p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
              <MapPin className="h-4 w-4 text-primary" /> Studio address
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {company.address}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" /> {company.hours}
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border">
            <iframe
              title="3D Printopia Verse studio location on Google Maps"
              src={`https://www.google.com/maps?q=${company.mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
          </div>
        </div>

        <QuoteForm
          title="Send us a message"
          intro="Contact, bulk order or corporate enquiry — this one form reaches the right person."
        />
      </section>

      <CtaBand />
    </>
  );
}
