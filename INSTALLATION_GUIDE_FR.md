# Guide d'Installation - Widget Layer Manager pour ArcGIS Experience Builder 1.19

## Introduction

Ce guide vous explique comment installer et configurer le widget Layer Manager dans votre environnement ArcGIS Experience Builder 1.19.

---

## Méthode 1 : Installation avec Experience Builder Developer Edition

### Prérequis
- ArcGIS Experience Builder Developer Edition 1.19.0 installé
- Node.js 16 ou supérieur
- Accès au système de fichiers

### Étapes d'installation

#### 1. Extraire le widget
```bash
# Extraire le fichier ZIP
unzip layer-manager-widget.zip

# Vérifier le contenu
cd layer-manager-widget
ls -la
```

#### 2. Copier le widget dans Experience Builder
```bash
# Copier vers le dossier des widgets personnalisés
cp -r layer-manager-widget /chemin/vers/ExB/client/your-extensions/widgets/

# Exemple de chemin typique :
# Windows: C:\ArcGIS\ExperienceBuilder\client\your-extensions\widgets\
# Mac/Linux: /Applications/ArcGIS/ExperienceBuilder/client/your-extensions/widgets/
```

#### 3. Installer les dépendances (si nécessaire)
```bash
cd /chemin/vers/ExB/client
npm install
```

#### 4. Compiler le widget
```bash
# Mode développement (avec watch)
npm start

# OU mode production
npm run build:prod
```

#### 5. Utiliser le widget
1. Ouvrez Experience Builder dans votre navigateur
2. Créez ou ouvrez une application
3. Cliquez sur le bouton "+" pour ajouter un widget
4. Cherchez "Layer Manager" dans la liste
5. Glissez-déposez le widget dans votre application

---

## Méthode 2 : Installation via ArcGIS Online (sans Developer Edition)

### Prérequis
- Compte ArcGIS Online avec droits de publication
- Widget déjà compilé (dossier dist présent)

### Étapes d'installation

#### 1. Préparer le package
Le widget doit être compilé et packagé. Si vous avez déjà le fichier ZIP, passez à l'étape 3.

#### 2. Créer le package (si nécessaire)
```bash
# Compiler le widget
cd layer-manager-widget
npm install
npm run build

# Créer un ZIP contenant :
# - dist/
# - manifest.json
# - icon.svg
# - config.json
```

#### 3. Upload dans ArcGIS Online
1. Connectez-vous à ArcGIS Online
2. Ouvrez Experience Builder
3. Allez dans "Settings" > "Extensions" > "Custom widgets"
4. Cliquez sur "Upload custom widget"
5. Sélectionnez le fichier ZIP
6. Attendez la fin de l'upload

#### 4. Utiliser le widget
Le widget apparaîtra désormais dans la liste des widgets disponibles.

---

## Configuration du Widget

### 1. Connexion à une carte

**Obligatoire** : Avant toute chose, vous devez connecter le widget à un widget de carte.

1. Sélectionnez le widget Layer Manager
2. Cliquez sur l'icône de configuration (engrenage)
3. Dans l'onglet "General Settings", cliquez sur "Select a map"
4. Choisissez le widget de carte à utiliser
5. Cliquez sur "OK"

### 2. Personnalisation de l'apparence

#### Onglet "General Settings"
- **Couleur de fond** : Cliquez sur le sélecteur de couleur pour changer la couleur de fond du widget
- **Couleur du texte** : Définissez la couleur du texte
- **Taille de police** : Ajustez entre 10 et 24 pixels

#### Onglet "Legend Settings"
- **Afficher la légende** : Activez/désactivez l'affichage des légendes
- **Position de la légende** :
  - *En ligne* : La légende apparaît à côté du nom de la couche
  - *Sous le nom* : La légende apparaît sous le nom de la couche
- **Taille de la légende** : Ajustez entre 12 et 32 pixels

#### Onglet "Display Options"
- **Afficher le nombre de couches** : Affiche un compteur dans l'en-tête
- **Activer la recherche** : Ajoute une barre de recherche
- **Activer le regroupement** : Permet de grouper les couches
- **Afficher le bouton de visibilité** : Icône œil pour chaque couche
- **Afficher le curseur d'opacité** : Slider pour ajuster l'opacité

#### Onglet "Sorting Options"
- **Autoriser la réorganisation manuelle** : Active le glisser-déposer
- **Ordre de tri** :
  - *Personnalisé* : Ordre défini manuellement
  - *Alphabétique* : Tri automatique A-Z
  - *Par visibilité* : Couches visibles en premier

#### Onglet "Layer Style"
- **Espacement des couches** : Padding interne (0-20px)
- **Hauteur des couches** : Hauteur minimale (30-80px)
- **Couleur de la couche active** : Couleur de surbrillance quand sélectionnée
- **Couleur au survol** : Couleur quand la souris survole
- **Couleur de bordure** : Couleur des séparateurs entre couches

#### Onglet "Advanced Options"
- **Activer les actions sur les couches** : Boutons zoom, info, etc.
- **Afficher le bouton d'information** : Bouton "i" pour les détails
- **Groupes repliables** : Permet de replier/déplier les groupes
- **Mode compact** : Réduit les espacements pour plus de densité

---

## Utilisation pour les utilisateurs finaux

### Actions disponibles

1. **Basculer la visibilité d'une couche**
   - Cliquez sur l'icône œil (👁️) à gauche du nom de la couche
   - L'œil barré (👁️‍🗨️) indique que la couche est masquée

2. **Zoomer sur une couche**
   - Cliquez sur l'icône loupe (🔍)
   - La carte zoomera automatiquement sur l'étendue de la couche

