# 🚀 Guide de Démarrage Rapide

## ⚡️ Installation (2 minutes)

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le site en mode développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📤 Déploiement sur GitHub et Vercel (5 minutes)

### Option A : Avec GitHub CLI (Recommandé)

```bash
# Installer GitHub CLI si nécessaire
brew install gh

# Exécuter le script de déploiement
./deploy-github.sh
```

### Option B : Manuellement

#### 1. Créer le dépôt GitHub

Allez sur [github.com/new](https://github.com/new) et créez un dépôt nommé `trampi-portfolio`

#### 2. Pousser le code

```bash
git remote add origin https://github.com/VOTRE_USERNAME/trampi-portfolio.git
git branch -M main
git push -u origin main
```

#### 3. Déployer sur Vercel

1. Allez sur [vercel.com/new](https://vercel.com/new)
2. Connectez votre compte GitHub
3. Sélectionnez le dépôt `trampi-portfolio`
4. Cliquez sur **Deploy**
5. ✨ C'est en ligne !

## 📄 Ajouter le CV PDF

1. Placez le fichier PDF dans le dossier `public/` :
   ```
   public/cv-fabien-trampont.pdf
   ```

2. Commitez et poussez :
   ```bash
   git add public/cv-fabien-trampont.pdf
   git commit -m "Add CV PDF"
   git push
   ```

3. Vercel redéploiera automatiquement en ~30 secondes

## 🎨 Personnalisation

### Modifier les projets

Éditez le fichier `data/projects.json`

### Changer les couleurs

Éditez `tailwind.config.js` dans la section `colors`

### Modifier le contenu

Les composants se trouvent dans le dossier `components/`

## 🛠️ Commandes utiles

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Lancer en production localement
npm start

# Linter
npm run lint
```

## 📞 Besoin d'aide ?

Consultez le fichier `README.md` pour plus de détails ou `DEPLOYMENT.md` pour un guide complet de déploiement.

## ✅ Checklist

- [x] ✅ Git initialisé
- [x] ✅ Premier commit effectué
- [ ] Dépendances installées (`npm install`)
- [ ] Site testé en local (`npm run dev`)
- [ ] Dépôt GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Déployé sur Vercel
- [ ] CV PDF ajouté
- [ ] Testé sur mobile

---

🎬 **Profitez de votre nouveau portfolio professionnel !**

