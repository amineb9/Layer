# Layer Manager Widget for ArcGIS Experience Builder 1.19

## Description

Widget avancé de gestion de couches pour ArcGIS Experience Builder permettant d'organiser, afficher et contrôler les couches de carte avec légendes personnalisables.

## Fonctionnalités principales

### Gestion des couches
- ✅ Affichage de toutes les couches de la carte
- ✅ Basculer la visibilité des couches
- ✅ Recherche de couches par nom
- ✅ Réorganisation par glisser-déposer
- ✅ Zoom sur l'étendue d'une couche
- ✅ Contrôle de l'opacité par couche

### Affichage de légende
- ✅ Afficher/masquer les légendes
- ✅ Position de légende : en ligne ou sous le nom
- ✅ Taille de légende ajustable
- ✅ Légende par couche

### Personnalisation de l'apparence
- ✅ Couleur de fond personnalisable
- ✅ Couleur de texte personnalisable
- ✅ Taille de police ajustable (10-24px)
- ✅ Hauteur des éléments de couche ajustable
- ✅ Espacement personnalisable
- ✅ Couleurs pour couche active et survol
- ✅ Mode compact

### Options avancées
- ✅ Compteur de couches
- ✅ Tri des couches (personnalisé, alphabétique, par visibilité)
- ✅ Boutons d'action sur les couches
- ✅ Bouton d'information de couche
- ✅ Groupes repliables

## Installation

### Méthode 1 : Installation via ArcGIS Experience Builder Developer Edition

1. Téléchargez ou clonez ce widget
2. Copiez le dossier `layer-manager-widget` dans le répertoire des widgets personnalisés :
   ```
   <ExB_Installation>/client/your-extensions/widgets/
   ```
3. Compilez le widget :
   ```bash
   cd <ExB_Installation>/client
   npm install
   npm start
   ```
4. Le widget apparaîtra dans la liste des widgets disponibles dans Experience Builder

### Méthode 2 : Installation directe dans ArcGIS Online

1. Compilez d'abord le widget en mode production :
   ```bash
   cd <ExB_Installation>/client
   npm run build
   ```
2. Créez un fichier ZIP contenant le dossier `dist` et les fichiers suivants :
   - `manifest.json`
   - `icon.svg`
   - `config.json`
3. Uploadez le fichier ZIP dans Experience Builder via l'interface web

## Configuration

### Paramètres généraux
- **Couleur de fond** : Couleur de fond du widget
- **Couleur du texte** : Couleur du texte
- **Taille de police** : Taille du texte (10-24px)

### Paramètres de légende
- **Afficher la légende** : Activer/désactiver l'affichage des légendes
- **Position de la légende** :
  - *En ligne* : Légende à côté du nom de la couche
  - *Sous le nom* : Légende sous le nom de la couche
- **Taille de la légende** : Taille des icônes de légende (12-32px)

### Options d'affichage
- **Afficher le nombre de couches** : Compteur dans l'en-tête
- **Activer la recherche** : Barre de recherche
- **Afficher le bouton de visibilité** : Icône œil pour chaque couche
- **Afficher le curseur d'opacité** : Slider d'opacité pour la couche sélectionnée

### Options de tri
- **Autoriser la réorganisation manuelle** : Glisser-déposer
- **Ordre de tri** :
  - *Personnalisé* : Ordre défini par l'utilisateur
  - *Alphabétique* : Tri A-Z
  - *Par visibilité* : Couches visibles en premier

### Style des couches
- **Espacement des couches** : Padding interne (0-20px)
- **Hauteur des couches** : Hauteur minimale (30-80px)
- **Couleur de la couche active** : Couleur de surbrillance
- **Couleur au survol** : Couleur de survol
- **Couleur de bordure** : Couleur des séparateurs

### Options avancées
- **Activer les actions sur les couches** : Boutons zoom, info, etc.
- **Afficher le bouton d'information** : Bouton i pour les détails
- **Groupes repliables** : Possibilité de replier les groupes
- **Mode compact** : Réduction des espacements et tailles

## Utilisation

1. Ajoutez le widget à votre application Experience Builder
2. Dans les paramètres, sélectionnez le widget de carte à utiliser
3. Personnalisez l'apparence selon vos besoins
4. Les couches de la carte s'afficheront automatiquement
5. Les utilisateurs peuvent :
   - Cliquer sur l'œil pour basculer la visibilité
   - Cliquer sur la loupe pour zoomer sur une couche
   - Utiliser la recherche pour filtrer les couches
   - Glisser-déposer pour réorganiser (si activé)
   - Ajuster l'opacité avec le slider (si activé)

## Compatibilité

- ArcGIS Experience Builder 1.19.0
- ArcGIS Online
- Portal for ArcGIS
- Testé avec Map Widget et Scene Widget

## Support des langues

- Anglais (en)
- Français (fr)

Les traductions sont automatiquement détectées selon la langue de votre portail ArcGIS.

## Structure du widget

```
layer-manager-widget/
├── manifest.json              # Configuration du widget
├── config.json                # Configuration par défaut
├── icon.svg                   # Icône du widget
├── src/
│   ├── config.ts             # Types et configuration TypeScript
│   ├── runtime/
│   │   ├── widget.tsx        # Composant principal
│   │   └── translations/
│   │       ├── default.ts    # Traductions anglais
│   │       └── fr.js         # Traductions français
│   └── setting/
│       ├── setting.tsx       # Interface de configuration
│       └── translations/
│           ├── default.ts    # Traductions settings anglais
│           └── fr.js         # Traductions settings français
└── dist/                     # Fichiers compilés (générés)
```

## Développement

### Prérequis
- Node.js 16+
- ArcGIS Experience Builder Developer Edition 1.19.0

### Commandes de développement
```bash
# Installation des dépendances
npm install

# Développement (mode watch)
npm start

# Build de production
npm run build

# Lint
npm run lint
```

### Personnalisation

Pour ajouter de nouvelles fonctionnalités :

1. Modifiez `src/config.ts` pour ajouter de nouveaux paramètres
2. Mettez à jour `src/runtime/widget.tsx` pour la logique
3. Ajoutez les options dans `src/setting/setting.tsx`
4. Ajoutez les traductions dans les fichiers de langue

## Licence

Apache 2.0

## Support

Pour toute question ou problème :
- Ouvrez une issue sur le dépôt
- Consultez la documentation ArcGIS Experience Builder
- Visitez la communauté Esri

## Changelog

### Version 1.0.0 (Initial)
- Gestion complète des couches
- Affichage de légende configurable
- Recherche et filtrage
- Drag & drop pour réorganisation
- Contrôles de visibilité et opacité
- Interface entièrement personnalisable
- Support français et anglais
