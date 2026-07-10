import type { Metadata } from "next";
import { Button, Card, Eyebrow, PageHero, Section, Title } from "@/components/ui";
import { VISION } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vision 2026-2027",
  description:
    "La Renaissance Artisanale : former 2 000 jeunes, digitaliser les métiers et créer un Incubateur d'Entrepreneuriat Artisanal au Togo.",
};

export default function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Vision 2026-2027"
        title="Une Renaissance Artisanale au Togo"
        lead="Après une phase de formation massive entre 2015 et 2019, nous lançons une phase de relance ambitieuse : passer d'une logique de projet à une économie artisanale autonome et durable."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {VISION.map((item, i) => (
            <Card key={item.title}>
              <span className="font-serif text-3xl font-semibold text-border">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-2xl font-bold text-brand">{item.goal}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Le raisonnement</Eyebrow>
            <Title>Pourquoi une phase de relance ?</Title>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Entre 2015 et 2019, le réseau a mis en apprentissage 1 173 jeunes
                et distribué 442 kits d&apos;installation. Ces chiffres prouvent
                la validité du modèle : quand un jeune est formé, contractualisé
                et équipé, il s&apos;insère.
              </p>
              <p>
                Mais la formation seule ne suffit plus. Les jeunes artisans
                installés se heurtent aujourd&apos;hui à deux plafonds :
                l&apos;accès au marché et la gestion de leur activité. La
                Renaissance Artisanale répond précisément à ces deux limites.
              </p>
              <p>
                D&apos;où nos trois chantiers : élargir la base de jeunes formés,
                les outiller pour vendre en ligne et gérer leur atelier, puis
                pérenniser l&apos;accompagnement dans une structure dédiée,
                l&apos;Incubateur d&apos;Entrepreneuriat Artisanal.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Le rendement social attendu
            </h3>
            <ul className="mt-6 space-y-6">
              {[
                {
                  t: "Autonomie financière",
                  d: "Des ateliers viables, capables de dégager un revenu et d'employer à leur tour.",
                },
                {
                  t: "Réduction de l'exode rural",
                  d: "Des perspectives économiques crédibles là où vivent les jeunes.",
                },
                {
                  t: "Leadership féminin",
                  d: "Des jeunes filles artisanes reconnues, formées et visibles au niveau national.",
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
            <div className="mt-8">
              <Button href="/contact">Discuter d&apos;un partenariat</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
