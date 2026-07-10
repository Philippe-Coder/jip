import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ORG } from "@/lib/content";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${ORG.network} — ${ORG.tagline}`,
    template: `%s | ${ORG.network}`,
  },
  description:
    "Réseau d'ONG JIP, AEDI et CRAD : formation, insertion professionnelle et entrepreneuriat artisanal pour la jeunesse vulnérable au Togo depuis 1998.",
  keywords: [
    "JIP",
    "AEDI",
    "CRAD",
    "ONG Togo",
    "artisanat",
    "formation professionnelle",
    "La Couronne Artisanale",
  ],
  openGraph: {
    title: `${ORG.network} — ${ORG.members}`,
    description: ORG.tagline,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
