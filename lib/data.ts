// ============================================================================
// DIAMOND ART — CONTENU DU SITE
// Modifiez les valeurs ci-dessous pour mettre à jour les textes, images et
// liens du site. Aucune connaissance en code n'est nécessaire pour éditer
// ce fichier : remplacez simplement le texte entre guillemets.
// ============================================================================

export const siteConfig = {
  name: "Diamond Art",
  fullName: "Diamond Art Studio",
  tagline: "L'architecture, pensée en amont, maîtrisée jusqu'au rendu final.",
  shortIntro:
    "Studio spécialisé en modélisation BIM, Revit, AutoCAD et visualisation D5 Render. Nous accompagnons des projets de conception jusqu'à leur rendu final, et nous formons la prochaine génération de professionnels du BTP.",
  location: "Basé à Dakar, Sénégal. Disponible à l'international",
  email: "contactdiamondart1@gmail.com",
  phone: "+221 78 198 98 50",
  whatsapp: "https://wa.me/221781989850",
};

export const nav = [
  { label: "À propos", href: "#apropos" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Formations", href: "#formations" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const marqueeWords = [
  "Architecture",
  "BIM",
  "Modélisation",
  "Visualisation",
  "Rendu",
  "Formation",
  "Précision",
  "Construction",
  "Volumétrie",
  "Structure",
  "Épure",
  "Vision",
];

// Utilisé par le nouvel accordéon d'images du Hero (inspiré du composant
// "interactive-image-accordion"). Le dernier élément est ouvert par défaut.
export const heroAccordion = [
  { title: "Modélisation BIM", image: "/images/01.jpg" },
  { title: "Rendu D5 Render", image: "/images/PS1.jpg" },
  { title: "Plans d'exécution", image: "/images/04.jpg" },
  { title: "Aménagement intérieur", image: "/images/SALON2.jpg" },
  { title: "Formation Revit", image: "/images/SAM_01.jpg" },
];

export const heroContent = {
  eyebrow: "Architecture · BIM · Formation",
  headline: ["Nous concevons des", "modèles qui tiennent", "debout deux fois."],
  subheadline:
    "D'abord dans le logiciel. Ensuite dans la réalité. Diamond Art accompagne des projets architecturaux de la modélisation BIM au rendu photoréaliste, et transmet ce savoir-faire à travers des formations professionnelles.",
  ctaPrimary: { label: "Voir nos projets", href: "#portfolio" },
  ctaSecondary: { label: "Découvrir nos formations", href: "#formations" },
  stats: [
    { value: "40+", label: "Projets modélisés" },
    { value: "3", label: "Années d'expérience BTP" },
    { value: "20+", label: "Pros formés en ligne" },
  ],
};

// Bandeau de 4 images sous le hero, inspiré de zhdesignstudio.com. Pointent vers le portfolio
export const imageStrip = ["/images/01.jpg", "/images/04.jpg", "/images/PS1.jpg", "/images/SALON2.jpg"];

export const about = {
  eyebrow: "À propos",
  title: "Du chantier à l'écran, une seule exigence : la précision.",
  paragraphs: [
    "Tout a commencé sur le terrain. Avant de maîtriser Revit ou D5 Render, nous avons appris à lire un plan d'exécution, à comprendre les contraintes d'un chantier et à mesurer l'écart entre une belle image et un bâtiment qui tient réellement debout. Cette double culture, technique et visuelle, est devenue la colonne vertébrale de Diamond Art.",
    "Au sein de notre studio, nous participons à des projets architecturaux et de construction, de la modélisation BIM à la production de plans d'exécution, en passant par la visualisation 3D destinée aux clients et aux appels d'offres. Chaque projet nous a appris qu'un bon modèle BIM n'est pas seulement esthétique : il doit être exploitable, cohérent et fidèle à la réalité constructive.",
    "C'est cette exigence que nous partageons aujourd'hui avec la communauté Diamond Art sur les réseaux sociaux, et que nous enseignons à travers nos formations Revit et D5 Render. Former d'autres professionnels n'est pas un à-côté : c'est la suite logique d'un métier que nous avons appris pas à pas, et que nous voulons rendre plus accessible à ceux qui débutent.",
  ],
  highlights: [
    { label: "Secteur", value: "Architecture & BTP" },
    { label: "Spécialité", value: "Modélisation BIM & rendu" },
    { label: "Mission", value: "Concevoir, former, transmettre" },
  ],
  image: "/images/05.jpg",
};

export type Project = {
  slug: string;
  title: string;
  context: string;
  role: string;
  software: string[];
  description: string;
  mainImage: string;
  gallery: string[];
};

// Nom confirmé par le client : Villa Adja Astou.
export const projects: Project[] = [
  {
    slug: "villa-adja-astou",
    title: "Villa Adja Astou",
    context: "Résidence privée : patio couvert, piscine, jardin paysager et façade à claire-voie bois",
    role: "Modélisation BIM complète & visualisation architecturale",
    software: ["Revit", "D5 Render", "AutoCAD"],
    description:
      "Modélisation complète de la villa et de ses extérieurs : patio couvert, piscine, jardin paysager, ossature bois et façades enduites. Rendus utilisés pour la présentation du projet au client avant construction.",
    mainImage: "/images/01.jpg",
    gallery: ["/images/02.jpg", "/images/05.jpg", "/images/03.jpg", "/images/04.jpg"],
  },
  {
    slug: "villa-opulence",
    title: "Villa Opulence",
    context: "Habitation R+1 : façade perforée et aménagements intérieurs",
    role: "Modélisation BIM complète, intérieur & extérieur",
    software: ["Revit", "D5 Render"],
    description:
      "Projet complet du plan de masse à l'aménagement intérieur : façade alvéolée signature, cage d'escalier, salle à manger et salon. Une démonstration de la maîtrise du processus de bout en bout.",
    mainImage: "/images/PS1.jpg",
    gallery: ["/images/SAM_01.jpg", "/images/SAM_04.jpg", "/images/SALON2.jpg"],
  },
];

// Vrais comptes Diamond Art. La demande de retrait de LinkedIn a été appliquée.
export const socials = [
  {
    name: "Instagram",
    handle: "@art_diamond66",
    description: "Coulisses de nos projets, astuces Revit et rendus D5 Render au quotidien.",
    href: "https://www.instagram.com/art_diamond66?igsh=M2FmZDVzZjZneGFr&utm_source=qr",
    icon: "instagram",
  },
  {
    name: "TikTok",
    handle: "@pmoussadieng",
    description: "Tutoriels courts et formats rapides pour progresser en BIM et en rendu.",
    href: "https://www.tiktok.com/@pmoussadieng?_r=1&_t=ZS-97kVDZrihs4",
    icon: "tiktok",
  },
  {
    name: "YouTube",
    handle: "@pmdieng",
    description: "Tutoriels approfondis et études de cas complètes, bientôt disponibles.",
    href: "https://youtube.com/@pmdieng?si=kLrWcFjaM6yz-hLi",
    icon: "youtube",
  },
];

export const trainings = [
  {
    slug: "formation-revit",
    title: "Formation Revit",
    subtitle: "De la prise en main à la production de projet complet",
    description:
      "Une formation complète pour maîtriser Revit de A à Z : modélisation architecturale, familles paramétriques, nomenclatures et mise en page des documents d'exécution.",
    benefits: [
      "Maîtriser la modélisation BIM sous Revit",
      "Produire des plans et nomenclatures professionnels",
      "Gagner un temps considérable sur vos projets",
      "Accéder à des fichiers d'exercice réels",
    ],
    image: "/images/plan-revit.svg",
    cta: "Découvrir la formation",
  },
  {
    slug: "formation-d5-render",
    title: "Formation D5 Render",
    subtitle: "Créer des rendus photoréalistes qui vendent vos projets",
    description:
      "Apprenez à transformer une maquette 3D en rendu photoréaliste captivant : matériaux, éclairage, atmosphère et post-production pour des présentations client irréprochables.",
    benefits: [
      "Créer des rendus photoréalistes en un temps record",
      "Maîtriser la lumière et les matériaux réalistes",
      "Produire des animations pour vos présentations",
      "Se démarquer visuellement auprès des clients",
    ],
    image: "/images/SALON2.jpg",
    cta: "Découvrir la formation",
  },
];

export const testimonials = [
  {
    name: "Amadou Ba",
    role: "Étudiant en architecture",
    quote:
      "Grâce à la formation Revit, j'ai enfin compris la logique du BIM. Les maquettes sont plus propres et beaucoup plus rapides à produire.",
  },
  {
    name: "Fatou Ndiaye",
    role: "Dessinatrice-projeteuse",
    quote:
      "Les rendus D5 Render que je produis maintenant convainquent mes clients dès la première présentation. Un vrai gain de crédibilité.",
  },
  {
    name: "Moussa Diop",
    role: "Chef de projet BTP",
    quote:
      "Une pédagogie claire, des explications concrètes issues du terrain. On sent que l'équipe Diamond Art connaît vraiment les contraintes d'un vrai projet.",
  },
  {
    name: "Aïssatou Sow",
    role: "Architecte junior",
    quote:
      "Le suivi personnalisé fait toute la différence. Chaque question trouve une réponse claire et applicable immédiatement.",
  },
];

export const faqs = [
  {
    question: "Qu'est-ce que Diamond Art ?",
    answer:
      "Diamond Art est un studio dédié à la modélisation BIM, à la visualisation architecturale et à la formation professionnelle. Nous accompagnons des projets réels tout en partageant notre savoir-faire avec la communauté BTP.",
  },
  {
    question: "Pourquoi Diamond Art a-t-il été créé ?",
    answer:
      "Nous avons constaté que la communication visuelle d'un projet est aussi importante que sa conception technique. Diamond Art est né pour combler cet écart, en formant les professionnels aux outils de représentation modernes.",
  },
  {
    question: "À qui s'adressent nos formations ?",
    answer:
      "À toute personne souhaitant progresser en BIM et en rendu : étudiants en architecture, dessinateurs-projeteurs, architectes en activité et professionnels du BTP en reconversion numérique.",
  },
  {
    question: "Quels logiciels enseignez-vous ?",
    answer:
      "Nos formations couvrent principalement Revit pour la modélisation BIM et D5 Render pour la visualisation photoréaliste, avec des bases solides en AutoCAD.",
  },
  {
    question: "Comment accéder à une formation ?",
    answer:
      "Rendez-vous dans la section Formations de ce site, choisissez le programme qui vous correspond, puis contactez notre équipe pour finaliser votre inscription.",
  },
  {
    question: "Proposez-vous un accompagnement pendant les cours ?",
    answer:
      "Oui. Chaque module s'accompagne d'un espace d'échange où vous pouvez poser vos questions et recevoir des retours personnalisés de notre équipe.",
  },
];

export const contact = {
  eyebrow: "Contact",
  title: "Un projet à modéliser ? Une formation à rejoindre ?",
  description:
    "Que vous soyez une entreprise à la recherche d'un partenaire BIM fiable ou un professionnel souhaitant progresser, notre équipe répond personnellement à chaque message.",
};

export const footerLinks = {
  columns: [
    {
      title: "Navigation",
      links: nav,
    },
    {
      title: "Formations",
      links: trainings.map((t) => ({ label: t.title, href: `#formations` })),
    },
    {
      title: "Réseaux",
      links: socials.map((s) => ({ label: s.name, href: s.href })),
    },
  ],
};
