# 📽️ COMMENT AJOUTER LES VRAIES AFFICHES DE FILMS

## 🎯 INSTRUCTIONS SIMPLES

### Étape 1 : Télécharger les affiches

Pour chaque film, téléchargez l'affiche depuis Google Images ou le site officiel du distributeur :

1. **Brûle le Sang** → Enregistrer dans : `public/posters/brule-le-sang.jpg`
2. **Par Amour** → Enregistrer dans : `public/posters/par-amour.jpg`
3. **Six Jours** → Enregistrer dans : `public/posters/six-jours.jpg`
4. **Les Pistolets en Plastique** → Enregistrer dans : `public/posters/les-pistolets-en-plastique.jpg`
5. **Linda veut du poulet** → Enregistrer dans : `public/posters/linda-veut-du-poulet.jpg`
6. **La Meilleure Version de Moi-Même** → Enregistrer dans : `public/posters/la-meilleure-version.jpg`
7. **Olga** → Enregistrer dans : `public/posters/olga.jpg`
8. **Carrément Craignos S2** → Enregistrer dans : `public/posters/carrement-craignos.jpg`
9. **Abou Leila** → Enregistrer dans : `public/posters/abou-leila.jpg`
10. **Zama** → Enregistrer dans : `public/posters/zama.jpg`
11. **Drôles d'Oiseaux** → Enregistrer dans : `public/posters/droles-oiseaux.jpg`

### Étape 2 : Où trouver les affiches ?

#### Option 1 : Google Images
```
Recherchez : "[Nom du film] affiche officielle"
Téléchargez l'image en haute qualité
```

#### Option 2 : Sites des distributeurs
- ARP Sélection
- BAC Films
- Gebeka Films
- Tandem
- etc.

#### Option 3 : AlloCiné
Cherchez le film sur allocine.fr et téléchargez l'affiche

### Étape 3 : Format des images

- **Format** : JPG ou PNG
- **Taille recommandée** : Au moins 800x1200 pixels
- **Poids** : Max 500KB par image

### Étape 4 : Après avoir téléchargé les images

Une fois que vous avez mis les images dans `public/posters/`, exécutez :

```bash
cd /Users/petitjeanthibault/Desktop/trampi
git add public/posters/
git commit -m "Add film posters"
git push
```

Vercel redéploiera automatiquement et les affiches s'afficheront !

---

## 🚀 ALTERNATIVE RAPIDE (si vous avez les affiches)

Si vous avez déjà les affiches quelque part, glissez-les simplement dans le dossier :
`/Users/petitjeanthibault/Desktop/trampi/public/posters/`

Puis faites :
```bash
git add public/posters/
git commit -m "Add film posters"
git push
```

---

## ❓ BESOIN D'AIDE ?

Je peux vous aider à :
1. Trouver les bonnes affiches
2. Les renommer correctement
3. Les optimiser pour le web

**Une fois les images dans le dossier, le site les affichera automatiquement !**















