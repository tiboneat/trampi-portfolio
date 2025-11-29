# 🎬 Instructions de Déploiement - Portfolio Fabien Trampont

## ✅ État actuel

- ✅ Projet Next.js créé et configuré
- ✅ Tous les composants développés
- ✅ Git initialisé et commits effectués
- ✅ Build de production testé avec succès
- ✅ Dépendances installées

## 🚀 Prochaines étapes pour mettre en ligne

### Étape 1 : Créer le dépôt GitHub

Vous avez 2 options :

#### Option A : Automatique avec GitHub CLI (Recommandé)

1. Installer GitHub CLI :
```bash
brew install gh
```

2. Exécuter le script de déploiement :
```bash
./deploy-github.sh
```

Le script va :
- Vous authentifier sur GitHub
- Créer le dépôt automatiquement
- Pousser le code
- Vous donner les prochaines étapes

#### Option B : Manuelle via l'interface GitHub

1. **Créer le dépôt sur GitHub**
   - Allez sur : https://github.com/new
   - Nom du dépôt : `trampi-portfolio`
   - Visibilité : Public (ou Private selon votre choix)
   - Ne pas initialiser avec README (déjà fait)
   - Cliquez sur "Create repository"

2. **Lier et pousser le code local**
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/trampi-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Étape 2 : Déployer sur Vercel

1. **Créer un compte Vercel** (si pas déjà fait)
   - Allez sur : https://vercel.com/signup
   - Connectez-vous avec votre compte GitHub

2. **Importer le projet**
   - Cliquez sur "New Project"
   - Sélectionnez `trampi-portfolio` dans la liste
   - Vercel détectera automatiquement Next.js
   - Cliquez sur "Deploy"

3. **Attendre le déploiement** (30-60 secondes)
   - Vercel va :
     - Installer les dépendances
     - Build le projet
     - Déployer sur CDN global
     - Vous donner une URL en `.vercel.app`

4. **Tester le site**
   - Cliquez sur l'URL fournie
   - Testez sur mobile et desktop
   - ✨ C'est en ligne !

### Étape 3 : Ajouter le CV PDF

1. **Préparer le fichier**
   - Renommez votre CV en : `cv-fabien-trampont.pdf`
   - Placez-le dans le dossier `public/`

2. **Pousser sur GitHub**
   ```bash
   git add public/cv-fabien-trampont.pdf
   git commit -m "Add CV PDF"
   git push
   ```

3. **Vercel redéploie automatiquement**
   - Le site sera mis à jour en ~30 secondes
   - Le bouton "Télécharger le CV" fonctionnera

## 🎨 Personnalisation future

### Modifier les projets

Éditez `data/projects.json` :
```json
{
  "featured": [
    {
      "id": "nouveau-projet",
      "title": "NOM DU FILM",
      "director": "Nom du réalisateur",
      // ... autres champs
    }
  ]
}
```

### Changer les couleurs

Éditez `tailwind.config.js` :
```javascript
colors: {
  'cinema-gold': '#d4af37',  // Changez ici
  'cinema-blue': '#4a90e2',  // Et ici
}
```

### Modifier le contenu

Les composants sont dans `components/` :
- `Header.tsx` - En-tête avec photo et coordonnées
- `About.tsx` - Section À propos
- `Projects.tsx` - Portfolio de projets
- `Experience.tsx` - Parcours professionnel
- `Formation.tsx` - Formation
- `Footer.tsx` - Pied de page

## 🔄 Mettre à jour le site

À chaque modification :

```bash
# 1. Faire vos modifications dans le code

# 2. Tester localement
npm run dev

# 3. Commiter et pousser
git add .
git commit -m "Description des modifications"
git push

# 4. Vercel redéploie automatiquement !
```

## 🌐 Domaine personnalisé (Optionnel)

1. Dans Vercel, allez dans "Settings" > "Domains"
2. Ajoutez votre domaine (ex: `fabientrampont.com`)
3. Suivez les instructions pour configurer les DNS
4. Le certificat SSL sera automatiquement généré

## 📊 Analytics (Optionnel)

Dans Vercel :
1. Allez dans l'onglet "Analytics"
2. Activez Vercel Analytics (gratuit)
3. Obtenez des statistiques de visites

## 🆘 En cas de problème

### Le build échoue sur Vercel

1. Vérifiez les logs dans Vercel
2. Testez localement : `npm run build`
3. Vérifiez que toutes les dépendances sont dans `package.json`

### Le site ne s'affiche pas correctement

1. Videz le cache du navigateur (Cmd+Shift+R sur Mac)
2. Vérifiez la console du navigateur (F12)
3. Vérifiez les logs Vercel

### Le CV ne se télécharge pas

1. Vérifiez que le fichier existe : `public/cv-fabien-trampont.pdf`
2. Vérifiez que le nom est exact (sensible à la casse)
3. Repoushez le fichier si nécessaire

## 📞 Ressources utiles

- **Documentation Next.js** : https://nextjs.org/docs
- **Documentation Vercel** : https://vercel.com/docs
- **Documentation Tailwind** : https://tailwindcss.com/docs
- **Support Vercel** : https://vercel.com/support

## ✅ Checklist finale

- [ ] Dépôt GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Projet déployé sur Vercel
- [ ] Site accessible via URL .vercel.app
- [ ] CV PDF ajouté et téléchargeable
- [ ] Site testé sur mobile
- [ ] Site testé sur desktop
- [ ] Toutes les sections fonctionnent
- [ ] Animations fluides
- [ ] Navigation fonctionne
- [ ] Coordonnées correctes

## 🎉 Félicitations !

Votre portfolio professionnel est maintenant en ligne !

**URL Vercel** : `https://trampi-portfolio.vercel.app` (ou similaire)

Partagez-le avec vos contacts et sur vos réseaux professionnels.

---

**Créé avec ❤️ pour Fabien Trampont**  
Directeur de Post-Production

