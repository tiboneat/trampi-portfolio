#!/bin/bash

# Script de test en local du Portfolio Fabien Trampont

echo "🎬 Test du Portfolio Fabien Trampont"
echo "===================================="
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo ""
fi

echo "✅ Dépendances installées"
echo ""
echo "🚀 Lancement du serveur de développement..."
echo ""
echo "   Le site sera accessible sur : http://localhost:3000"
echo ""
echo "   Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""
echo "---"
echo ""

npm run dev

