/**
 * Portfolio data.
 *
 * To add work: drop a new image in `src/assets`, import it below and add an
 * entry to `portfolioItems` (or a new slide to `bannerSlides`).
 * Every image is used exactly once — keep it that way to avoid duplicates.
 */
import hero from "@/assets/hero.jpg";
import catKids from "@/assets/cat-kids.jpg";
import catCouple from "@/assets/cat-couple.jpg";
import catVehicles from "@/assets/cat-vehicles.jpg";
import catAnime from "@/assets/cat-anime.jpg";
import catPets from "@/assets/cat-pets.jpg";
import catCorporate from "@/assets/cat-corporate.jpg";

import pfVisitingCards from "@/assets/pf-visiting-cards.jpg";
import pfBrochures from "@/assets/pf-brochures.jpg";
import pfFlyers from "@/assets/pf-flyers.jpg";
import pfCatalogues from "@/assets/pf-catalogues.jpg";
import pfPosters from "@/assets/pf-posters.jpg";
import pfPackaging from "@/assets/pf-packaging.jpg";
import pfBranding from "@/assets/pf-branding.jpg";
import pfWeddingCards from "@/assets/pf-wedding-cards.jpg";
import pfIdCards from "@/assets/pf-id-cards.jpg";
import pfStickers from "@/assets/pf-stickers.jpg";
import pfBanners from "@/assets/pf-banners.jpg";
import pfLetterheads from "@/assets/pf-letterheads.jpg";
import pfPromotional from "@/assets/pf-promotional.jpg";

export type BannerSlide = {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
};

/** Homepage animated gallery — swap `image` to update a slide. */
export const bannerSlides: BannerSlide[] = [
  {
    id: "visiting-cards",
    title: "Visiting Card Printing",
    caption: "Gold-foil, spot-UV and textured stocks with razor-clean edges.",
    image: pfVisitingCards,
    alt: "Luxury visiting cards with gold foil logo stacked on dark marble",
  },
  {
    id: "brochures",
    title: "Brochure Printing",
    caption: "Tri-fold and multi-page brochures in true-to-brand colour.",
    image: pfBrochures,
    alt: "Tri-fold corporate brochures fanned out under studio lighting",
  },
  {
    id: "flyers",
    title: "Flyer Printing",
    caption: "Vibrant short-run and bulk flyers, delivered in days.",
    image: pfFlyers,
    alt: "Colourful promotional flyers arranged in an overlapping grid",
  },
  {
    id: "catalogues",
    title: "Catalogue Printing",
    caption: "Perfect-bound product catalogues with editorial finishing.",
    image: pfCatalogues,
    alt: "Open perfect-bound product catalogue with glossy printed pages",
  },
  {
    id: "posters",
    title: "Poster Printing",
    caption: "Large-format posters with gallery-grade ink density.",
    image: pfPosters,
    alt: "Large format printed poster mounted on a gallery wall under spotlights",
  },
  {
    id: "packaging",
    title: "Packaging Design",
    caption: "Rigid boxes, sleeves and inserts with embossed branding.",
    image: pfPackaging,
    alt: "Luxury custom packaging boxes with embossed logo and ribbon",
  },
  {
    id: "corporate-branding",
    title: "Corporate Branding",
    caption: "Full stationery systems, unified across every touchpoint.",
    image: pfBranding,
    alt: "Corporate branding stationery flat lay with letterhead, mug and tote",
  },
];

export type PortfolioCategory = {
  slug: string;
  name: string;
  blurb: string;
};

export type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  meta: string;
  image: string;
  alt: string;
  tall?: boolean;
};

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "business-cards", name: "Business Cards", blurb: "Foiled, embossed and textured card work." },
  { slug: "brochures", name: "Brochures", blurb: "Folded and stitched marketing collateral." },
  { slug: "flyers", name: "Flyers", blurb: "High-volume promotional print." },
  { slug: "posters", name: "Posters", blurb: "Large-format display printing." },
  { slug: "catalogues", name: "Catalogues", blurb: "Bound product and brand books." },
  { slug: "packaging", name: "Packaging", blurb: "Retail and gift packaging systems." },
  { slug: "letterheads", name: "Letterheads", blurb: "Executive stationery sets." },
  { slug: "stickers-labels", name: "Stickers & Labels", blurb: "Die-cut vinyl and product labelling." },
  { slug: "banners-flex", name: "Banners & Flex", blurb: "Standees, flex and exhibition graphics." },
  { slug: "wedding-cards", name: "Wedding Cards", blurb: "Laser-cut and foiled invitations." },
  { slug: "id-cards", name: "ID Cards", blurb: "Employee and event credentials." },
  { slug: "corporate-branding", name: "Corporate Branding", blurb: "End-to-end identity rollouts." },
  { slug: "promotional", name: "Promotional Materials", blurb: "Branded merchandise and giveaways." },
  { slug: "3d-printed", name: "3D Printed Products", blurb: "Figurines, toys and scale models." },
];

