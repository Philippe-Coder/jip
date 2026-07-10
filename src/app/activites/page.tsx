import type { Metadata } from "next";
import { Button, Card, Eyebrow, Lead, PageHero, Section, Title } from "@/components/ui";
import { ACTIVITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos activités",
  description:
    "Formation et équipement, insertion professionnelle et La Couronne Artisanale : les programmes du réseau JIP, AEDI et CRAD depuis 2015.",
};

export default function Activites() {
  return (
    <>
      <PageHero
        eyebrow="Nos activités"
        title="Former, insérer, valoriser"
        lead="Depuis 2015, notre action a permis d'obtenir des résultats concrets sur le terrain : 1 173 jeunes formés, plus de 1 000 contrats d'apprentissage signés et un concours national d'excellence."
      />

      <Section>
        <div className="space-y-8">
          {ACTIVITIES.map((activity, i) => (
            <Card key={activity.title} className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <span className="font-serif text-4xl font-semibold text-border">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  {activity.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {activity.summary}
                </p>
              </div>
              <ul className="space-y-4 lg:border-l lg:border-border lg:pl-8">
                {activity.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--brand)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                      aria-hidden
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm leading-relaxed text-muted">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Focus</Eyebrow>
            <Title>La Couronne Artisanale</Title>
            <Lead>
              Un concours national qui valorise le talent, la créativité et le
              leadership des jeunes filles artisanes.
            </Lead>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                « La Couronne Artisanale » (LCA) est notre événement
                d&apos;excellence. Au-delà de la compétition, il donne une
                visibilité nationale à des jeunes femmes dont le savoir-faire
                reste trop souvent invisible dans le secteur informel.
              </p>
              <p>
                La relance de cet événement est l&apos;un des objectifs
                prioritaires de notre phase 2026, et l&apos;une des missions
                confiées à notre représentation en France.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/france">Soutenir la relance de la LCA</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Ce que la LCA met en lumière
            </h3>
            <ul className="mt-6 space-y-6">
              {[
                {
                  t: "Le talent",
                  d: "La maîtrise technique des métiers d'artisanat, évaluée par des maîtres artisans.",
                },
                {
                  t: "La créativité",
                  d: "La capacité à innover dans la forme, la matière et l'usage des créations.",
                },
                {
                  t: "Le leadership",
                  d: "L'aptitude des jeunes filles artisanes à porter une activité et à entraîner leur communauté.",
                },
              ].map((item) => (
                <li key={item.t}>
                  <p className="text-base font-semibold text-brand">{item.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
