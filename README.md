# Widget Gestionnaire de Couches / Layer Manager Widget

Widget personnalisé avancé pour ArcGIS Experience Builder 1.19 permettant de gérer les couches de carte avec des options d'affichage de légende flexibles.

## 🎯 Fonctionnalités

### Gestion des Couches
- ✅ Affichage de toutes les couches opérationnelles de la carte
- ✅ Basculer la visibilité des couches (bouton œil)
- ✅ Contrôle de l'opacité avec curseur
- ✅ Expansion/réduction des détails de chaque couche
- ✅ Boutons "Tout Développer" / "Tout Réduire"

### Options de Légende
- ✅ Afficher/masquer la légende pour chaque couche
- ✅ Position de la légende configurable :
  - **En ligne** : à côté du nom de la couche
  - **En dessous** : sous le nom de la couche
- ✅ Taille des symboles de légende ajustable
- ✅ Intégration native avec l'API ArcGIS

### Recherche et Filtrage
- ✅ Barre de recherche pour filtrer les couches par nom
- ✅ Compteur de couches affichées
- ✅ Résultats de recherche en temps réel

### Personnalisation du Style
- 🎨 Couleur de fond personnalisable
- 🎨 Couleur du texte personnalisable
- 🎨 Couleur de survol personnalisable
- 🎨 Couleur de bordure personnalisable
- 📏 Taille du nom de la couche ajustable (10-24px)
- 📏 Taille de la légende ajustable (8-20px)
- 📏 Taille des icônes ajustable (12-32px)
- 📏 Rayon de bordure ajustable (0-20px)
- 📏 Espacement entre couches ajustable (0-24px)

### Mode Compact
- ✅ Mode compact pour afficher plus de couches
- ✅ Réduction automatique de l'espacement

### Langues Supportées
- 🇬🇧 Anglais
- 🇫🇷 Français

---

## 📦 Installation

### 1. Préparer le Widget

1. **Télécharger** tous les fichiers du widget
2. **Créer** un dossier nommé `layer-manager` dans votre projet Experience Builder :
   ```
   <Experience Builder>/client/your-extensions/widgets/layer-manager/
   ```

### 2. Structure des Fichiers

Assurez-vous d'avoir cette structure :

```
layer-manager/
├── manifest.json
├── config.json
├── icon.svg
├── translations/
│   ├── default.ts
│   └── fr.ts
└── src/
    ├── runtime/
    │   └── widget.tsx
    └── setting/
        └── setting.tsx
```

### 3. Compiler et Utiliser

1. **Redémarrer** Experience Builder :
   ```bash
   npm start
   ```

2. **Ajouter le widget** à votre application :
   - Ouvrir Experience Builder
   - Créer ou modifier une application
   - Chercher "Layer Manager" ou "Gestionnaire de Couches" dans la liste des widgets
   - Glisser-déposer le widget dans votre application

3. **Configurer le widget** :
   - Cliquer sur le widget
   - Sélectionner le widget de carte à utiliser
   - Configurer les options selon vos besoins

---

## ⚙️ Configuration

### Paramètres d'Affichage

| Option | Description | Défaut |
|--------|-------------|--------|
| **Afficher la Légende** | Active/désactive l'affichage de la légende | Activé |
| **Position de la Légende** | En ligne ou en dessous | En dessous |
| **Bouton de Visibilité** | Affiche le bouton œil | Activé |
| **Curseur d'Opacité** | Affiche le contrôle d'opacité | Activé |

### Paramètres de Légende

| Option | Description | Plage | Défaut |
|--------|-------------|-------|--------|
| **Taille du Nom** | Taille du texte des couches | 10-24px | 14px |
| **Taille de la Légende** | Taille des symboles | 8-20px | 12px |
| **Taille des Icônes** | Taille des icônes de contrôle | 12-32px | 20px |

### Paramètres de Style

| Option | Description | Défaut |
|--------|-------------|--------|
| **Couleur de Fond** | Couleur d'arrière-plan | #ffffff |
| **Couleur du Texte** | Couleur du texte | #323232 |
| **Couleur de Survol** | Couleur au survol | #e8f4f8 |
| **Couleur de Bordure** | Couleur des bordures | #d9d9d9 |
| **Rayon de Bordure** | Arrondi des coins | 4px |
| **Espacement** | Espace entre couches | 8px |

