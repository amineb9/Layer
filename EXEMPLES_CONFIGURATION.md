# Exemples de Configuration - Widget Gestionnaire de Couches

Ce fichier contient des configurations prédéfinies pour différents cas d'usage.

---

## 🎯 Configuration 1 : Mode Présentation (Détaillé)

**Usage** : Pour des présentations où la lisibilité est primordiale

```json
{
  "showLegend": true,
  "legendPosition": "below",
  "layerNameSize": 16,
  "legendSize": 14,
  "backgroundColor": "#ffffff",
  "textColor": "#2b2b2b",
  "hoverColor": "#f0f7fa",
  "borderColor": "#c0c0c0",
  "showVisibilityToggle": true,
  "showOpacitySlider": true,
  "enableSearch": true,
  "enableGrouping": true,
  "compactMode": false,
  "borderRadius": 6,
  "spacing": 12,
  "iconSize": 24
}
```

**Caractéristiques** :
- ✅ Grande police pour meilleure lisibilité
- ✅ Espacement généreux
- ✅ Légende en dessous pour clarté
- ✅ Toutes les fonctionnalités activées

---

## 🎯 Configuration 2 : Mode Compact (Beaucoup de Couches)

**Usage** : Applications avec 20+ couches nécessitant un affichage dense

```json
{
  "showLegend": true,
  "legendPosition": "inline",
  "layerNameSize": 12,
  "legendSize": 10,
  "backgroundColor": "#ffffff",
  "textColor": "#323232",
  "hoverColor": "#e8f4f8",
  "borderColor": "#e0e0e0",
  "showVisibilityToggle": true,
  "showOpacitySlider": false,
  "enableSearch": true,
  "enableGrouping": true,
  "compactMode": true,
  "borderRadius": 3,
  "spacing": 4,
  "iconSize": 16
}
```

**Caractéristiques** :
- ✅ Tailles réduites pour économiser l'espace
- ✅ Mode compact activé
- ✅ Légende en ligne
- ❌ Opacité désactivée pour simplicité

---

## 🎯 Configuration 3 : Mode Minimaliste

**Usage** : Interface épurée, fonctionnalités essentielles uniquement

```json
{
  "showLegend": false,
  "legendPosition": "below",
  "layerNameSize": 13,
  "legendSize": 11,
  "backgroundColor": "#fafafa",
  "textColor": "#444444",
  "hoverColor": "#f0f0f0",
  "borderColor": "#e8e8e8",
  "showVisibilityToggle": true,
  "showOpacitySlider": false,
  "enableSearch": false,
  "enableGrouping": false,
  "compactMode": true,
  "borderRadius": 2,
  "spacing": 6,
  "iconSize": 18
}
```

**Caractéristiques** :
- ❌ Pas de légende
- ❌ Pas de recherche
- ✅ Seulement visibilité des couches
- ✅ Interface très épurée

---

## 🎯 Configuration 4 : Thème Sombre

**Usage** : Applications avec interface sombre

```json
{
  "showLegend": true,
  "legendPosition": "below",
  "layerNameSize": 14,
  "legendSize": 12,
  "backgroundColor": "#2b2b2b",
  "textColor": "#e0e0e0",
  "hoverColor": "#3a3a3a",
  "borderColor": "#404040",
  "showVisibilityToggle": true,
  "showOpacitySlider": true,
  "enableSearch": true,
  "enableGrouping": true,
  "compactMode": false,
  "borderRadius": 4,
  "spacing": 8,
  "iconSize": 20
}
```

**Caractéristiques** :
- 🌙 Couleurs sombres
- ✅ Contraste élevé
- ✅ Toutes fonctionnalités
- ✅ Facile pour les yeux en faible luminosité

---

## 🎯 Configuration 5 : Thème Bleu Esri

**Usage** : S'aligne avec le thème par défaut d'Esri

```json
{
  "showLegend": true,
  "legendPosition": "below",
  "layerNameSize": 14,
  "legendSize": 12,
  "backgroundColor": "#f8f8f8",
  "textColor": "#323232",
  "hoverColor": "#e2f1fb",
  "borderColor": "#007ac2",
  "showVisibilityToggle": true,
  "showOpacitySlider": true,
  "enableSearch": true,
  "enableGrouping": true,
  "compactMode": false,
  "borderRadius": 0,
  "spacing": 8,
  "iconSize": 20
}
```

**Caractéristiques** :
- 🔵 Bordures bleues Esri
- ✅ Style cohérent avec ArcGIS Online
- ✅ Pas d'arrondi (style carré)

---

## 🎯 Configuration 6 : Mode Tablette/Mobile

**Usage** : Optimisé pour écrans tactiles

```json
{
  "showLegend": true,
  "legendPosition": "below",
  "layerNameSize": 16,
  "legendSize": 14,
  "backgroundColor": "#ffffff",
  "textColor": "#2b2b2b",
  "hoverColor": "#e8f4f8",
  "borderColor": "#d9d9d9",
  "showVisibilityToggle": true,
  "showOpacitySlider": true,
  "enableSearch": true,
  "enableGrouping": false,
  "compactMode": false,
  "borderRadius": 8,
  "spacing": 12,
  "iconSize": 28
}
```

**Caractéristiques** :
- 👆 Grandes icônes pour toucher
- ✅ Police plus grande
- ✅ Espacement généreux
- ✅ Coins arrondis pour design moderne

---

## 🎯 Configuration 7 : Mode Éducation/Formation

**Usage** : Pour formations ou démonstrations pédagogiques

