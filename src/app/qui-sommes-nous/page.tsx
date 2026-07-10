import type { Metadata } from "next";
import { Card, Eyebrow, Lead, PageHero, Section, Title } from "@/components/ui";
import { MEMBERS, ORG, STATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Le réseau Jeunesse et Initiatives Privées (JIP), organisation apolitique et à but non lucratif créée en 1998, avec AEDI et CRAD.",
};

const accentMap = {
  green: "bg-brand-light text-brand-dark",
  blue: "bg-ocean-light text-ocean",
  orange: "bg-accent-light text-accent",
} as const;

export default function QuiSommesNous() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Un réseau né en 1998 au service des artisans togolais"
        lead="Le réseau Jeunesse et Initiatives Privées est une organisation apolitique et à but non lucratif. Notre mission : combattre la pauvreté dans le secteur artisanal au Togo par le développement humain durable."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Notre mission</Eyebrow>
            <Title>Faire de l&apos;artisanat un levier d&apos;autonomie</Title>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Créé en {ORG.foundedYear}, le réseau {ORG.network} intervient au
                cœur du secteur informel togolais, là où se concentrent les
                jeunes les plus vulnérables : déscolarisés, sans qualification et
                sans perspective d&apos;insertion.
              </p>
              <p>
                Notre conviction est simple : l&apos;artisanat d&apos;excellence
                est une solution d&apos;insertion digne. Encore faut-il structurer
                la filière, former sérieusement, équiper les apprentis et
                accompagner les maîtres artisans qui les accueillent.
              </p>
              <p>
                C&apos;est le rôle de nos trois organisations, dont les expertises
                se complètent sur l&apos;ensemble du parcours du jeune, de la
                première formation à l&apos;installation de son propre atelier.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Le réseau en bref
            </h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Dénomination
                </dt>
                <dd className="mt-1 text-sm font-medium">{ORG.fullName}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Membres du réseau
                </dt>
                <dd className="mt-1 text-sm font-medium">{ORG.members}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  N° de récépissé
                </dt>
                <dd className="mt-1 text-sm font-medium">{ORG.recepisse}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Siège
                </dt>
                <dd className="mt-1 text-sm font-medium">{ORG.city}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Statut
                </dt>
                <dd className="mt-1 text-sm font-medium">
                  Apolitique, à but non lucratif
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section muted>
        <Eyebrow>Les membres</Eyebrow>
        <Title>Une synergie d&apos;expertises complémentaires</Title>
        <Lead>
          Chaque organisation du réseau porte un maillon précis de la chaîne de
          valeur : former, incuber, structurer.
        </Lead>

        <div className="mt-14 space-y-6">
          {MEMBERS.map((member) => (
            <Card key={member.acronym} className="grid gap-6 md:grid-cols-[180px_1fr]">
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wide ${accentMap[member.accent]}`}
                >
                  {member.acronym}
                </span>
                <p className="mt-3 text-sm font-medium text-accent">
                  {member.role}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Notre impact</Eyebrow>
        <Title>Ce que le réseau a accompli</Title>
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-bold tracking-tight text-brand">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm font-semibold">
                  {stat.label}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  {stat.detail}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