3. **Rechercher une couche**
   - Utilisez la barre de recherche en haut
   - Tapez le nom (ou une partie) de la couche
   - Les résultats se filtrent automatiquement

4. **Réorganiser les couches** (si activé)
   - Cliquez et maintenez sur une couche
   - Glissez-la vers le haut ou le bas
   - Relâchez pour la déposer à la nouvelle position

5. **Ajuster l'opacité** (si activé)
   - Cliquez sur une couche pour la sélectionner
   - Utilisez le slider qui apparaît en bas
   - Déplacez-le entre 0 (transparent) et 1 (opaque)

6. **Voir les informations d'une couche** (si activé)
   - Cliquez sur l'icône "i"
   - Une fenêtre s'ouvrira avec les détails de la couche

---

## Dépannage

### Le widget n'apparaît pas dans la liste

**Solution 1** : Vérifier l'installation
```bash
# Vérifier que le dossier existe
ls /chemin/vers/ExB/client/your-extensions/widgets/layer-manager-widget

# Vérifier le manifest.json
cat /chemin/vers/ExB/client/your-extensions/widgets/layer-manager-widget/manifest.json
```

**Solution 2** : Recompiler
```bash
cd /chemin/vers/ExB/client
npm start
```

**Solution 3** : Vider le cache du navigateur
- Chrome : Ctrl+Shift+Delete > Vider le cache
- Firefox : Ctrl+Shift+Delete > Cocher "Cache" > Effacer
- Edge : Ctrl+Shift+Delete > Cocher "Images et fichiers en cache"

### Les couches ne s'affichent pas

**Vérification 1** : Widget de carte sélectionné
1. Ouvrir les paramètres du widget
2. Vérifier qu'un widget de carte est bien sélectionné
3. Essayer de sélectionner un autre widget de carte

**Vérification 2** : Couches dans la carte
1. Ouvrir le widget de carte
2. Vérifier que des couches sont bien présentes
3. Vérifier que les couches ont des noms

**Vérification 3** : Console du navigateur
1. Ouvrir la console (F12)
2. Chercher des erreurs en rouge
3. Noter le message d'erreur pour le support

### Les légendes ne s'affichent pas

**Vérification 1** : Option activée
- Ouvrir les paramètres
- Onglet "Legend Settings"
- Vérifier que "Afficher la légende" est activé

**Vérification 2** : Légende disponible sur la couche
- Certaines couches n'ont pas de légende
- Essayer avec une autre couche

### Le glisser-déposer ne fonctionne pas

**Vérification** : Option activée
- Ouvrir les paramètres
- Onglet "Sorting Options"
- Vérifier que "Autoriser la réorganisation manuelle" est activé

### Erreur "No map selected"

**Solution** : Sélectionner une carte
1. Ouvrir les paramètres du widget
2. Section "General Settings"
3. Cliquer sur "Select a map"
4. Choisir le widget de carte approprié

---

## Compatibilité

### Versions testées
- ✅ ArcGIS Experience Builder 1.19.0
- ✅ ArcGIS Online
- ✅ Portal for ArcGIS 11.1+

### Navigateurs supportés
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+

### Types de couches supportés
- ✅ Feature Layer
- ✅ Map Image Layer
- ✅ Tile Layer
- ✅ Vector Tile Layer
- ✅ Scene Layer
- ✅ Group Layer
- ⚠️ Certaines couches 3D peuvent avoir un support limité

---

## Support et Ressources

### Documentation
- [ArcGIS Experience Builder Documentation](https://developers.arcgis.com/experience-builder/)
- [Widget Development Guide](https://developers.arcgis.com/experience-builder/guide/getting-started/)

### Communauté
- [Esri Community](https://community.esri.com/)
- [GeoNet](https://community.esri.com/t5/arcgis-experience-builder/ct-p/arcgis-experience-builder)

### Signaler un problème
Si vous rencontrez un problème :
1. Vérifier la section "Dépannage" ci-dessus
2. Consulter les logs de la console (F12)
3. Préparer une description détaillée du problème
4. Inclure des captures d'écran si possible

---

## Mise à jour du widget

Pour mettre à jour vers une nouvelle version :

1. **Sauvegarder la configuration actuelle** (noter vos paramètres)
2. **Supprimer l'ancienne version**
   ```bash
   rm -rf /chemin/vers/ExB/client/your-extensions/widgets/layer-manager-widget
   ```
3. **Installer la nouvelle version** (suivre les étapes d'installation)
4. **Recompiler**
   ```bash
   npm start
   ```
5. **Reconfigurer le widget** avec vos paramètres sauvegardés

---

## Conseils et bonnes pratiques

### Performance
- Pour de meilleures performances avec de nombreuses couches (>50), activez le mode compact
- Désactivez les options non utilisées (recherche, opacité, etc.)
- Groupez les couches similaires ensemble

### Ergonomie
- Utilisez des noms de couches clairs et descriptifs
- Organisez les couches par thème
- Placez les couches les plus importantes en haut
- Utilisez des couleurs cohérentes avec votre thème

### Accessibilité
- Utilisez des couleurs avec un contraste suffisant
- Augmentez la taille de police si nécessaire (16px+)
- Testez avec un lecteur d'écran si possible

---

## Licence

Apache 2.0 - Voir le fichier LICENSE pour plus de détails

---

## Contact

Pour toute question ou suggestion d'amélioration, n'hésitez pas à contacter le support technique.

**Version du document** : 1.0.0  
**Dernière mise à jour** : Février 2025
