export const ORG = {
  network: "Réseau d'ONG AEDI - JIP",
  fullName: "Jeunesse et Initiatives Privées",
  tagline: "Combattre la pauvreté par un développement humain durable",
  members: "AEDI · JIP · CRAD",
  email: "assoaedi@yahoo.com",
  site: "www.ongjip.com",
  phones: ["(00228) 90 06 41 57", "(00228) 99 10 82 28"],
  recepisse: "191 / MISD-SG-DAPSC-DSC",
  city: "Lomé, Togo",
  foundedYear: 1998,
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/activites", label: "Nos activités" },
  { href: "/vision", label: "Vision 2026-2027" },
  { href: "/france", label: "Représentation France" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATS = [
  {
    value: "1 173",
    label: "jeunes formés",
    detail: "Mis en apprentissage entre 2015 et 2019",
  },
  {
    value: "1 000+",
    label: "contrats d'apprentissage",
    detail: "Signés avec un accompagnement psychosocial",
  },
  {
    value: "442",
    label: "kits distribués",
    detail: "Couture, mécanique, soudure et autres métiers",
  },
  {
    value: "1998",
    label: "année de création",
    detail: "Organisation apolitique et à but non lucratif",
  },
] as const;

export const MEMBERS = [
  {
    acronym: "AEDI",
    name: "Action pour l'Éducation et le Développement Intégral",
    role: "Formation & renforcement des capacités",
    description:
      "AEDI porte le volet formation du réseau et le renforcement des capacités techniques des jeunes apprentis comme des maîtres artisans.",
    accent: "green" as const,
  },
  {
    acronym: "JIP",
    name: "Jeunesse et Initiatives Privées",
    role: "Incubation & pilotage stratégique",
    description:
      "JIP assure l'incubation des initiatives, la gestion stratégique du réseau et le suivi des plans d'action sur le terrain.",
    accent: "blue" as const,
  },
  {
    acronym: "CRAD",
    name: "Cercle de Réflexion des Artisans pour le Développement",
    role: "Liaison avec les maîtres artisans",
    description:
      "CRAD est l'organe de liaison qui travaille directement avec les maîtres artisans pour structurer le secteur informel.",
    accent: "orange" as const,
  },
] as const;

export const ACTIVITIES = [
  {
    title: "Formation et équipement",
    summary:
      "1 173 jeunes formés et dotés de kits d'apprentissage : couture, mécanique, soudure et autres métiers d'artisanat.",
    points: [
      "Parcours de formation intégrale adossé à un maître artisan",
      "Dotation en kits d'installation pour démarrer l'activité",
      "Suivi technique assuré par AEDI et CRAD",
    ],
  },
  {
    title: "Insertion professionnelle",
    summary:
      "Plus de 1 000 contrats d'apprentissage signés, assortis d'un accompagnement psychosocial des bénéficiaires.",
    points: [
      "Contractualisation formelle apprenti / maître artisan",
      "Accompagnement psychosocial tout au long du parcours",
      "Mise en relation avec les ateliers du réseau",
    ],
  },
  {
    title: "La Couronne Artisanale",
    summary:
      "Un concours national d'excellence valorisant le talent, la créativité et le leadership des jeunes filles artisanes.",
    points: [
      "Événement national de valorisation du savoir-faire",
      "Mise en lumière du leadership féminin",
      "Relance programmée dans le cadre de la Renaissance Artisanale",
    ],
  },
] as const;

export const VISION = [
  {
    title: "Formation intégrale",
    goal: "2 000 nouveaux jeunes",
    description:
      "Former 2 000 jeunes vulnérables sur deux ans, dans une logique de formation intégrale alliant technique, savoir-être et insertion.",
  },
  {
    title: "Digitalisation",
    goal: "E-commerce & gestion",
    description:
      "Intégrer des modules d'e-commerce et de gestion afin que les jeunes entrepreneurs artisans accèdent à de nouveaux marchés.",
  },
  {
    title: "Pérennisation",
    goal: "Incubateur IEA",
    description:
      "Créer un Incubateur d'Entrepreneuriat Artisanal pour accompagner durablement les initiatives issues de nos formations.",
  },
] as const;

export const FRANCE_MISSIONS = [
  {
    title: "Mobilisation de ressources",
    description:
      "Sécuriser des financements stables pour nos programmes de formation continue et la relance de nos événements nationaux.",
  },
  {
    title: "Partenariats internationaux",
    description:
      "Créer des ponts avec des centres de formation et des entreprises françaises pour un transfert de compétences.",
  },
  {
    title: "Visibilité et plaidoyer",
    description:
      "Sensibiliser les partenaires européens à l'artisanat comme levier d'autonomie durable et de réduction de l'exode rural en Afrique.",
  },
] as const;

export const MANDATE = {
  representative: "Madame Lyliane",
  place: "Lomé",
  date: "05 mars 2026",
  signatory: "Le Coordinateur National — Réseau d'ONG JIP, AEDI, CRAD",
  responsibilities: [
    "Promouvoir notre modèle d'insertion par l'artisanat durable.",
    "Identifier et mobiliser des ressources pour soutenir nos projets au Togo, notamment la relance de « La Couronne Artisanale ».",
    "Établir des partenariats stratégiques durables avec des acteurs du secteur public et privé en France.",
  ],
} as const;
