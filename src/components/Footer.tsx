import Link from "next/link";
import { Logo } from "./Logo";
import { NAV, ORG } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <span className="text-base font-bold text-brand">{ORG.network}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Réseau d&apos;ONG {ORG.members} combattant la pauvreté dans le secteur
            artisanal au Togo par un développement humain durable.
          </p>
          <p className="mt-4 text-xs text-muted">
            N° de récépissé : {ORG.recepisse}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href={`mailto:${ORG.email}`}
                className="transition-colors hover:text-brand"
              >
                {ORG.email}
              </a>
            </li>
            <li>
              <a
                href={`https://${ORG.site}`}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-brand"
              >
                {ORG.site}
              </a>
            </li>
            {ORG.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-brand"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li>{ORG.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted">
          © {new Date().getFullYear()} {ORG.network} — {ORG.members}. Organisation
          apolitique et à but non lucratif créée en {ORG.foundedYear}.
        </p>
      </div>
    </footer>
  );
}