### Paramètres Avancés

| Option | Description | Défaut |
|--------|-------------|--------|
| **Activer la Recherche** | Ajoute une barre de recherche | Activé |
| **Activer le Regroupement** | Groupe les couches par service | Activé |
| **Mode Compact** | Réduit l'espacement | Désactivé |

---

## 🎨 Exemples de Configuration

### Configuration Minimale (Compact)
```json
{
  "showLegend": false,
  "layerNameSize": 12,
  "compactMode": true,
  "spacing": 4,
  "showOpacitySlider": false
}
```

### Configuration Détaillée (Maximum d'infos)
```json
{
  "showLegend": true,
  "legendPosition": "below",
  "layerNameSize": 16,
  "legendSize": 14,
  "showOpacitySlider": true,
  "iconSize": 24,
  "spacing": 12
}
```

### Configuration Personnalisée (Thème Sombre)
```json
{
  "backgroundColor": "#2b2b2b",
  "textColor": "#ffffff",
  "hoverColor": "#3a3a3a",
  "borderColor": "#444444"
}
```

---

## 🔧 Utilisation

### Actions Utilisateur

1. **Rechercher une couche** : Tapez dans la barre de recherche
2. **Basculer la visibilité** : Cliquez sur l'icône œil
3. **Ajuster l'opacité** : Utilisez le curseur d'opacité
4. **Développer/Réduire** : Cliquez sur la flèche à gauche
5. **Tout développer** : Cliquez sur "Tout Développer"
6. **Tout réduire** : Cliquez sur "Tout Réduire"

### Interactions avec la Carte

- Les modifications de visibilité sont appliquées immédiatement
- Les modifications d'opacité sont appliquées en temps réel
- Les couches ajoutées/supprimées de la carte sont automatiquement détectées

---

## 📝 Notes Techniques

### Compatibilité

- **Experience Builder** : Version 1.19+
- **ArcGIS Maps SDK for JavaScript** : Version utilisée par ExB 1.19
- **Navigateurs** : Chrome, Firefox, Safari, Edge (versions récentes)

### Types de Couches Supportés

Le widget supporte tous les types de couches opérationnelles :
- Feature Layers
- Map Image Layers
- Tile Layers
- Group Layers
- WMS Layers
- Et plus...

Les couches suivantes sont **exclues** automatiquement :
- Fonds de carte (basemaps)
- Couches avec `listMode: 'hide'`

### Performance

- Le widget utilise la mise en cache pour optimiser les performances
- Les légendes sont créées à la demande (uniquement pour les couches visibles)
- L'affichage est optimisé pour gérer 50+ couches

---

## 🐛 Dépannage

### Le widget n'apparaît pas
1. Vérifiez que tous les fichiers sont dans le bon dossier
2. Redémarrez Experience Builder
3. Videz le cache du navigateur

### Les légendes ne s'affichent pas
1. Vérifiez que "Afficher la Légende" est activé
2. Vérifiez que la couche est visible
3. Certains types de couches peuvent ne pas supporter les légendes

### Les traductions ne fonctionnent pas
1. Vérifiez que les fichiers `default.ts` et `fr.ts` sont dans le dossier `translations/`
2. Vérifiez la langue de votre profil ArcGIS Online

---

## 🚀 Améliorations Futures

Idées pour de futures versions :
- Drag & drop pour réorganiser les couches
- Export de la configuration
- Templates de style prédéfinis
- Support des sous-couches (sublayers)
- Filtrage avancé par type de géométrie
- Bouton de zoom sur l'étendue de la couche
- Statistiques des entités par couche

---

## 📄 Licence

Ce widget est fourni tel quel, sans garantie. Libre d'utilisation et de modification.

---

## 👤 Support

Pour des questions ou des suggestions :
- Ouvrir une issue sur le projet
- Consulter la documentation Esri : https://developers.arcgis.com/experience-builder/

---

**Version** : 1.0.0  
**Dernière mise à jour** : Février 2025  
**Compatible avec** : ArcGIS Experience Builder 1.19