```json
{
  "showLegend": true,
  "legendPosition": "below",
  "layerNameSize": 15,
  "legendSize": 13,
  "backgroundColor": "#fffef5",
  "textColor": "#2a2a2a",
  "hoverColor": "#fff8dc",
  "borderColor": "#d4a373",
  "showVisibilityToggle": true,
  "showOpacitySlider": true,
  "enableSearch": true,
  "enableGrouping": true,
  "compactMode": false,
  "borderRadius": 5,
  "spacing": 10,
  "iconSize": 22
}
```

**Caractéristiques** :
- 📚 Fond légèrement coloré (crème)
- ✅ Toutes fonctionnalités visibles
- ✅ Bordures douces et accueillantes

---

## 🎯 Configuration 8 : Mode Analyse/Professionnel

**Usage** : Analyses SIG professionnelles

```json
{
  "showLegend": true,
  "legendPosition": "inline",
  "layerNameSize": 13,
  "legendSize": 11,
  "backgroundColor": "#f5f5f5",
  "textColor": "#1a1a1a",
  "hoverColor": "#ebebeb",
  "borderColor": "#aaaaaa",
  "showVisibilityToggle": true,
  "showOpacitySlider": true,
  "enableSearch": true,
  "enableGrouping": true,
  "compactMode": false,
  "borderRadius": 2,
  "spacing": 6,
  "iconSize": 18
}
```

**Caractéristiques** :
- 📊 Légende en ligne pour économiser l'espace
- ✅ Couleurs neutres professionnelles
- ✅ Opacité pour superpositions
- ✅ Recherche pour grandes analyses

---

## 🎯 Configuration 9 : Mode Grand Public

**Usage** : Applications destinées au grand public

```json
{
  "showLegend": true,
  "legendPosition": "below",
  "layerNameSize": 15,
  "legendSize": 13,
  "backgroundColor": "#ffffff",
  "textColor": "#2c3e50",
  "hoverColor": "#ecf0f1",
  "borderColor": "#bdc3c7",
  "showVisibilityToggle": true,
  "showOpacitySlider": false,
  "enableSearch": true,
  "enableGrouping": false,
  "compactMode": false,
  "borderRadius": 8,
  "spacing": 10,
  "iconSize": 22
}
```

**Caractéristiques** :
- 👥 Interface simple et intuitive
- ❌ Pas d'opacité (éviter complexité)
- ❌ Pas de regroupement
- ✅ Recherche pour trouver facilement

---

## 🎯 Configuration 10 : Mode Haute Densité

**Usage** : Dashboards avec beaucoup d'informations

```json
{
  "showLegend": true,
  "legendPosition": "inline",
  "layerNameSize": 11,
  "legendSize": 9,
  "backgroundColor": "#fafafa",
  "textColor": "#3a3a3a",
  "hoverColor": "#f0f0f0",
  "borderColor": "#dddddd",
  "showVisibilityToggle": true,
  "showOpacitySlider": false,
  "enableSearch": true,
  "enableGrouping": true,
  "compactMode": true,
  "borderRadius": 2,
  "spacing": 3,
  "iconSize": 14
}
```

**Caractéristiques** :
- 📉 Tailles minimales
- ✅ Espacement réduit au maximum
- ✅ Mode compact activé
- ✅ Légende en ligne

---

## 🔧 Comment Appliquer une Configuration

### Méthode 1 : Via l'Interface (Recommandé)

1. Ouvrez Experience Builder
2. Sélectionnez votre application
3. Cliquez sur le widget Gestionnaire de Couches
4. Copiez les valeurs de la configuration souhaitée
5. Entrez-les une par une dans les paramètres

### Méthode 2 : Via le Fichier config.json

1. Naviguez vers :
   ```
   <ExperienceBuilder>\client\your-extensions\widgets\layer-manager\config.json
   ```
2. Remplacez le contenu avec la configuration souhaitée
3. Redémarrez Experience Builder
4. Les nouvelles valeurs par défaut seront appliquées

### Méthode 3 : À la Volée (Avancé)

Pour les développeurs, vous pouvez modifier la configuration dans le JSON de l'application :

1. Exportez votre application Experience Builder
2. Ouvrez le fichier `config.json` de l'application
3. Trouvez la section du widget `layer-manager`
4. Modifiez les valeurs
5. Réimportez l'application

---

## 💡 Conseils de Personnalisation

### Choisir les Bonnes Couleurs

**Contraste :**
- Assurez-vous d'un bon contraste entre texte et fond
- Utilisez des outils comme WebAIM Contrast Checker

**Cohérence :**
- Alignez les couleurs avec votre charte graphique
- Utilisez le même hoverColor que d'autres widgets

**Accessibilité :**
- Évitez les combinaisons rouge/vert uniquement
- Testez avec différents types de daltonisme

### Optimiser les Tailles

**Pour la lisibilité :**
- Minimum 12px pour layerNameSize
- Minimum 10px pour legendSize

**Pour l'efficacité spatiale :**
- Maximum 16px pour layerNameSize
- Utilisez le mode compact si >20 couches

### Fonctionnalités à Activer/Désactiver

**Toujours activer :**
- `showVisibilityToggle` (essentiel)
- `enableSearch` (si >10 couches)

**Optionnel selon l'usage :**
- `showOpacitySlider` (analyses avancées)
- `enableGrouping` (si services multiples)
- `compactMode` (densité d'information)

---

## 📝 Notes

- Les configurations peuvent être combinées
- Testez toujours avec vos données réelles
- Adaptez selon le retour des utilisateurs
- Documentez vos personnalisations

---

**Créé le** : Février 2025  
**Version** : 1.0.0
