import { CtaBand, PageHero } from "./ui";

export function LegalPage({
  title,
  eyebrow,
  intro,
  updated,
  sections,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero crumbs={[{ label: title }]} eyebrow={eyebrow} title={title} subtitle={intro} />
      <section className="container-lux py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Last updated: {updated}
          </p>
          {sections.map((s) => (
            <div key={s.heading} className="mt-10">
              <h2 className="font-display text-xl font-bold text-ink">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-[1.85] text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
