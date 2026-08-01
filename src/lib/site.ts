import hero from "@/assets/hero.jpg";
import catKids from "@/assets/cat-kids.jpg";
import catAnime from "@/assets/cat-anime.jpg";
import catPets from "@/assets/cat-pets.jpg";
import catCouple from "@/assets/cat-couple.jpg";
import catVehicles from "@/assets/cat-vehicles.jpg";
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
import prAnimeChibi from "@/assets/pr-anime-chibi.jpg";
import prAnimeMecha from "@/assets/pr-anime-mecha.jpg";
import prAnimeSamurai from "@/assets/pr-anime-samurai.jpg";
import prCorpOrganiser from "@/assets/pr-corp-organiser.jpg";
import prCorpPaperweight from "@/assets/pr-corp-paperweight.jpg";
import prDecorLamp from "@/assets/pr-decor-lamp.jpg";
import prDecorPlanter from "@/assets/pr-decor-planter.jpg";
import prDecorWallart from "@/assets/pr-decor-wallart.jpg";
import prDinoRaptor from "@/assets/pr-dino-raptor.jpg";
import prDinoStegosaurus from "@/assets/pr-dino-stegosaurus.jpg";
import prDinoTriceratops from "@/assets/pr-dino-triceratops.jpg";
import prFantCastle from "@/assets/pr-fant-castle.jpg";
import prFantWizard from "@/assets/pr-fant-wizard.jpg";
import prKidsBlocks from "@/assets/pr-kids-blocks.jpg";
import prKidsRocket from "@/assets/pr-kids-rocket.jpg";
import prRobotRetro from "@/assets/pr-robot-retro.jpg";
import prRobotTitan from "@/assets/pr-robot-titan.jpg";
import prVehRoadster from "@/assets/pr-veh-roadster.jpg";
import prVehSuperbike from "@/assets/pr-veh-superbike.jpg";
import prVehTruck from "@/assets/pr-veh-truck.jpg";
import pzCorporate from "@/assets/pz-corporate.jpg";
import pzKeychain from "@/assets/pz-keychain.jpg";
import pzLithophane from "@/assets/pz-lithophane.jpg";
import pzMinifigure from "@/assets/pz-minifigure.jpg";
import pzNameplate from "@/assets/pz-nameplate.jpg";
import pzTrophy from "@/assets/pz-trophy.jpg";

export const images = {
  hero,
  kids: catKids,
  anime: catAnime,
  pets: catPets,
  couple: catCouple,
  vehicles: catVehicles,
  corporate: catCorporate,
  dinosaur: toyDinosaur,
  robot: toyRobot,
  panda: toyPanda,
  dragon: toyDragon,
  astronaut: toyAstronaut,
  elephant: toyElephant,
  unicorn: toyUnicorn,
  teddy: toyTeddy,
  cat: toyCat,
  giftbox: toyGiftbox,
  studio: studioProcess,
  heroSlide2,
  heroSlide3,
};

/** Personalized products showcase (homepage section). */
export const personalized = [
  {
    name: "Personalised Name Plate",
    blurb: "Backlit door or desk plate in your font, finish and brand colour.",
    image: pzNameplate,
    from: 1199,
    slug: "personalised-nameplate",
  },
  {
    name: "Photo Lithophane Lamp",
    blurb: "Your favourite photograph, revealed in light through printed relief.",
    image: pzLithophane,
    from: 1599,
    slug: "photo-lithophane-lamp",
  },
  {
    name: "Custom Keychains",
    blurb: "Names, logos or tiny faces — the perfect return gift at any volume.",
    image: pzKeychain,
    from: 719,
    slug: "custom-keychain-pack",
  },
  {
    name: "Engraved Award Trophy",
    blurb: "Sculpted trophies with laser-etched recipient plates.",
    image: pzTrophy,
    from: 1519,
    slug: "engraved-award-trophy",
  },
  {
    name: "Mini Figure Of You",
    blurb: "A 10 cm miniature of you, sculpted from photographs.",
    image: pzMinifigure,
    from: 2799,
    slug: "mini-figure-of-you",
  },
  {
    name: "Corporate Gift Set",
    blurb: "Branded desk gifting, boxed and dispatched to multiple addresses.",
    image: pzCorporate,
    from: 999,
    slug: "corporate-gift-set",
  },
];

/** Hero banner auto-slider — 3 premium visuals, no layout shift. */
export const heroSlides = [
  {
    image: hero,
    alt: "Hand-painted 3D printed miniature family figurines on a lit display base",
    title: "Mini-Me Family Portrait",
    note: "Resin · Hand-painted · 15 cm",
    slug: "mini-me-family-portrait",
  },
  {
    image: heroSlide2,
    alt: "Collection of hand-painted 3D printed hero figurines on a lit display shelf",
    title: "Collector Display Series",
    note: "Resin · Studio finish · 20 cm",
    slug: "anime-hero-collectible",
  },
  {
    image: heroSlide3,
    alt: "Resin 3D printer producing a detailed toy figurine inside a modern studio",
    title: "Printed In Our Studio",
    note: "25-micron detail · Ahmedabad",
    slug: "articulated-robot-buddy",
  },
];

export const company = {
  name: "3D Printopia Verse",
  tagline: "Bringing Imagination To Life",
  phone: "+91 93992 34699",
  phoneHref: "tel:+919399234699",
  whatsapp: "919399234699",
  whatsappHref:
    "https://wa.me/919399234699?text=Hi%203D%20Printopia%20Verse%2C%20I%27d%20like%20a%20quote%20for%20a%20custom%203D%20printed%20figurine.",
  email: "gujrekrishna2@gmail.com",
  emailHref: "mailto:gujrekrishna2@gmail.com",
  address: "A13, Chandrapuri Apartment, Vastrapur, Ahmedabad – 380015, Gujarat, India",
  mapQuery: "Chandrapuri+Apartment+Vastrapur+Ahmedabad+380015",
  hours: "Mon – Sat · 10:00 AM – 8:00 PM IST",
  countries: ["India"],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
};

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  from: number;
};

