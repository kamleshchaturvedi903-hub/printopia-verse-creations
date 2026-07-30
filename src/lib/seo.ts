import { company } from "./site";

const SITE_NAME = "3D Printopia Verse";

export function seo({
  title,
  description,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  image?: string;
  type?: string;
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
  if (image?.startsWith("https://")) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return meta;
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
