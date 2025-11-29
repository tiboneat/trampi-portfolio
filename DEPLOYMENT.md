# Guide de Déploiement

## 📋 Prérequis

1. Un compte GitHub
2. Un compte Vercel (gratuit)
3. Le fichier CV PDF à placer dans `/public/`

## 🚀 Étape 1 : Initialiser Git

```bash
# Initialiser le dépôt git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Portfolio Fabien Trampont"
```

## 📤 Étape 2 : Créer un dépôt GitHub

### Méthode 1 : Via GitHub CLI (recommandé)

```bash
# Installer GitHub CLI si nécessaire
brew install gh

# S'authentifier
gh auth login

# Créer le dépôt et pousser
gh repo create trampi-portfolio --public --source=. --push
```

### Méthode 2 : Manuellement

1. Allez sur [github.com/new](https://github.com/new)
2. Créez un nouveau dépôt nommé `trampi-portfolio`
3. Suivez les instructions pour pousser un dépôt existant :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/trampi-portfolio.git
git branch -M main
git push -u origin main
```

## 🌐 Étape 3 : Déployer sur Vercel

### Méthode 1 : Via l'interface Vercel (recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre dépôt GitHub `trampi-portfolio`
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"
6. Votre site sera en ligne en quelques secondes ! 🎉

### Méthode 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Pour la production
vercel --prod
```

## 📄 Étape 4 : Ajouter le CV PDF

1. Placez le fichier `cv-fabien-trampont.pdf` dans le dossier `/public/`
2. Commitez et poussez :

```bash
git add public/cv-fabien-trampont.pdf
git commit -m "Add CV PDF"
git push
```

3. Vercel redéploiera automatiquement

## ⚙️ Configuration Vercel (Optionnelle)

### Variables d'environnement

Dans le dashboard Vercel :
1. Allez dans Settings > Environment Variables
2. Ajoutez vos variables si nécessaire

### Domaine personnalisé

1. Allez dans Settings > Domains
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer le DNS

## 🔄 Mises à jour futures

Pour toute modification :

```bash
# Faire vos modifications
# ...

# Commiter
git add .
git commit -m "Description des modifications"

# Pousser
git push

# Vercel redéploiera automatiquement !
```

## 📊 Surveillance

- **Analytics** : Activez Vercel Analytics dans le dashboard
- **Speed Insights** : Activez Speed Insights pour monitorer les performances

## 🆘 Résolution de problèmes

### Erreur de build

Vérifiez :
- Node version (18+)
- Dépendances à jour
- Pas d'erreurs TypeScript

### Site ne se charge pas

Vérifiez :
- Les logs de déploiement sur Vercel
- La console du navigateur
- Les erreurs 404

## 📞 Support

En cas de problème, consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Support Vercel](https://vercel.com/support)

## ✅ Checklist finale

- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Projet importé sur Vercel
- [ ] Premier déploiement réussi
- [ ] CV PDF ajouté
- [ ] Site testé sur mobile
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Analytics activé (optionnel)

🎉 **Félicitations ! Votre site est en ligne !**

