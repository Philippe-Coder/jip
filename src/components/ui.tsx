import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-surface" : ""}>
      <div className={`mx-auto max-w-6xl px-5 py-20 ${className}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </p>
  );
}

export function Title({
  children,
  as: Tag = "h2",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  const size =
    Tag === "h1"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : "text-3xl sm:text-4xl";
  return (
    <Tag className={`${size} mt-3 font-bold leading-[1.1] tracking-tight text-balance`}>
      {children}
    </Tag>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{children}</p>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark"
      : "border border-border bg-background text-foreground hover:bg-surface";

  if (external) {
    return (
      <a href={href} className={`${base} ${styles}`} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-black/5 ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <div className="border-b border-border bg-brand-light">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title as="h1">{title}</Title>
          <Lead>{lead}</Lead>
        </div>
      </div>
    </div>
  );
}