export const categories: Category[] = [
  {
    slug: "kids-collection",
    name: "Kids Collection",
    blurb:
      "Durable, child-safe figurines printed from your child's photo, favourite cartoon or their own crayon drawing.",
    image: catKids,
    from: 1199,
  },
  {
    slug: "robot-toys",
    name: "Robot Toys",
    blurb:
      "Articulated print-in-place robots and mech models with movable joints — no glue, no assembly, endless play.",
    image: toyRobot,
    from: 1039,
  },
  {
    slug: "animals-pets",
    name: "Animals & Pets",
    blurb:
      "Lifelike pet miniatures sculpted from 4–6 photos of your dog, cat or horse. A keepsake that lasts forever.",
    image: catPets,
    from: 1999,
  },
  {
    slug: "dinosaurs",
    name: "Dinosaurs",
    blurb:
      "Museum-style dinosaur models with sculpted scale texture — T-Rex, triceratops, stegosaurus and raptors.",
    image: toyDinosaur,
    from: 1279,
  },
  {
    slug: "fantasy",
    name: "Fantasy & Mythical",
    blurb:
      "Dragons, unicorns, wizards and castles, hand-painted with metallic and pearl accents for display shelves.",
    image: toyDragon,
    from: 1439,
  },
  {
    slug: "anime-collection",
    name: "Anime Collection",
    blurb:
      "High-detail resin anime and manga style collectibles, hand-painted with display bases and effect parts.",
    image: catAnime,
    from: 2799,
  },
  {
    slug: "vehicles",
    name: "Vehicles",
    blurb:
      "Scale supercars, bikes, trucks and dream-garage replicas in matte, gloss or metallic show finishes.",
    image: catVehicles,
    from: 1599,
  },
  {
    slug: "couple-wedding",
    name: "Couple & Wedding",
    blurb:
      "Couple statues, cake toppers and anniversary busts sculpted to your outfits, poses and expressions.",
    image: catCouple,
    from: 2799,
  },
  {
    slug: "corporate-gifts",
    name: "Corporate Gifts",
    blurb:
      "Branded trophies, desk awards, nameplates and bulk employee gifting with your logo and brand colours.",
    image: catCorporate,
    from: 639,
  },
  {
    slug: "home-decor",
    name: "Home Decor & Keychains",
    blurb:
      "Lithophane lamps, wall art, planters, nameplates and personalised keychains for gifting at any scale.",
    image: prDecorLamp,
    from: 319,
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  image: string;
  short: string;
  description: string;
  height: string;
  turnaround: string;
  tags: string[];
  rating: number;
  reviews: number;
  badge?: "Best Seller" | "New" | "Limited";
};

/** Every listed price carries a 20% studio discount off the original MRP. */
export const DISCOUNT = 0.2;

type RawProduct = Omit<Product, "compareAt">;

const catalogue: RawProduct[] = [
  /* ---------- Couple & Wedding ---------- */
  {
    slug: "mini-me-family-portrait",
    name: "Mini-Me Family Portrait Set",
    category: "couple-wedding",
    price: 8999,
    image: hero,
    short: "A full-colour miniature of your whole family, sculpted from photos.",
    description:
      "Our flagship keepsake. Send 6–10 photos of each family member and our sculptors build a faithful 1:20 miniature group — outfits, hairstyles, glasses, even the family dog. Printed in high-resolution resin, hand-painted and mounted on an engraved black acrylic base.",
    height: "12 cm – 18 cm",
    turnaround: "10–14 days",
    tags: ["Family", "Keepsake", "Hand-painted"],
    rating: 4.9,
    reviews: 214,
    badge: "Best Seller",
  },
  {
    slug: "wedding-cake-topper",
    name: "Bespoke Wedding Cake Topper",
    category: "couple-wedding",
    price: 6499,
    image: catCouple,
    short: "The two of you, in your actual wedding outfits.",
    description:
      "Send outfit photos and a pose you love. We sculpt the lehenga embroidery, the sherwani buttons and the bouquet. Food-safe base, and a protective display dome so it lives on the shelf long after the cake is gone.",
    height: "14 cm",
    turnaround: "14–18 days",
    tags: ["Wedding", "Couple", "Hand-painted"],
    rating: 5,
    reviews: 141,
    badge: "Limited",
  },
  {
    slug: "mini-figure-of-you",
    name: "Mini Figure Of You",
    category: "couple-wedding",
    price: 3499,
    image: pzMinifigure,
    short: "A 10 cm miniature of you, sculpted entirely from photographs.",
    description:
      "The single-person version of our bestselling keepsake. Ideal for birthdays, farewells and anniversaries — sculpted, printed in resin and hand-painted down to the pattern on your shirt.",
    height: "10 cm",
    turnaround: "8–12 days",
    tags: ["Personalised", "Gift", "Photo-based"],
    rating: 4.9,
    reviews: 176,
  },

  /* ---------- Anime ---------- */
  {
    slug: "anime-hero-collectible",
    name: "Anime Hero Collectible",
    category: "anime-collection",
    price: 5499,
    image: catAnime,
    short: "Dynamic-pose anime statue with translucent effect parts.",
    description:
      "A studio-grade anime collectible printed at 25-micron layers. Choose an existing pose from our library or send reference art for a fully bespoke sculpt. Includes translucent energy effect parts and a mirrored display base.",
    height: "20 cm",
    turnaround: "12–16 days",
    tags: ["Collector", "Resin", "Display base"],
    rating: 4.9,
    reviews: 168,
    badge: "Best Seller",
  },
  {
    slug: "chibi-character-figure",
    name: "Chibi Character Figure",
    category: "anime-collection",
    price: 2499,
    image: prAnimeChibi,
    short: "Big-head chibi styling of any character — or of you.",
    description:
      "A cheerful, palm-sized chibi sculpt with glossy hand-painted eyes and a colour-matched base. Popular as desk companions and couple sets.",
    height: "9 cm",
    turnaround: "7–10 days",
    tags: ["Chibi", "Cute", "Desk"],
    rating: 4.8,
    reviews: 132,
    badge: "New",
  },
  {
    slug: "mecha-battle-suit",
    name: "Mecha Battle Suit Model",
    category: "anime-collection",
    price: 6299,
    image: prAnimeMecha,
    short: "Panel-lined mecha with weathered metallic finish.",
    description:
      "Multi-part mecha model with posable shoulders and a weapon loadout of your choice. Airbrushed metallic base coat, panel lining and matte top coat.",
    height: "24 cm",
    turnaround: "14–18 days",
    tags: ["Mecha", "Collector", "Airbrushed"],
    rating: 4.9,
    reviews: 88,
  },
  {
    slug: "samurai-warrior-statue",
    name: "Samurai Warrior Statue",
    category: "anime-collection",
    price: 6999,
    image: prAnimeSamurai,
    short: "Armoured samurai in a dramatic drawn-blade pose.",
    description:
      "Sculpted armour lacing, flowing cloth and a razor-thin katana. Finished with deep-red and gunmetal pigments over a textured rock base.",
    height: "26 cm",
    turnaround: "14–20 days",
    tags: ["Statue", "Detailed", "Display"],
    rating: 5,
    reviews: 64,
    badge: "Limited",
  },
  {
    slug: "gaming-character-statue",
    name: "Gaming Character Statue",
    category: "anime-collection",
    price: 5999,
    image: heroSlide2,
    short: "Your in-game avatar, brought into the real world.",
    description:
      "Send a screenshot or model export of your favourite character or your own avatar. We optimise, sculpt supports, print and finish it as a display-grade statue.",
    height: "22 cm",
    turnaround: "14–18 days",
    tags: ["Gaming", "Collector", "Custom"],
    rating: 4.8,
    reviews: 118,
  },

  /* ---------- Kids ---------- */
  {
    slug: "superhero-action-figure",
    name: "Superhero Action Figure",
    category: "kids-collection",
    price: 3999,
    image: catKids,
    short: "Your child as the hero of their own comic universe.",
    description:
      "We put your child's face on a heroic body, complete with cape, emblem and custom suit colours. The single most requested birthday gift in our studio.",
    height: "16 cm",
    turnaround: "8–12 days",
    tags: ["Kids", "Birthday", "Photo-based"],
    rating: 4.9,
    reviews: 233,
    badge: "Best Seller",
  },
  {
    slug: "baby-memory-figurine",
    name: "Baby Memory Figurine",
    category: "kids-collection",
    price: 4599,
    image: toyTeddy,
    short: "First smile, first steps — frozen in a keepsake sculpture.",
    description:
      "A gentle, softly sculpted miniature from your favourite newborn photograph, paired with an engraved plaque carrying name, date and birth weight.",
    height: "10 cm",
    turnaround: "10–14 days",
    tags: ["Newborn", "Keepsake", "Gift"],
    rating: 5,
    reviews: 87,
  },
  {
    slug: "space-rocket-playset",
    name: "Space Rocket Playset",
    category: "kids-collection",
    price: 1899,
    image: prKidsRocket,
    short: "Rocket, capsule and astronaut — printed ready to play.",
    description:
      "A tough PLA+ playset with a removable capsule, rolling wheels and a mini astronaut figure. Child-safe, non-toxic finishes throughout.",
    height: "18 cm",
    turnaround: "4–6 days",
    tags: ["Kids", "Playset", "Child-safe"],
    rating: 4.8,
    reviews: 121,
    badge: "New",
  },
  {
    slug: "name-alphabet-blocks",
    name: "Personalised Name Blocks",
    category: "kids-collection",
    price: 1299,
    image: prKidsBlocks,
    short: "Pastel alphabet blocks spelling your child's name.",
    description:
      "Chunky, rounded blocks in pastel or primary colours spelling any name up to twelve letters. A nursery shelf favourite and a very photogenic gift.",
    height: "5 cm per block",
    turnaround: "3–5 days",
    tags: ["Nursery", "Personalised", "Gift"],
    rating: 4.7,
    reviews: 143,
  },

  /* ---------- Robots ---------- */
  {
    slug: "articulated-robot-buddy",
    name: "Articulated Robot Buddy",
    category: "robot-toys",
    price: 1799,
    image: toyRobot,
    short: "Print-in-place robot with 14 movable joints. Zero assembly.",
    description:
      "A tough PLA+ robot that arrives fully articulated straight from the printer. Fourteen joints, swappable heads and a name plate on the chest. Drop-tested and finished with child-safe, non-toxic coatings.",
    height: "15 cm",
    turnaround: "4–6 days",
    tags: ["Kids", "Articulated", "Child-safe"],
    rating: 4.8,
    reviews: 189,
    badge: "Best Seller",
  },
  {
    slug: "titan-mech-guardian",
    name: "Titan Mech Guardian",
    category: "robot-toys",
    price: 3299,
    image: prRobotTitan,
    short: "Heavy-armour guardian robot with weathered plating.",
    description:
      "A display-scale mech with sculpted armour plating, glowing accent paint and a posable torso. Finished in gunmetal with battle-worn edge highlights.",
    height: "22 cm",
    turnaround: "9–12 days",
    tags: ["Mech", "Display", "Painted"],
    rating: 4.9,
    reviews: 76,
  },
  {
    slug: "retro-tin-style-robot",
    name: "Retro Tin-Style Robot",
    category: "robot-toys",
    price: 1699,
    image: prRobotRetro,
    short: "1950s-style windup robot in cream, red and chrome.",
    description:
      "A nostalgia piece: boxy body, antenna, dial chest panel and chrome-effect limbs. Printed in PLA+ and finished with metallic pigment.",
    height: "14 cm",
    turnaround: "5–8 days",
    tags: ["Retro", "Collector", "Desk"],
    rating: 4.7,
    reviews: 69,
  },
  {
    slug: "astronaut-explorer-figure",
    name: "Astronaut Explorer Figure",
    category: "robot-toys",
    price: 2199,
    image: toyAstronaut,
    short: "Suited astronaut with helmet visor and moon base.",
    description:
      "A crisp white spacesuit sculpt with a tinted visor, mission patch of your choice and a cratered display base.",
    height: "16 cm",
    turnaround: "6–9 days",
    tags: ["Space", "Gift", "Display"],
    rating: 4.8,
    reviews: 94,
  },

  /* ---------- Animals & Pets ---------- */
  {
    slug: "pet-miniature-portrait",
    name: "Pet Miniature Portrait",
    category: "animals-pets",
    price: 3499,
    image: catPets,
    short: "Your pet, sculpted in miniature from just a few photos.",
    description:
      "Fur texture, markings, collar and that one crooked ear — captured exactly. Our artists sculpt from your photos and share a 3D preview before printing, so nothing is left to chance.",
    height: "8 cm – 10 cm",
    turnaround: "8–12 days",
    tags: ["Pets", "Memorial", "Photo-based"],
    rating: 5,
    reviews: 302,
    badge: "Best Seller",
  },
  {
    slug: "panda-cuddle-figure",
    name: "Panda Cuddle Figure",
    category: "animals-pets",
    price: 1499,
    image: toyPanda,
    short: "Soft-form panda with matte black and white finish.",
    description:
      "A rounded, huggable panda sculpt with a smooth matte finish. Available in three sizes and optionally engraved with a name on the base.",
    height: "12 cm",
    turnaround: "4–6 days",
    tags: ["Animals", "Gift", "Desk"],
    rating: 4.8,
    reviews: 158,
  },
  {
    slug: "sitting-cat-sculpture",
    name: "Sitting Cat Sculpture",
    category: "animals-pets",
    price: 1699,
    image: toyCat,
    short: "Elegant seated cat, ready in your cat's own markings.",
    description:
      "Choose a coat pattern — tabby, tuxedo, calico or ginger — or send photos and we will hand-paint your own cat's markings.",
    height: "13 cm",
    turnaround: "5–8 days",
    tags: ["Cats", "Hand-painted", "Decor"],
    rating: 4.9,
    reviews: 112,
  },
  {
    slug: "temple-elephant-statue",
    name: "Temple Elephant Statue",
    category: "animals-pets",
    price: 2299,
    image: toyElephant,
    short: "Ornate elephant sculpture with detailed drapery.",
    description:
      "A traditional caparisoned elephant with sculpted ornaments and drapery, finished in ivory-white or antique bronze. A popular housewarming gift.",
    height: "17 cm",
    turnaround: "7–10 days",
    tags: ["Decor", "Traditional", "Gift"],
    rating: 4.8,
    reviews: 83,
  },

  /* ---------- Dinosaurs ---------- */
  {
    slug: "t-rex-museum-model",
    name: "T-Rex Museum Model",
    category: "dinosaurs",
    price: 2499,
    image: toyDinosaur,
    short: "Roaring T-Rex with sculpted scale texture and dry-brushed skin.",
    description:
      "Our most detailed dinosaur: anatomically sculpted musculature, individually textured scales and a hand dry-brushed paint job over a rock display base.",
    height: "20 cm",
    turnaround: "7–10 days",
    tags: ["Dinosaur", "Detailed", "Display"],
    rating: 4.9,
    reviews: 147,
    badge: "Best Seller",
  },
  {
    slug: "triceratops-model",
    name: "Triceratops Model",
    category: "dinosaurs",
    price: 2199,
    image: prDinoTriceratops,
    short: "Broad-frilled triceratops with earthy natural tones.",
    description:
      "Sculpted frill detail, textured hide and a stable four-point stance that survives enthusiastic play. Available in natural or vivid colourways.",
    height: "17 cm",
    turnaround: "6–9 days",
    tags: ["Dinosaur", "Kids", "Sturdy"],
    rating: 4.8,
    reviews: 96,
  },
  {
    slug: "stegosaurus-model",
    name: "Stegosaurus Model",
    category: "dinosaurs",
    price: 2099,
    image: prDinoStegosaurus,
    short: "Plated stegosaurus with tail spikes and textured hide.",
    description:
      "Twin rows of sculpted back plates in contrast colours, with a reinforced tail for durability. Optional name plaque on the base.",
    height: "16 cm",
    turnaround: "6–9 days",
    tags: ["Dinosaur", "Kids", "Painted"],
    rating: 4.7,
    reviews: 78,
  },
  {
    slug: "velociraptor-pair",
    name: "Velociraptor Pair",
    category: "dinosaurs",
    price: 2599,
    image: prDinoRaptor,
    short: "Two raptors mid-hunt on a shared jungle base.",
    description:
      "A dynamic two-figure scene with feathered detailing and glossy eyes. Sold as a pair on one sculpted base.",
    height: "18 cm",
    turnaround: "8–12 days",
    tags: ["Dinosaur", "Collector", "Scene"],
    rating: 4.9,
    reviews: 61,
    badge: "New",
  },

  /* ---------- Fantasy ---------- */
  {
    slug: "guardian-dragon-statue",
    name: "Guardian Dragon Statue",
    category: "fantasy",
    price: 4499,
    image: toyDragon,
    short: "Winged dragon with pearl-shift scales and gold horns.",
    description:
      "A showpiece dragon with membranous wings printed at 25 microns, colour-shifting pearl scales and metallic gold horn tips over a stone-effect base.",
    height: "24 cm",
    turnaround: "12–16 days",
    tags: ["Fantasy", "Collector", "Metallic"],
    rating: 5,
    reviews: 104,
    badge: "Best Seller",
  },
  {
    slug: "rainbow-unicorn-figure",
    name: "Rainbow Unicorn Figure",
    category: "fantasy",
    price: 1799,
    image: toyUnicorn,
    short: "Pastel unicorn with iridescent mane and gold horn.",
    description:
      "A soft-pastel unicorn with a swirled iridescent mane and a gilded horn. A perennial birthday favourite, also available with a name on the base.",
    height: "14 cm",
    turnaround: "5–8 days",
    tags: ["Fantasy", "Kids", "Gift"],
    rating: 4.9,
    reviews: 189,
  },
  {
    slug: "wizard-tabletop-miniature",
    name: "Wizard Tabletop Miniature",
    category: "fantasy",
    price: 1599,
    image: prFantWizard,
    short: "Robed wizard miniature for tabletop campaigns.",
    description:
      "A 32 mm-scale hero miniature with crisp robe folds, a staff and a spell effect option. Print your entire party in one batch.",
    height: "7 cm",
    turnaround: "4–7 days",
    tags: ["Tabletop", "Miniature", "Hobby"],
    rating: 4.8,
    reviews: 132,
  },
  {
    slug: "fantasy-castle-model",
    name: "Fantasy Castle Model",
    category: "fantasy",
    price: 5299,
    image: prFantCastle,
    short: "Multi-tower castle with sculpted stonework and flags.",
    description:
      "A large architectural centrepiece with individually textured stone courses, staircases and slate roofing. Optional interior LED lighting.",
    height: "28 cm",
    turnaround: "14–20 days",
    tags: ["Architecture", "Display", "Statement"],
    rating: 4.9,
    reviews: 47,
    badge: "Limited",
  },

  /* ---------- Vehicles ---------- */
  {
    slug: "supercar-scale-model",
    name: "Supercar Scale Model",
    category: "vehicles",
    price: 4299,
    image: catVehicles,
    short: "1:24 scale dream-garage replica with show-car paint finish.",
    description:
      "Wet-sanded, primed and finished in automotive-grade paint with clear coat. Optional lit display base and engraved plaque with your registration number.",
    height: "1:24 scale",
    turnaround: "10–14 days",
    tags: ["Auto", "Gift", "Display"],
    rating: 4.8,
    reviews: 96,
  },
  {
    slug: "classic-roadster-model",
    name: "Classic Roadster Model",
    category: "vehicles",
    price: 3799,
    image: prVehRoadster,
    short: "Vintage convertible with chrome trim and wire wheels.",
    description:
      "A nostalgic roadster with chrome-effect bumpers, spoked wheels and a hand-polished body finish in your choice of colour.",
    height: "1:24 scale",
    turnaround: "10–14 days",
    tags: ["Classic", "Auto", "Collector"],
    rating: 4.8,
    reviews: 58,
  },
  {
    slug: "superbike-scale-model",
    name: "Superbike Scale Model",
    category: "vehicles",
    price: 3299,
    image: prVehSuperbike,
    short: "Race-fairing superbike with fine mechanical detail.",
    description:
      "Fine-detail resin print capturing brake discs, chain and suspension linkage, finished in your team livery on a mirrored base.",
    height: "1:12 scale",
    turnaround: "10–14 days",
    tags: ["Bike", "Detailed", "Display"],
    rating: 4.9,
    reviews: 63,
    badge: "New",
  },
  {
    slug: "haulage-truck-model",
    name: "Haulage Truck Model",
    category: "vehicles",
    price: 3999,
    image: prVehTruck,
    short: "Branded long-haul truck — a fleet-gifting favourite.",
    description:
      "Popular with logistics companies: a scale truck and trailer finished in your fleet livery with printed decals and a name plaque.",
    height: "1:32 scale",
    turnaround: "12–16 days",
    tags: ["Corporate", "Auto", "Branded"],
    rating: 4.7,
    reviews: 41,
  },

  /* ---------- Corporate ---------- */
  {
    slug: "corporate-award-trophy",
    name: "Corporate Award Trophy",
    category: "corporate-gifts",
    price: 1899,
    image: catCorporate,
    short: "Custom-sculpted award in your brand colours and logo.",
    description:
      "Designed around your brand identity — logo geometry, Pantone-matched paint and laser-etched recipient plates. Volume pricing from 25 units, delivered pan-India.",
    height: "18 cm – 26 cm",
    turnaround: "7–12 days (bulk)",
    tags: ["Corporate", "Bulk", "Branded"],
    rating: 4.9,
    reviews: 74,
  },
  {
    slug: "engraved-award-trophy",
    name: "Engraved Award Trophy",
    category: "corporate-gifts",
    price: 1899,
    image: pzTrophy,
    short: "Sculpted trophy with laser-etched recipient plate.",
    description:
      "A clean, modern trophy silhouette with a brushed metallic finish and an engraved plate carrying the recipient's name, award and date.",
    height: "22 cm",
    turnaround: "6–10 days",
    tags: ["Awards", "Engraved", "Bulk"],
    rating: 4.8,
    reviews: 92,
  },
  {
    slug: "branded-desk-organiser",
    name: "Branded Desk Organiser",
    category: "corporate-gifts",
    price: 1299,
    image: prCorpOrganiser,
    short: "Logo-embossed desk caddy for onboarding kits.",
    description:
      "A tidy pen-and-card caddy embossed with your logo, printed in brand colours. Our most ordered employee onboarding gift.",
    height: "10 cm",
    turnaround: "5–9 days (bulk)",
    tags: ["Desk", "Onboarding", "Branded"],
    rating: 4.7,
    reviews: 118,
  },
  {
    slug: "logo-paperweight",
    name: "Logo Paperweight",
    category: "corporate-gifts",
    price: 999,
    image: prCorpPaperweight,
    short: "Weighted logo sculpture for desks and reception.",
    description:
      "A dense, satisfying paperweight built around your logo geometry, with a felted base that will not scratch desks.",
    height: "8 cm",
    turnaround: "5–8 days (bulk)",
    tags: ["Desk", "Logo", "Corporate"],
    rating: 4.7,
    reviews: 66,
  },
  {
    slug: "corporate-gift-set",
    name: "Corporate Gift Set",
    category: "corporate-gifts",
    price: 1249,
    image: pzCorporate,
    short: "Boxed branded gifting, dispatched to multiple addresses.",
    description:
      "A curated set — desk piece, keychain and card holder — presented in a branded gift box. We handle individual name printing and multi-address dispatch.",
    height: "Boxed set",
    turnaround: "8–14 days (bulk)",
    tags: ["Gifting", "Bulk", "Branded"],
    rating: 4.9,
    reviews: 57,
    badge: "Best Seller",
  },

  /* ---------- Home decor & keychains ---------- */
  {
    slug: "personalised-nameplate",
    name: "Personalised LED Nameplate",
    category: "home-decor",
    price: 1499,
    image: pzNameplate,
    short: "Backlit home or office nameplate in any font and finish.",
    description:
      "Weather-resistant ASA print with warm LED backlighting, wall or door mount, and a choice of matte, wood-fill or metallic finishes.",
    height: "30 cm wide",
    turnaround: "5–8 days",
    tags: ["Decor", "Home", "LED"],
    rating: 4.7,
    reviews: 154,
  },
  {
    slug: "photo-lithophane-lamp",
    name: "Photo Lithophane Lamp",
    category: "home-decor",
    price: 1999,
    image: pzLithophane,
    short: "Your photograph, revealed in light through printed relief.",
    description:
      "A precision-printed relief panel that appears plain white until lit, then reveals your photograph in warm tones. Supplied with a wooden LED base.",
    height: "18 cm",
    turnaround: "4–7 days",
    tags: ["Photo", "Gift", "Lighting"],
    rating: 4.9,
    reviews: 201,
    badge: "Best Seller",
  },
  {
    slug: "custom-keychain-pack",
    name: "Custom Keychain Pack (10)",
    category: "home-decor",
    price: 899,
    image: pzKeychain,
    short: "Ten personalised keychains — names, logos or tiny faces.",
    description:
      "The easiest way to gift at scale. Perfect for return gifts, event giveaways and small-batch merchandise. Multi-colour printing included.",
    height: "5 cm",
    turnaround: "3–5 days",
    tags: ["Gifting", "Bulk", "Events"],
    rating: 4.7,
    reviews: 267,
  },
  {
    slug: "moon-table-lamp",
    name: "Moon Table Lamp",
    category: "home-decor",
    price: 2299,
    image: prDecorLamp,
    short: "Textured lunar globe on a solid wooden base.",
    description:
      "A surface-accurate moon globe printed in translucent PLA, lit from within and mounted on a turned wooden base with a touch dimmer.",
    height: "16 cm",
    turnaround: "5–8 days",
    tags: ["Lighting", "Decor", "Gift"],
    rating: 4.9,
    reviews: 176,
  },
  {
    slug: "geometric-planter",
    name: "Geometric Planter",
    category: "home-decor",
    price: 799,
    image: prDecorPlanter,
    short: "Faceted planter with drainage insert, in six colours.",
    description:
      "A low-poly planter printed in matte PLA with a hidden drainage tray. Sold singly or as a stepped set of three.",
    height: "10 cm",
    turnaround: "3–5 days",
    tags: ["Plants", "Decor", "Modern"],
    rating: 4.7,
    reviews: 138,
  },
  {
    slug: "parametric-wall-art",
    name: "Parametric Wall Art Panel",
    category: "home-decor",
    price: 2799,
    image: prDecorWallart,
    short: "Sculpted wave panel that plays with light and shadow.",
    description:
      "A large relief panel with flowing parametric waves that shift with the light through the day. Supplied ready to hang in matte white or custom colour.",
    height: "40 × 40 cm",
    turnaround: "7–11 days",
    tags: ["Wall art", "Interior", "Statement"],
    rating: 4.8,
    reviews: 54,
    badge: "New",
  },
  {
    slug: "gift-box-surprise-set",
    name: "Gift Box Surprise Set",
    category: "home-decor",
    price: 1599,
    image: toyGiftbox,
    short: "A curated box of small printed gifts, wrapped and ready.",
    description:
      "Three miniature pieces of your choosing, presented in a printed gift box with a personalised card. Ideal for festival hampers.",
    height: "Boxed set",
    turnaround: "4–7 days",
    tags: ["Gifting", "Festival", "Set"],
    rating: 4.8,
    reviews: 89,
  },
];

export const products: Product[] = catalogue.map((p) => ({
  ...p,
  compareAt: p.price,
  price: Math.round((p.price * (1 - DISCOUNT)) / 10) * 10,
}));

export const stats = [
  { value: 18500, suffix: "+", label: "Figurines delivered" },
  { value: 240, suffix: "+", label: "Corporate clients" },
  { value: 25, suffix: "+", label: "Indian cities served" },
  { value: 98, suffix: "%", label: "5-star satisfaction" },
];

export const steps = [
  {
    title: "Share your idea",
    text: "Send photos, a reference image or just describe it on WhatsApp. Our design team replies within 2 hours with feasibility and pricing.",
  },
  {
    title: "Approve the 3D preview",
    text: "We sculpt a digital model and send you a 360° turntable render. Request unlimited revisions until the likeness is perfect.",
  },
  {
    title: "Print, paint & deliver",
    text: "Your model is resin-printed, hand-finished, quality checked and shipped in protective foam packaging with insured tracking.",
  },
];

export const testimonials = [
  {
    name: "Ananya Mehta",
    role: "Bride · Ahmedabad",
    text: "The cake topper looked more like us than our photographs did. My mother-in-law cried. Worth every rupee and then some.",
    rating: 5,
  },
  {
    name: "Rohan Desai",
    role: "Collector · Mumbai",
    text: "I have imported collectibles that cost three times as much and the paintwork here is genuinely better. The detail on the hands is unreal.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "Customer · Bengaluru",
    text: "Ordered a miniature of our late labrador. It arrived in nine days, perfectly packed. Our whole family was in tears — the good kind.",
    rating: 5,
  },
  {
    name: "Vikram Shah",
    role: "HR Head · Ahmedabad",
    text: "300 branded awards for our annual meet, delivered three days early. Their bulk process is genuinely enterprise-grade.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Mother of two · Pune",
    text: "My son opened his superhero figure and went completely silent. Then he hugged it. That reaction is why I will order every year.",
    rating: 5,
  },
  {
    name: "Aditya Rao",
    role: "Anime fan · Hyderabad",
    text: "The turntable preview before printing sold me. I asked for three changes, no complaints, no extra charges. Brilliant service.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "How many photos do you need for a personalised figurine?",
    a: "Between 6 and 10 clear photos: front, both profiles, a three-quarter angle and one full-body shot for posture and outfit. Better photos mean a better likeness — our team will tell you honestly if a re-shoot will help.",
  },
  {
    q: "How long does a custom order take?",
    a: "Most personalised figurines ship in 8–14 working days. Simple keychains and nameplates go out in 3–5 days. Wedding and large group pieces need 14–18 days. Rush production is available for an additional 25%.",
  },
  {
    q: "What does a custom figurine cost?",
    a: "Single-person figurines start at ₹3,499, couples from ₹4,999, and pet miniatures from ₹2,499. Final pricing depends on height, detail, number of figures and finish. You get a firm quote before any work begins.",
  },
  {
    q: "Where do you deliver?",
    a: "We deliver across India with insured, fully tracked courier partners. Metro cities typically receive orders in 2–3 days after dispatch, and other locations in 3–6 days.",
  },
  {
    q: "What material do you print in?",
    a: "Display figurines use high-detail photopolymer resin for maximum sharpness. Toys and functional items use PLA+, PETG or ASA for impact strength and outdoor durability. All finishes are non-toxic and child-safe.",
  },
  {
    q: "Can I see the model before it is printed?",
    a: "Always. We send a 360° render of the digital sculpt and only start printing after you approve it. Revisions at that stage are free.",
  },
  {
    q: "Do you handle bulk and corporate orders?",
    a: "Yes — from 25 to 5,000 units. We manage brand-matched colours, logo geometry, individual name engraving, gift boxing and multi-address dispatch.",
  },
  {
    q: "What if my figurine arrives damaged?",
    a: "We replace it free of charge. Send photos of the packaging and the item within 48 hours of delivery and a replacement goes into production the same day.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  readTime: string;
  category: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-personalised-3d-figurines-are-made",
    title: "How a Personalised 3D Figurine Is Actually Made, Step by Step",
    excerpt:
      "From your ten photographs to a hand-painted resin sculpture — an honest look inside our Ahmedabad studio.",
    body: [
      "Every personalised figurine begins with photographs, not printers. Our sculptors study facial geometry — the width between the eyes, the slope of the nose bridge, how the jawline reads in profile — before touching any software.",
      "The digital sculpt is built in layers: base body and posture, then clothing with real fabric folds, then the face, which typically takes the longest. Hair is sculpted strand-cluster by strand-cluster because printed hair that looks like a helmet is the fastest way to ruin a likeness.",
      "Once you approve the 360° render, the model is sliced with supports placed to avoid any visible surface. We print in photopolymer resin at 25-micron layers, which is roughly a quarter of the thickness of a human hair.",
      "Post-processing is where craft beats technology. Supports are removed by hand, the model is cured, wet-sanded, primed, and airbrushed in base tones before fine detail is painted with brushes as small as 0.1 mm. A single face can take three hours.",
      "Finally the piece is sealed with a matte or satin varnish, mounted on its base, photographed for your approval, and packed in cut foam. Nothing ships until it looks right under studio lighting.",
    ],
    date: "2026-07-12",
    readTime: "6 min read",
    category: "3D Printing",
    image: studioProcess,
  },
  {
    slug: "best-personalised-gifts-2026",
    title: "12 Personalised Gift Ideas That Beat Another Gift Card in 2026",
    excerpt:
      "Thoughtful, custom-made presents for birthdays, anniversaries and corporate gifting that people actually keep.",
    body: [
      "The best gift is evidence that you paid attention. A generic voucher says the opposite. Personalised 3D printed pieces sit at the other extreme — they are physically impossible to buy for anyone else.",
      "For parents, a miniature of the children at their current age is the single most emotional gift we produce. Children change so fast that a figurine dated to a specific year becomes a milestone marker.",
      "For couples, a sculpture of a shared moment — the proposal pose, the first dance, the two of you on a bike — outperforms jewellery in every follow-up survey we run.",
      "For colleagues and clients, branded desk pieces work far better than hampers. They stay visible for years and quietly advertise the relationship every working day.",
      "Our rule of thumb: if the gift can be re-gifted, it is not personal enough. Anything with a face, a name or a date on it never gets passed along.",
    ],
    date: "2026-06-28",
    readTime: "5 min read",
    category: "Custom Gifts",
    image: toyUnicorn,
  },
  {
    slug: "anime-collectibles-buying-guide",
    title: "Anime Collectibles: How to Tell a Great Statue From a Cheap One",
    excerpt:
      "Layer lines, seam placement, paint transitions and base design — the details serious collectors check first.",
    body: [
      "Look at the hands. Fingers are the hardest geometry to print and the first place a rushed job shows. Well-executed hands have separated, individually shaped digits with clean nail definition.",
      "Then check seam placement. Multi-part statues must join along natural lines — belts, hairlines, armour edges — never across a cheek or a bicep.",
      "Paint transitions matter more than paint colour. Gradients should be airbrushed and smooth; hard banding means a spray can and a hurried schedule.",
      "Finally, the base. A weighted, purpose-designed base signals a studio that thought about display. A flat black disc signals an afterthought.",
      "Every statue we ship is photographed from six angles under studio lighting before it leaves. If you cannot see the sculpt clearly in a seller's own photos, assume there is a reason.",
    ],
    date: "2026-06-09",
    readTime: "7 min read",
    category: "Anime Collectibles",
    image: toyAstronaut,
  },
  {
    slug: "corporate-gifting-with-3d-printing",
    title: "Why Smart Companies Are Switching to 3D Printed Corporate Gifts",
    excerpt:
      "Lower minimums, real brand geometry and zero warehouse risk — the business case for custom-printed gifting.",
    body: [
      "Traditional corporate gifting forces a compromise: injection moulding needs thousands of units to justify tooling, so brands over-order and store the surplus for years.",
      "Additive manufacturing removes the tooling cost entirely. Twenty-five units cost proportionally the same as five hundred, which means you can gift precisely and iterate designs annually.",
      "It also unlocks geometry that moulding cannot produce — interlocking logo forms, lattice structures, individually named pieces within a single batch.",
      "For employee recognition programmes, individual name engraving at no extra cost changes the perceived value of the award completely.",
      "We handle design, brand-colour matching, gift boxing and multi-address dispatch across India, with dedicated account management for orders above 100 units.",
    ],
    date: "2026-05-22",
    readTime: "5 min read",
    category: "Corporate Gifts",
    image: toyDinosaur,
  },
  {
    slug: "resin-vs-filament-printing",
    title: "Resin vs Filament: Which 3D Printing Technology Suits Your Product?",
    excerpt:
      "A plain-English comparison of detail, strength, cost and durability so you can choose with confidence.",
    body: [
      "Resin printing wins on detail. At 25 microns it captures eyelashes, fabric weave and jewellery. It is the right choice for any display piece where likeness matters.",
      "Filament printing wins on toughness. PLA+, PETG and ASA survive being dropped, chewed on and left in the sun — which is exactly what happens to children's toys.",
      "Cost tracks with volume: resin is more expensive per gram, filament is cheaper for large solid parts. A 30 cm display piece is usually printed hollow in resin, then weighted.",
      "For outdoor nameplates and planters we default to ASA, which resists UV yellowing far better than PLA.",
      "If you are unsure, send us the use case rather than the material. We will recommend the technology that will still look good in five years.",
    ],
    date: "2026-05-04",
    readTime: "6 min read",
    category: "Technology",
    image: catVehicles,
  },
  {
    slug: "wedding-figurines-planning-guide",
    title: "Planning a Wedding Figurine: Timelines, Outfits and Poses",
    excerpt:
      "Everything to prepare so your cake topper arrives well before the mehendi, not after the honeymoon.",
    body: [
      "Book 6–8 weeks out. Wedding sculpts need 14–18 days of production, and you want buffer for outfit changes and revisions.",
      "Send outfit photographs, not descriptions. Embroidery patterns, dupatta drape and turban style are all sculpted individually, and we can only match what we can see.",
      "Choose a pose that reads well from the front and the side — cake toppers are viewed from every angle in photographs.",
      "Tell us about the details that matter to you: a grandmother's bangle, a particular watch, the dog in the baraat. These are the things guests notice.",
      "We deliver in a protective dome so the piece moves from the cake table to the mantelpiece without a scratch.",
    ],
    date: "2026-04-18",
    readTime: "4 min read",
    category: "Wedding Gifts",
    image: catCouple,
  },
];

export const trustBadges = [
  "Free 360° preview before printing",
  "Insured pan-India shipping",
  "Damage-free delivery guarantee",
  "Hand-painted by studio artists",
];

export const clients = [
  "Adani Group",
  "Zydus",
  "Torrent Pharma",
  "Nirma",
  "Arvind Ltd",
  "GIFT City",
  "Symphony",
  "Rasna",
];
