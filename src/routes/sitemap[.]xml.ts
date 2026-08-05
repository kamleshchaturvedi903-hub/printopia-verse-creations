import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories, products } from "@/lib/site";

const BASE_URL = "https://printopia-verse-creations.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/products",
          "/personalized-figurines",
          "/business-gifts",
          "/gallery",
          "/how-it-works",
          "/pricing",
          "/blog",
          "/about",
          "/our-story",
          "/custom-orders",
          "/testimonials",
          "/faqs",
          "/contact",
          "/privacy-policy",
          "/refund-policy",
          "/shipping-returns",
          "/terms-conditions",
        ];

        const entries: SitemapEntry[] = [
          ...staticPaths.map((path) => ({
            path,
            changefreq: "weekly" as const,
            priority: path === "/" ? "1.0" : "0.8",
          })),
          ...categories.map((c) => ({
            path: `/category/${c.slug}`,
            changefreq: "weekly" as const,
            priority: "0.7",
          })),
          ...products.map((p) => ({
            path: `/products/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
