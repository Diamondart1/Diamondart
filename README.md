# Diamond Art — Portfolio & Personal Branding

Site portfolio premium pour Diamond Art, construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**. Prêt à être déployé sur **Vercel**.

## 🎨 Identité visuelle

| Rôle | Valeur |
|---|---|
| Fond principal | `#FFFFFF` (paper) / `#F5F5F2` (mist) |
| Gris charcoal (logo "Diamond") | `#3A3A3A` (charcoal) |
| Accent — vert plume (logo "art") | `#C6F135` (plume) |
| Pied de page | fond gris charcoal `#3A3A3A` |
| Titres | Syne (font-display) |
| Texte courant | Inter (font-body) |
| Labels techniques | JetBrains Mono (font-mono) |

Le site a été éclairci : les grandes sections sombres (Hero, bandeau défilant, bandeau d'images, Formations) sont désormais en fond clair. Seul le pied de page reste en gris charcoal, pour ancrer visuellement le bas de page sans recourir au noir.

Le logomark (`components/Logo.tsx`) reproduit fidèlement l'identité réelle : le mot "Diamond" et le triangle en gris charcoal, "art" en vert plume gras. Sur fond sombre (pied de page), passez la prop `light` (`<Logo light />`) pour basculer "Diamond" en blanc.

L'élément signature du site est le **cadre "plan d'architecte"** (`blueprint-frame` dans `app/globals.css`) : des coins en L qui rappellent les repères de coupe d'un plan technique, ainsi qu'une grille discrète en arrière-plan de certaines sections qui évoque une maquette BIM. Toutes les icônes interactives (réseaux sociaux, flèches, FAQ) bénéficient d'une micro-animation fluide au survol (`icon-anim` dans `globals.css`) pour une sensation premium.

## 🚀 Démarrer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## ✏️ Modifier le contenu

**Toutes les données du site (textes, projets, formations, réseaux sociaux, coordonnées, FAQ) sont centralisées dans un seul fichier :**

```
lib/data.ts
```

Vous pouvez y modifier :
- `siteConfig` — nom, slogan, email, téléphone, WhatsApp
- `marqueeWords` — les mots-clés du bandeau défilant (façon zhdesignstudio.com)
- `heroContent` — accroche, statistiques et image de la section d'accueil
- `imageStrip` — les 4 images affichées juste sous le bandeau défilant
- `about` — votre histoire et son image
- `projects` — vos projets de portfolio (titre, description, logiciels, rôle, image principale + galerie)
- `socials` — vos comptes Instagram / TikTok / YouTube / LinkedIn
- `trainings` — vos formations (Revit, D5 Render, ou toute nouvelle formation)
- `testimonials` — les témoignages affichés dans le carrousel
- `faqs` — les questions/réponses de la FAQ
- `contact` — le texte de la section contact

Le site s'exprime à la première personne du pluriel (« nous ») pour une tonalité studio. Les citations des témoignages restent à la première personne du singulier puisqu'il s'agit des mots des clients eux-mêmes.

Aucune autre modification de code n'est nécessaire pour changer les textes.

## 🖼️ Remplacer les images

Les images de démonstration se trouvent dans `public/images/` (01.jpg, 02.jpg, 03.jpg, 04.jpg, 05.jpg, PS1.jpg, SALON2.jpg, SAM_01.jpg, SAM_04.jpg — vos rendus de projets). Pour les remplacer par vos propres visuels :

1. Déposez vos fichiers dans `public/images/` (gardez des noms simples, sans espace).
2. Mettez à jour les chemins correspondants dans `lib/data.ts` (`heroContent.image`, `about.image`, `imageStrip`, `projects[].mainImage`, `projects[].gallery`, `trainings[].image`).

Toutes les images utilisent déjà `next/image` avec l'effet de rideau signature (`img-reveal`) — aucun code supplémentaire n'est nécessaire, il suffit de changer le chemin du fichier.

## 📩 Connecter le formulaire de contact

Le formulaire (`components/Contact.tsx`) est fonctionnel côté interface mais n'envoie pas encore d'email réel. Deux options simples :

- **Formspree / Web3Forms** : remplacez la fonction `handleSubmit` par un `fetch()` vers votre endpoint de formulaire.
- **Route API Next.js** : créez `app/api/contact/route.ts` et utilisez un service comme [Resend](https://resend.com) pour l'envoi d'email.

## 🌗 Mode sombre

Le site respecte automatiquement la préférence système de l'utilisateur et propose un bouton de bascule manuel dans le header (desktop et mobile).

## 📦 Déploiement sur Vercel

1. Poussez ce projet sur un dépôt GitHub/GitLab/Bitbucket.
2. Sur [vercel.com](https://vercel.com), cliquez sur **New Project** et importez le dépôt.
3. Vercel détecte automatiquement Next.js — aucune configuration supplémentaire n'est nécessaire.
4. Cliquez sur **Deploy**.

## 🗂️ Structure du projet

```
app/
  layout.tsx        → polices, métadonnées SEO globales
  page.tsx           → assemblage des sections de la page d'accueil
  globals.css        → design system (couleurs, typographie, animations)
  robots.ts           → SEO
  sitemap.ts          → SEO
components/
  Header.tsx          → menu fixe, mode sombre, menu mobile
  Hero.tsx            → section d'accueil
  Marquee.tsx         → bandeau de mots-clés défilant (signature visuelle)
  ImageStrip.tsx      → bandeau de 4 images sous le marquee
  About.tsx           → parcours et histoire
  Portfolio.tsx       → galerie de projets + modale de détail
  SocialMedia.tsx     → cartes réseaux sociaux
  Trainings.tsx       → formations Revit / D5 Render
  Testimonials.tsx    → carrousel de témoignages
  FAQ.tsx             → accordéon de questions fréquentes
  Contact.tsx         → formulaire et coordonnées
  Footer.tsx          → pied de page
  Logo.tsx            → logomark Diamond Art
  CustomCursor.tsx    → curseur personnalisé (desktop)
  MagneticButtons.tsx → effet magnétique sur les boutons .magnetic
lib/
  data.ts             → 🟢 tout le contenu éditable du site
  useReveal.ts        → animations d'apparition au scroll (fade, masque, rideau)
public/
  images/             → vos rendus de projets (01.jpg, 02.jpg, PS1.jpg, etc.)
```

## ✅ Bonnes pratiques déjà intégrées

- Responsive (mobile → desktop)
- SEO (métadonnées, Open Graph, sitemap, robots.txt)
- Accessibilité (focus visible, `aria-label`, respect de `prefers-reduced-motion`)
- Animations discrètes au scroll (désactivées automatiquement si l'utilisateur préfère moins de mouvement)
- Menu fixe et défilement fluide
- Mode sombre élégant
