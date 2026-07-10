import { Button, Card, Eyebrow, Lead, Section, Title } from "@/components/ui";
import { ACTIVITIES, MEMBERS, ORG, STATS, VISION } from "@/lib/content";

const accentMap = {
  green: "bg-brand-light text-brand-dark",
  blue: "bg-ocean-light text-ocean",
  orange: "bg-accent-light text-accent",
} as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-brand-light">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-7xl flex-col justify-center px-5 py-12 sm:py-16">
          <div className="max-w-4xl animate-rise">
            <Eyebrow>Depuis {ORG.foundedYear} · {ORG.city}</Eyebrow>
            <h1 className="mt-3 text-[clamp(1.9rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-balance">
              L&apos;artisanat d&apos;excellence, une solution d&apos;insertion digne
              pour la jeunesse vulnérable.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Le réseau {ORG.members} combat la pauvreté dans le secteur artisanal
              au Togo par le développement humain durable : former, équiper,
              insérer et faire rayonner les talents.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/france">Soutenir la Renaissance Artisanale</Button>
              <Button href="/qui-sommes-nous" variant="ghost">
                Découvrir le réseau
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <Section className="py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground">
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

      {/* Le réseau */}
      <Section muted>
        <Eyebrow>Une synergie d&apos;expertises</Eyebrow>
        <Title>Trois organisations, une même mission</Title>
        <Lead>
          Notre force réside dans la complémentarité de trois structures qui
          couvrent l&apos;ensemble du parcours du jeune artisan, de la formation
          à l&apos;installation.
        </Lead>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <Card key={member.acronym}>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wide ${accentMap[member.accent]}`}
              >
                {member.acronym}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {member.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Activités */}
      <Section>
        <Eyebrow>Nos activités</Eyebrow>
        <Title>Des résultats concrets depuis 2015</Title>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ACTIVITIES.map((activity, i) => (
            <Card key={activity.title}>
              <span className="font-serif text-3xl font-semibold text-border">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{activity.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {activity.summary}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/activites" variant="ghost">
            Voir le détail de nos programmes
          </Button>
        </div>
      </Section>

      {/* Vision */}
      <Section muted>
        <Eyebrow>Vision 2026-2027</Eyebrow>
        <Title>Une Renaissance Artisanale au Togo</Title>
        <Lead>
          Trois chantiers structurants pour passer d&apos;une logique de projet à
          une économie artisanale autonome et durable.
        </Lead>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {VISION.map((item) => (
            <Card key={item.title} className="bg-surface">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                {item.title}
              </p>
              <p className="mt-2 text-2xl font-bold text-brand">{item.goal}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="border-t border-border bg-brand">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white text-balance sm:text-4xl">
            Investir dans nos programmes, c&apos;est choisir un rendement social
            concret.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            Autonomie financière, réduction de l&apos;exode rural et affirmation du
            leadership féminin au Togo. Ensemble, donnons à ces créateurs les
            moyens de transformer leur destin.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
            >
              Devenir partenaire
            </a>
            <a
              href="/france"
              className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Notre représentation en France
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
