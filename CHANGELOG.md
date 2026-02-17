# Changelog - Widget Gestionnaire de Couches

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Versionnage Sémantique](https://semver.org/lang/fr/).

---

## [1.0.0] - 2025-02-16

### 🎉 Version Initiale

#### ✨ Ajouté
- Gestion complète des couches de carte
- Affichage/masquage de la visibilité des couches
- Contrôle d'opacité avec curseur pour chaque couche
- Affichage de la légende intégrée avec l'API ArcGIS
- Deux positions de légende (en ligne / en dessous)
- Barre de recherche pour filtrer les couches
- Boutons "Tout développer" / "Tout réduire"
- Mode compact pour affichage dense
- Support bilingue (anglais / français)
- Panneau de configuration complet avec options :
  - Paramètres d'affichage
  - Paramètres de légende
  - Paramètres de style
  - Paramètres avancés

#### 🎨 Personnalisation
- Taille du nom de la couche ajustable (10-24px)
- Taille de la légende ajustable (8-20px)
- Taille des icônes ajustable (12-32px)
- Couleur de fond personnalisable
- Couleur du texte personnalisable
- Couleur de survol personnalisable
- Couleur de bordure personnalisable
- Rayon de bordure ajustable (0-20px)
- Espacement entre couches ajustable (0-24px)

#### 🔧 Fonctionnalités Techniques
- Détection automatique des changements de couches
- Mise à jour dynamique des légendes
- Optimisation des performances pour 50+ couches
- Gestion de l'état avec React
- Support de tous les types de couches ArcGIS
- Exclusion automatique des fonds de carte
- Support des groupes de couches

#### 📚 Documentation
- README complet en français et anglais
- Guide d'installation détaillé
- 10 exemples de configuration prédéfinis
- Documentation des paramètres
- Guide de dépannage

---

## [Futur] - Fonctionnalités Prévues

### 🚀 Version 1.1.0 (Prévue)

#### Planifié
- [ ] Drag & drop pour réorganiser les couches
- [ ] Export de la configuration du widget
- [ ] Import de configuration
- [ ] Templates de style prédéfinis (Esri, Sombre, Clair, etc.)
- [ ] Support complet des sous-couches (sublayers)
- [ ] Bouton de zoom sur l'étendue de la couche
- [ ] Indicateur de chargement pour les couches

#### En Considération
- [ ] Filtrage par type de géométrie (point, ligne, polygone)
- [ ] Affichage du nombre d'entités par couche
- [ ] Statistiques des couches
- [ ] Mode grille pour l'affichage des couches
- [ ] Support du mode plein écran
- [ ] Impression de la liste des couches
- [ ] Export CSV de la liste des couches

---

### 🚀 Version 1.2.0 (Idées)

#### Idées Futures
- [ ] Support des signets par configuration de couches
- [ ] Historique des modifications de visibilité
- [ ] Mode comparaison (avant/après)
- [ ] Annotations et notes sur les couches
- [ ] Partage de configurations entre utilisateurs
- [ ] Intégration avec des services de métadonnées
- [ ] Support de l'édition de couches
- [ ] Gestion des styles de couches

---

## Notes de Version

### Comment Lire ce Changelog

- **[Ajouté]** : Nouvelles fonctionnalités
- **[Modifié]** : Changements dans les fonctionnalités existantes
- **[Déprécié]** : Fonctionnalités qui seront supprimées prochainement
- **[Supprimé]** : Fonctionnalités supprimées
- **[Corrigé]** : Corrections de bugs
- **[Sécurité]** : Correctifs de sécurité

### Compatibilité

#### Version 1.0.0
- ✅ ArcGIS Experience Builder 1.19.0+
- ✅ ArcGIS Maps SDK for JavaScript (version d'ExB 1.19)
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Migration

#### Vers 1.0.0 (Initial)
Aucune migration nécessaire - première version

---

## Contribuer

Si vous avez des suggestions de fonctionnalités ou trouvez des bugs :

1. Consultez d'abord ce CHANGELOG pour voir si c'est prévu
2. Vérifiez la section "En Considération" pour les idées futures
3. Créez une issue détaillée avec :
   - Description du problème/suggestion
   - Cas d'usage
   - Captures d'écran si applicable
   - Version d'Experience Builder utilisée

---

## Support des Versions

| Version | Status | Support | Date de Sortie |
|---------|--------|---------|----------------|
| 1.0.0 | ✅ Stable | Actif | 2025-02-16 |

**Légende :**
- ✅ **Stable** : Version recommandée
- 🔧 **Beta** : En test
- ⚠️ **Déprécié** : Support limité
- ❌ **Non supporté** : Fin de vie

---

## Remerciements

Merci à tous ceux qui ont contribué à ce projet :
- Communauté Esri pour les retours
- Équipe Esri pour l'API ArcGIS JavaScript
- Utilisateurs beta-testeurs

---

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

---

**Maintenu par** : Équipe Widget Custom  
**Dernière mise à jour** : 16 février 2025
