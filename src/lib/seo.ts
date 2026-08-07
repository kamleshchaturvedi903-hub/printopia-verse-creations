import { company } from "./site";

const SITE_NAME = "3D Printopia Verse";
export const SITE_URL = "https://printopia-verse-creations.lovable.app";

export function seo({
  title,
  description,
  image,
  type = "website",
  path,
}: {
  title: string;
  description: string;
  image?: string;
  type?: string;
  path?: string;
}) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (path) meta.push({ property: "og:url", content: `${SITE_URL}${path}` });
  if (image?.startsWith("https://")) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return meta;
}

/** Self-referencing canonical for a leaf route. Never add this to __root. */
export function canonical(path: string) {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}

/** BreadcrumbList JSON-LD for deep pages. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function jsonLd(data: unknown) {
  return {
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(data),
      },
    ],
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Premium custom 3D printing studio creating personalised figurines, action figures, anime collectibles, pet miniatures and corporate gifts.",
  telephone: company.phone,
  email: company.email,
  slogan: company.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "A13, Chandrapuri Apartment, Vastrapur",
    addressLocality: "Ahmedabad",
    postalCode: "380015",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: company.countries,
  openingHours: "Mo-Sa 10:00-20:00",
  priceRange: "₹₹",
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
