#!/bin/bash

# Script de déploiement automatique sur GitHub et Vercel
# Portfolio Fabien Trampont

echo "🚀 Déploiement du Portfolio Fabien Trampont"
echo "=========================================="
echo ""

# Vérifier si gh est installé
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) n'est pas installé."
    echo ""
    echo "📦 Installation de GitHub CLI :"
    echo "   brew install gh"
    echo ""
    echo "Ou suivez les instructions manuelles :"
    echo "1. Allez sur https://github.com/new"
    echo "2. Créez un dépôt nommé 'trampi-portfolio'"
    echo "3. Exécutez ensuite :"
    echo ""
    echo "   git remote add origin https://github.com/VOTRE_USERNAME/trampi-portfolio.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    exit 1
fi

# Vérifier si l'utilisateur est authentifié
echo "🔐 Vérification de l'authentification GitHub..."
if ! gh auth status &> /dev/null; then
    echo "⚠️  Vous n'êtes pas authentifié."
    echo "Exécution de gh auth login..."
    gh auth login
fi

# Créer le dépôt GitHub
echo ""
echo "📦 Création du dépôt GitHub..."
gh repo create trampi-portfolio \
    --public \
    --source=. \
    --description="Portfolio professionnel de Fabien Trampont - Directeur de Post-Production" \
    --push

if [ $? -eq 0 ]; then
    echo "✅ Dépôt créé et code poussé avec succès !"
    echo ""
    echo "🌐 Prochaines étapes :"
    echo "1. Allez sur https://vercel.com"
    echo "2. Cliquez sur 'New Project'"
    echo "3. Importez le dépôt 'trampi-portfolio'"
    echo "4. Cliquez sur 'Deploy'"
    echo ""
    echo "📄 N'oubliez pas d'ajouter le CV PDF dans /public/cv-fabien-trampont.pdf"
    echo ""
    echo "✨ Votre site sera en ligne en quelques secondes !"
else
    echo "❌ Erreur lors de la création du dépôt."
    echo "Veuillez créer le dépôt manuellement sur GitHub."
fi

