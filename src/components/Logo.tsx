export function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Logo du réseau JIP"
      className="shrink-0"
    >
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="var(--ocean)"
        strokeWidth="5"
        strokeDasharray="200 40"
        strokeLinecap="round"
        transform="rotate(-40 50 50)"
      />
      <circle cx="52" cy="27" r="8" fill="var(--brand)" />
      <path
        d="M52 37c10 0 17 7 17 17v10a5 5 0 0 1-10 0v-8l-3 26a5 5 0 0 1-10 0l-2-16-4 16a5 5 0 0 1-10-1l6-27c2-10 7-17 16-17z"
        fill="var(--brand)"
      />
      <path
        d="M36 52c-6 2-10 7-11 14a5 5 0 0 0 10 1c1-5 3-8 6-10z"
        fill="var(--accent)"
      />
      <g fill="var(--accent)">
        <path d="M76 14l1.6 3.4 3.7.4-2.8 2.5.8 3.7L76 22.1l-3.3 1.9.8-3.7-2.8-2.5 3.7-.4z" />
        <path d="M86 26l1.2 2.5 2.7.3-2 1.9.6 2.7-2.5-1.4-2.4 1.4.6-2.7-2-1.9 2.7-.3z" />
      </g>
    </svg>
  );
}
