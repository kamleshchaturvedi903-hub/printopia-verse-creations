export const animeSeries = ["Demon Slayer", "Solo Leveling"] as const;
export type AnimeSeries = (typeof animeSeries)[number];

export type AnimeCharacter = {
  name: string;
  series: AnimeSeries;
  /** Populated once the official character artwork is uploaded. */
  image?: string;
};

export const animeCharacters: AnimeCharacter[] = [
  { name: "Nezuko Kamado", series: "Demon Slayer" },
  { name: "Tanjiro Kamado", series: "Demon Slayer" },
  { name: "Zenitsu Agatsuma", series: "Demon Slayer" },
  { name: "Inosuke Hashibira", series: "Demon Slayer" },
  { name: "Akaza", series: "Demon Slayer" },
  { name: "Daki", series: "Demon Slayer" },
  { name: "Shinobu Kocho", series: "Demon Slayer" },
  { name: "Muzan Kibutsuji", series: "Demon Slayer" },
  { name: "Yoo Jinho", series: "Solo Leveling" },
];
