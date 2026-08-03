import nezuko from "@/assets/anime-nezuko.webp";
import tanjiro from "@/assets/anime-tanjiro.webp";
import zenitsu from "@/assets/anime-zenitsu.webp";
import inosuke from "@/assets/anime-inosuke.webp";
import shinobu from "@/assets/anime-shinobu.webp";
import akaza from "@/assets/anime-akaza.webp";
import muzan from "@/assets/anime-muzan.webp";
import daki from "@/assets/anime-daki.webp";

export type AnimeCharacter = {
  name: string;
  tagline: string;
  image: string;
};

export const animeCharacters: AnimeCharacter[] = [
  { name: "Nezuko Kamado", tagline: "Hand-painted collectible", image: nezuko },
  { name: "Tanjiro Kamado", tagline: "Battle-pose sculpt", image: tanjiro },
  { name: "Zenitsu Agatsuma", tagline: "Thunder breathing edition", image: zenitsu },
  { name: "Inosuke Hashibira", tagline: "Dual-blade sculpt", image: inosuke },
  { name: "Shinobu Kocho", tagline: "Butterfly detail finish", image: shinobu },
  { name: "Akaza", tagline: "Dynamic combat pose", image: akaza },
  { name: "Muzan Kibutsuji", tagline: "Signature white suit", image: muzan },
  { name: "Daki", tagline: "Ornate kimono detailing", image: daki },
];
