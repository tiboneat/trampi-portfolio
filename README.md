# Portfolio Fabien Trampont - Directeur de Post-Production

Site professionnel élégant présentant le portfolio de Fabien Trampont, Directeur de post-production avec plus de 8 ans d'expérience et 30+ films & séries supervisés.

## 🎬 Caractéristiques

- **Design cinématographique** : Interface sobre et professionnelle inspirée de l'univers de la post-production
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations fluides** : Transitions et effets subtils avec Framer Motion
- **Performance** : Site statique rapide avec Next.js
- **SEO optimisé** : Métadonnées complètes pour un bon référencement
- **Accessibilité** : Respect des standards d'accessibilité web

## 🛠️ Technologies

- **Framework** : Next.js 14 avec App Router
- **Styling** : Tailwind CSS avec configuration personnalisée
- **Animations** : Framer Motion
- **Typographie** : Google Fonts (Montserrat, Inter)
- **Icônes** : Lucide React
- **Language** : TypeScript

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
```

### Démarrage en production

```bash
npm start
```

## 📁 Structure du projet

```
trampi/
├── app/
│   ├── layout.tsx          # Layout principal avec métadonnées
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── Navigation.tsx      # Menu de navigation sticky
│   ├── Header.tsx          # En-tête avec hero section
│   ├── About.tsx           # Section à propos
│   ├── Projects.tsx        # Portfolio de projets avec modal
│   ├── Experience.tsx      # Parcours professionnel
│   ├── Formation.tsx       # Formation académique
│   └── Footer.tsx          # Pied de page
├── data/
│   └── projects.json       # Base de données des projets
├── public/
│   └── cv-fabien-trampont.pdf  # CV au format PDF
└── tailwind.config.js      # Configuration Tailwind personnalisée
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

- `cinema-black` : #0a0a0a
- `cinema-gray` : #1a1a1a
- `cinema-anthracite` : #2d2d2d
- `cinema-gold` : #d4af37
- `cinema-blue` : #4a90e2

### Projets

Pour ajouter ou modifier des projets, éditez le fichier `data/projects.json`.

### Typographies

Les polices peuvent être changées dans `app/layout.tsx`.

## 📦 Déploiement

### Déploiement sur Vercel (Recommandé)

1. Pushez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js
4. Le site sera déployé en quelques secondes

### Déploiement manuel

```bash
npm run build
```

Le dossier `out/` contient les fichiers statiques prêts à être déployés.

## 📄 CV

Placez le fichier PDF du CV dans le dossier `public/` avec le nom `cv-fabien-trampont.pdf` pour activer le téléchargement.

## 🎯 Fonctionnalités

- ✅ Navigation sticky avec menu mobile
- ✅ Hero section avec animations
- ✅ Section à propos avec statistiques
- ✅ Portfolio de projets avec modal détaillé
- ✅ Timeline du parcours professionnel
- ✅ Section formation
- ✅ Formulaire de contact (coordonnées)
- ✅ Footer complet
- ✅ Téléchargement du CV en PDF
- ✅ Animations au scroll
- ✅ Design responsive

## 📝 Licence

© 2025 Fabien Trampont. Tous droits réservés.

## 🤝 Contact

Fabien Trampont  
📧 fabien.trampont@gmail.com  
📱 06 21 15 25 33  
📍 11 Boulevard de Clichy, 75009 Paris

