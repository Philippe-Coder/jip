"use client";

import { useState } from "react";
import { ORG } from "@/lib/content";

const SUBJECTS = [
  "Partenariat institutionnel",
  "Financement d'un programme",
  "Parrainage de La Couronne Artisanale",
  "Transfert de compétences",
  "Autre demande",
] as const;

const field =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [message, setMessage] = useState("");

  const body = [
    `Nom : ${name}`,
    org && `Organisation : ${org}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${ORG.email}?subject=${encodeURIComponent(
    `[Site JIP] ${subject}`,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
      className="rounded-2xl border border-border bg-background p-8"
    >
      <h2 className="text-xl font-bold tracking-tight">Nous écrire</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Ce formulaire ouvre votre logiciel de messagerie avec un message
        pré-rempli. Aucune donnée n&apos;est transmise ni stockée par ce site.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Nom et prénom <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="org" className="text-sm font-medium">
            Organisation
          </label>
          <input
            id="org"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className={field}
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium">
            Objet
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={field}
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${field} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Préparer le message
        </button>
      </div>
    </form>
  );
}
