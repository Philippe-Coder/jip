import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { ORG } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter le réseau d'ONG JIP, AEDI et CRAD à Lomé au Togo pour un partenariat, un financement ou une demande d'information.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre engagement à nos côtés"
        lead="Partenaire technique, bailleur, entreprise, centre de formation ou membre de la diaspora : écrivez-nous et construisons ensemble la prochaine étape."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <ContactForm />

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                Coordonnées
              </h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${ORG.email}`}
                      className="font-medium text-brand hover:underline"
                    >
                      {ORG.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Site web
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`https://${ORG.site}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-brand hover:underline"
                    >
                      {ORG.site}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Téléphone
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {ORG.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="block font-medium hover:text-brand"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Adresse
                  </dt>
                  <dd className="mt-1 font-medium">{ORG.city}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    N° de récépissé
                  </dt>
                  <dd className="mt-1 font-medium">{ORG.recepisse}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-brand-light p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-dark">
                Représentation en France
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-dark/80">
                Pour toute demande depuis la France — partenariat, financement,
                transfert de compétences — notre représentation officielle est
                votre point de contact privilégié.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
