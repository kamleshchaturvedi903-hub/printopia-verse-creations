/**
 * Portfolio data.
 *
 * To add work: drop a new image in `src/assets`, import it below and add an
 * entry to `portfolioItems`. Every image is used exactly once — keep it that
 * way to avoid duplicates.
 */
import hero from "@/assets/hero.jpg";
import catKids from "@/assets/cat-kids.jpg";
import catCouple from "@/assets/cat-couple.jpg";
import catVehicles from "@/assets/cat-vehicles.jpg";
import catAnime from "@/assets/cat-anime.jpg";
import catPets from "@/assets/cat-pets.jpg";
import catCorporate from "@/assets/cat-corporate.jpg";
import toyDinosaur from "@/assets/toy-dinosaur.jpg";
import toyRobot from "@/assets/toy-robot.jpg";
import toyPanda from "@/assets/toy-panda.jpg";
import toyDragon from "@/assets/toy-dragon.jpg";
import toyAstronaut from "@/assets/toy-astronaut.jpg";
import toyElephant from "@/assets/toy-elephant.jpg";
import toyUnicorn from "@/assets/toy-unicorn.jpg";
import toyTeddy from "@/assets/toy-teddy.jpg";
import toyCat from "@/assets/toy-cat.jpg";
import toyGiftbox from "@/assets/toy-giftbox.jpg";
import studioProcess from "@/assets/studio-process.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

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
  { slug: "kids-collection", name: "Kids Collection", blurb: "Child-safe toys and hero figures." },
  { slug: "anime-toys", name: "Anime Toys", blurb: "Collector-grade resin statues." },
  { slug: "animals-pets", name: "Animals & Pets", blurb: "Photo-matched pet miniatures." },
  { slug: "fantasy", name: "Fantasy & Creatures", blurb: "Dragons, dinosaurs and myth models." },
  { slug: "vehicles", name: "Vehicles Collection", blurb: "Scale cars, bikes and machines." },
  { slug: "couple-wedding", name: "Couple & Wedding", blurb: "Toppers, busts and keepsakes." },
  { slug: "corporate-gifts", name: "Corporate Gifts", blurb: "Branded awards and desk pieces." },
  { slug: "home-decor", name: "Home Decor", blurb: "Decor sculptures and personalised pieces." },
  { slug: "studio", name: "Studio & Process", blurb: "Inside our 3D toy manufacturing studio." },
];

/** One image per item — no image is reused anywhere on the site's portfolio. */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "kids-family",
    category: "kids-collection",
    title: "Mini-Me Family Portrait",
    meta: "Resin · hand-painted · 15 cm",
    image: hero,
    alt: "Hand-painted 3D printed miniature family figurines on a lit base",
    tall: true,
  },
  {
    id: "kids-collection-set",
    category: "kids-collection",
    title: "Kids Toy Collection",
    meta: "PLA+ · articulated · child-safe",
    image: catKids,
    alt: "Colourful 3D printed robot toys and animal figures for children",
  },
  {
    id: "kids-teddy",
    category: "kids-collection",
    title: "Teddy Bear Figurine",
    meta: "PLA+ · textured fur sculpt",
    image: toyTeddy,
    alt: "Blue 3D printed teddy bear figurine on a glossy dark surface",
  },
  {
    id: "kids-robot",
    category: "kids-collection",
    title: "Articulated Robot Buddy",
    meta: "Print-in-place · 14 joints",
    image: toyRobot,
    alt: "Blue and white 3D printed articulated robot toy figurine",
  },
  {
    id: "anime-hero",
    category: "anime-toys",
    title: "Anime Hero Statue",
    meta: "25-micron resin · effect parts",
    image: catAnime,
    alt: "High-detail 3D printed anime action figure on a display base",
  },
  {
    id: "anime-shelf",
    category: "anime-toys",
    title: "Collector Display Series",
    meta: "Studio finish · lit shelf",
    image: heroSlide2,
    alt: "Collection of hand-painted 3D printed hero figurines on a lit shelf",
    tall: true,
  },
  {
    id: "anime-astronaut",
    category: "anime-toys",
    title: "Astronaut Collectible",
    meta: "Resin · lit display base",
    image: toyAstronaut,
    alt: "3D printed astronaut figurine in a white spacesuit on a lit base",
  },
  {
    id: "pets-dog",
    category: "animals-pets",
    title: "Pet Miniature Portrait",
    meta: "Photo-matched markings",
    image: catPets,
    alt: "3D printed pet miniature figurine of a dog",
  },
  {
    id: "pets-cat",
    category: "animals-pets",
    title: "Cat Sculpture",
    meta: "Matte resin · 12 cm",
    image: toyCat,
    alt: "Matte grey 3D printed sitting cat figurine under studio light",
  },
  {
    id: "pets-panda",
    category: "animals-pets",
    title: "Panda Character Toy",
    meta: "Smooth PLA+ · hand-painted",
    image: toyPanda,
    alt: "Cute hand-painted 3D printed panda figurine on a white pedestal",
  },
  {
    id: "fantasy-dragon",
    category: "fantasy",
    title: "Iridescent Dragon",
    meta: "Resin · pearl scale paint",
    image: toyDragon,
    alt: "Detailed 3D printed dragon figurine with iridescent scales",
    tall: true,
  },
  {
    id: "fantasy-dino",
    category: "fantasy",
    title: "T-Rex Dinosaur Model",
    meta: "Resin · display base",
    image: toyDinosaur,
    alt: "Hand-painted 3D printed T-Rex dinosaur figurine on a dark base",
  },
  {
    id: "fantasy-unicorn",
    category: "fantasy",
    title: "Pastel Unicorn Toy",
    meta: "PLA+ · pearlescent horn",
    image: toyUnicorn,
    alt: "Pastel 3D printed unicorn figurine with a pearlescent horn",
  },
  {
    id: "vehicles-supercar",
    category: "vehicles",
    title: "Scale Vehicle Models",
    meta: "1:24 · automotive paint",
    image: catVehicles,
    alt: "3D printed scale model supercar and motorbike with show paint",
  },
  {
    id: "couple-topper",
    category: "couple-wedding",
    title: "Wedding Cake Topper",
    meta: "Resin · bespoke outfits",
    image: catCouple,
    alt: "3D printed couple cake topper figurines in wedding outfits",
  },
  {
    id: "corporate-awards",
    category: "corporate-gifts",
    title: "Branded Award Set",
    meta: "Pantone matched · engraved",
    image: catCorporate,
    alt: "Custom branded corporate awards and engraved nameplates",
  },
  {
    id: "corporate-giftbox",
    category: "corporate-gifts",
    title: "Gift-Boxed Figurine",
    meta: "Foam insert · premium box",
    image: toyGiftbox,
    alt: "Premium gift box opened to reveal a custom 3D printed toy figurine",
  },
  {
    id: "decor-elephant",
    category: "home-decor",
    title: "Ornate Elephant Sculpture",
    meta: "Hand-painted · gold detailing",
    image: toyElephant,
    alt: "Hand-painted 3D printed elephant sculpture with gold detailing",
  },
  {
    id: "studio-print",
    category: "studio",
    title: "Printing In Progress",
    meta: "Resin printer · 25-micron",
    image: heroSlide3,
    alt: "Resin 3D printer producing a detailed toy figurine in a studio",
  },
  {
    id: "studio-paint",
    category: "studio",
    title: "Hand-Painting Bench",
    meta: "Airbrush · 0.1 mm detail brush",
    image: studioProcess,
    alt: "Artisan hand-painting a 3D printed toy figurine at a studio workbench",
    tall: true,
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
