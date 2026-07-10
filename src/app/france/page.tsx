import type { Metadata } from "next";
import { Button, Card, Eyebrow, PageHero, Section, Title } from "@/components/ui";
import { FRANCE_MISSIONS, MANDATE, ORG } from "@/lib/content";

export const metadata: Metadata = {
  title: "Représentation en France",
  description:
    "Mandat de représentation officielle du réseau d'ONG JIP, AEDI et CRAD sur le territoire français : mobilisation de ressources, partenariats et plaidoyer.",
};

export default function France() {
  return (
    <>
      <PageHero
        eyebrow="Représentation officielle"
        title="Le réseau JIP en France"
        lead="L'expansion de notre réseau en France répond à trois besoins stratégiques : mobiliser des ressources, bâtir des partenariats internationaux et porter un plaidoyer pour l'artisanat comme levier d'autonomie."
      />

      <Section>
        <Eyebrow>Trois besoins stratégiques</Eyebrow>
        <Title>Pourquoi une représentation en France ?</Title>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {FRANCE_MISSIONS.map((mission, i) => (
            <Card key={mission.title}>
              <span className="font-serif text-3xl font-semibold text-border">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-xl font-semibold">{mission.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {mission.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Mandat */}
      <Section muted>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Note de représentation</Eyebrow>
          <Title>Mandat de représentation officielle en France</Title>

          <article className="mt-12 rounded-2xl border border-border bg-background p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              À l&apos;attention de {MANDATE.representative}
            </p>

            <div className="mt-8 space-y-6 font-serif text-base leading-[1.8] text-foreground">
              <p>Madame,</p>
              <p>
                Par la présente, le réseau d&apos;ONG composé de Jeunesse et
                Initiatives Privées (JIP) et de ses partenaires spécialisés, vous
                mandate officiellement pour assurer notre représentation sur le
                territoire français.
              </p>
              <p>
                Forte de votre expertise et de votre engagement, votre mission
                consistera à porter la voix de notre réseau auprès des
                institutions internationales, des partenaires techniques et
                financiers, ainsi que de la diaspora. Vous aurez pour
                responsabilité de :
              </p>
              <ul className="space-y-3 pl-1">
                {MANDATE.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Nous sommes convaincus que votre action sera déterminante pour le
                rayonnement de nos initiatives et pour l&apos;autonomisation de la
                jeunesse vulnérable que nous accompagnons.
              </p>
            </div>

            <footer className="mt-10 border-t border-border pt-6">
              <p className="text-sm text-muted">
                Fait à {MANDATE.place}, le {MANDATE.date}.
              </p>
              <p className="mt-1 text-sm font-semibold">{MANDATE.signatory}</p>
            </footer>
          </article>
        </div>
      </Section>

      {/* Argumentaire partenaires */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Aux partenaires</Eyebrow>
            <Title>Un rendement social concret</Title>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Le modèle du réseau {ORG.members} démontre que l&apos;artisanat
                d&apos;excellence est une solution d&apos;insertion digne pour la
                jeunesse vulnérable. Forts de la mise en apprentissage de 1 173
                jeunes et de la distribution de 442 kits entre 2015 et 2019, nous
                lançons une phase de relance ambitieuse pour 2026.
              </p>
              <p>
                Notre présence en France vise à transformer ces réussites en
                levier de développement à grande échelle. Investir dans nos
                programmes, c&apos;est choisir un rendement social mesurable :
                autonomie financière, réduction de l&apos;exode rural et
                affirmation du leadership féminin au Togo.
              </p>
              <p className="font-semibold text-foreground">
                Ensemble, donnons à ces créateurs les moyens de transformer leur
                destin et de bâtir l&apos;économie de demain.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Nous contacter</Button>
              <Button href="/vision" variant="ghost">
                Voir la vision 2026-2027
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-brand-light p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-dark">
              Formes de soutien possibles
            </h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  t: "Financement de programmes",
                  d: "Soutenir la formation intégrale des 2 000 jeunes prévus sur deux ans.",
                },
                {
                  t: "Parrainage de la Couronne Artisanale",
                  d: "Financer la relance de notre concours national d'excellence.",
                },
                {
                  t: "Transfert de compétences",
                  d: "Mobiliser des centres de formation et entreprises françaises autour de nos métiers.",
                },
                {
                  t: "Plaidoyer et visibilité",
                  d: "Relayer notre modèle auprès des institutions et de la diaspora.",
                },
              ].map((item) => (
                <li key={item.t}>
                  <p className="text-base font-semibold text-brand-dark">
                    {item.t}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-dark/75">
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