/** One image per item — no image is reused anywhere on the site's portfolio. */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "bc-foil",
    category: "business-cards",
    title: "Gold Foil Visiting Cards",
    meta: "600 gsm · spot UV · foil block",
    image: pfVisitingCards,
    alt: "Stack of gold foil visiting cards on black marble",
  },
  {
    id: "br-trifold",
    category: "brochures",
    title: "Tri-Fold Corporate Brochure",
    meta: "170 gsm art paper · matte lamination",
    image: pfBrochures,
    alt: "Tri-fold corporate brochure printed in blue and violet",
    tall: false,
  },
  {
    id: "fl-campaign",
    category: "flyers",
    title: "Campaign Flyer Series",
    meta: "A5 · full bleed · 10,000 run",
    image: pfFlyers,
    alt: "Set of brightly coloured A5 campaign flyers",
  },
  {
    id: "po-gallery",
    category: "posters",
    title: "Gallery Format Poster",
    meta: "Large format · fade-resistant ink",
    image: pfPosters,
    alt: "Wide gallery poster with blue and violet artwork on a white wall",
    tall: false,
  },
  {
    id: "ca-product",
    category: "catalogues",
    title: "Product Catalogue",
    meta: "64 pages · perfect bound",
    image: pfCatalogues,
    alt: "Open perfect-bound product catalogue on a dark desk",
  },
  {
    id: "pk-rigid",
    category: "packaging",
    title: "Rigid Gift Packaging",
    meta: "Embossed lid · satin ribbon",
    image: pfPackaging,
    alt: "Black and white rigid gift boxes with embossed branding",
    tall: true,
  },
  {
    id: "lh-executive",
    category: "letterheads",
    title: "Executive Letterhead Set",
    meta: "100 gsm bond · blind emboss",
    image: pfLetterheads,
    alt: "Embossed letterheads and envelopes on a wooden desk",
  },
  {
    id: "st-diecut",
    category: "stickers-labels",
    title: "Die-Cut Sticker Pack",
    meta: "Vinyl · gloss & matte mix",
    image: pfStickers,
    alt: "Die-cut vinyl stickers and product labels on a white surface",
    tall: true,
  },
  {
    id: "bn-standee",
    category: "banners-flex",
    title: "Exhibition Standee & Flex",
    meta: "Roll-up · 850 gsm flex",
    image: pfBanners,
    alt: "Printed roll-up standee and flex banners at a trade show booth",
  },
  {
    id: "wc-foil",
    category: "wedding-cards",
    title: "Foiled Wedding Invitation",
    meta: "Laser cut · gold foil · pocket fold",
    image: pfWeddingCards,
    alt: "Black and gold foiled wedding invitation card on ivory silk",
    tall: true,
  },
  {
    id: "id-badges",
    category: "id-cards",
    title: "Employee ID Programme",
    meta: "PVC · lanyard · variable data",
    image: pfIdCards,
    alt: "Corporate ID cards with lanyards laid out on slate",
  },
  {
    id: "cb-identity",
    category: "corporate-branding",
    title: "Brand Identity Rollout",
    meta: "Stationery · merchandise · signage",
    image: pfBranding,
    alt: "Corporate stationery and merchandise in a unified blue identity",
  },
  {
    id: "cb-awards",
    category: "corporate-branding",
    title: "Branded Award Set",
    meta: "3D printed · Pantone matched",
    image: catCorporate,
    alt: "Custom branded corporate awards and engraved nameplates",
    tall: true,
  },
  {
    id: "pm-merch",
    category: "promotional",
    title: "Promotional Merchandise Kit",
    meta: "Mugs · caps · notebooks",
    image: pfPromotional,
    alt: "Branded promotional mugs, caps, notebooks and pens",
  },
  {
    id: "3d-family",
    category: "3d-printed",
    title: "Mini-Me Family Portrait",
    meta: "Resin · hand-painted · 15 cm",
    image: hero,
    alt: "Hand-painted 3D printed miniature family figurines on a lit base",
    tall: true,
  },
  {
    id: "3d-kids",
    category: "3d-printed",
    title: "Kids Robot Collection",
    meta: "PLA+ · articulated · child-safe",
    image: catKids,
    alt: "Colourful 3D printed robot toys and animal figures for children",
  },
  {
    id: "3d-couple",
    category: "3d-printed",
    title: "Wedding Cake Topper",
    meta: "Resin · bespoke outfits",
    image: catCouple,
    alt: "3D printed couple cake topper figurines in wedding outfits",
  },
  {
    id: "3d-vehicles",
    category: "3d-printed",
    title: "Scale Vehicle Models",
    meta: "1:24 · automotive paint",
    image: catVehicles,
    alt: "3D printed scale model supercar and motorbike with show paint",
  },
];

export type Product360 = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  /** Optional real image sequence (24–72 frames). Takes priority when present. */
  frames?: string[];
  hotspots?: { x: number; y: number; label: string }[];
};

/** Add a product by appending here — supply `frames` for a true frame sequence. */
export const products360: Product360[] = [
  {
    id: "anime-figure",
    name: "Anime Action Figure",
    description: "25-micron resin sculpt with translucent effect parts and a mirrored base.",
    image: catAnime,
    alt: "High-detail 3D printed anime action figure on a display base",
    hotspots: [
      { x: 34, y: 26, label: "Hand-painted facial detail" },
      { x: 66, y: 62, label: "Translucent effect parts" },
    ],
  },
  {
    id: "pet-miniature",
    name: "Pet Miniature",
    description: "Fur texture and markings sculpted from your photographs, sealed in satin varnish.",
    image: catPets,
    alt: "3D printed pet miniature figurine of a dog",
    hotspots: [{ x: 50, y: 40, label: "Photo-matched markings" }],
  },
  {
    id: "trophy-model",
    name: "Corporate Trophy Model",
    description: "Brand-matched award geometry with laser-etched recipient plate.",
    image: catCorporate,
    alt: "3D printed corporate trophy award with engraved plate",
    hotspots: [{ x: 52, y: 72, label: "Laser-etched plate" }],
  },
];
