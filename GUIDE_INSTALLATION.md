# Guide d'Installation - Widget Gestionnaire de Couches

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- ✅ ArcGIS Experience Builder Developer Edition 1.19 installé
- ✅ Node.js installé (version compatible avec ExB 1.19)
- ✅ Accès à votre dossier d'installation Experience Builder

---

## 🚀 Installation Pas à Pas

### Étape 1 : Localiser votre Installation Experience Builder

Trouvez votre dossier d'installation Experience Builder. Par défaut :
- **Windows** : `C:\ArcGIS\ExperienceBuilder\`
- **Mac/Linux** : `/home/user/ArcGIS/ExperienceBuilder/`

### Étape 2 : Créer le Dossier du Widget

1. Naviguez vers le dossier des widgets personnalisés :
   ```
   <ExperienceBuilder>\client\your-extensions\widgets\
   ```

2. Créez un nouveau dossier nommé **`layer-manager`** :
   ```
   <ExperienceBuilder>\client\your-extensions\widgets\layer-manager\
   ```

### Étape 3 : Copier les Fichiers

Copiez tous les fichiers et dossiers fournis dans le dossier `layer-manager` que vous venez de créer.

Votre structure finale doit ressembler à ceci :

```
<ExperienceBuilder>\client\your-extensions\widgets\layer-manager\
├── manifest.json
├── config.json
├── icon.svg
├── package.json
├── README.md
├── translations\
│   ├── default.ts
│   └── fr.ts
└── src\
    ├── runtime\
    │   └── widget.tsx
    └── setting\
        └── setting.tsx
```

### Étape 4 : Vérifier les Fichiers

✅ Vérifiez que vous avez bien ces fichiers :
- [x] `manifest.json` (configuration du widget)
- [x] `config.json` (paramètres par défaut)
- [x] `icon.svg` (icône du widget)
- [x] `translations/default.ts` (traductions anglaises)
- [x] `translations/fr.ts` (traductions françaises)
- [x] `src/runtime/widget.tsx` (widget principal)
- [x] `src/setting/setting.tsx` (panneau de configuration)

### Étape 5 : Redémarrer Experience Builder

1. **Arrêtez** Experience Builder si il est en cours d'exécution (Ctrl+C dans le terminal)

2. **Redémarrez** Experience Builder :
   ```bash
   cd <ExperienceBuilder>\server
   npm start
   ```

3. Attendez que le message "Webpack compiled successfully" apparaisse

### Étape 6 : Vérifier l'Installation

1. Ouvrez votre navigateur et allez à : `http://localhost:3000`

2. Connectez-vous avec votre compte ArcGIS Online

3. Créez une nouvelle application ou modifiez une existante

4. Dans le panneau des widgets, recherchez :
   - En français : **"Gestionnaire de Couches"**
   - En anglais : **"Layer Manager"**

5. Vous devriez voir l'icône du widget avec l'icône de couches empilées

---

## ⚙️ Configuration Initiale

### Première Utilisation

1. **Glissez-déposez** le widget "Gestionnaire de Couches" dans votre application

2. **Cliquez** sur le widget pour ouvrir le panneau de configuration

3. **Sélectionnez** le widget de carte que vous voulez utiliser :
   - Cliquez sur "Sélectionner une carte"
   - Choisissez votre widget de carte dans la liste

4. **Configurez** les options selon vos besoins (voir section suivante)

5. **Enregistrez** votre application

### Configuration Recommandée pour Débutants

Pour commencer, utilisez ces paramètres :

**Paramètres d'Affichage :**
- ✅ Afficher la Légende : **Activé**
- 📍 Position de la Légende : **En dessous**
- 👁️ Bouton de Visibilité : **Activé**
- 🎚️ Curseur d'Opacité : **Activé**

**Paramètres de Légende :**
- 📝 Taille du Nom : **14px**
- 🔣 Taille de la Légende : **12px**
- 🎯 Taille des Icônes : **20px**

**Paramètres de Style :**
- Utilisez les couleurs par défaut
- Ajustez selon votre thème

**Paramètres Avancés :**
- 🔍 Recherche : **Activé**
- 📁 Regroupement : **Activé**
- 📦 Mode Compact : **Désactivé**

---

## 🎨 Personnalisation

### Changer les Couleurs

1. Allez dans **Paramètres de Style**
2. Cliquez sur chaque couleur pour ouvrir le sélecteur
3. Choisissez vos couleurs personnalisées
4. Les changements sont appliqués en temps réel

### Ajuster les Tailles

Pour afficher plus de couches :
- ⬇️ Réduisez "Taille du Nom" (ex: 12px)
- ⬇️ Réduisez "Taille de la Légende" (ex: 10px)
- ⬇️ Réduisez "Espacement" (ex: 4px)
- ✅ Activez "Mode Compact"

Pour une meilleure lisibilité :
- ⬆️ Augmentez "Taille du Nom" (ex: 16px)
- ⬆️ Augmentez "Taille de la Légende" (ex: 14px)
- ⬆️ Augmentez "Espacement" (ex: 12px)

### Modes d'Affichage de la Légende

**Mode "En ligne"** :
- Légende à côté du nom
- Gain d'espace vertical
- Meilleur pour peu de couches

**Mode "En dessous"** :
- Légende sous le nom
- Meilleure lisibilité
- Idéal pour beaucoup de couches

---

## 🔍 Test du Widget

### Scénario de Test 1 : Visibilité

1. Ajoutez plusieurs couches à votre carte
2. Ouvrez le widget Gestionnaire de Couches
3. Cliquez sur l'icône œil pour masquer/afficher une couche
4. ✅ La couche doit disparaître/apparaître sur la carte

### Scénario de Test 2 : Opacité

1. Développez une couche (cliquez sur la flèche)
2. Utilisez le curseur d'opacité
3. ✅ La transparence de la couche doit changer en temps réel

### Scénario de Test 3 : Recherche

1. Tapez le nom d'une couche dans la barre de recherche
2. ✅ Seules les couches correspondantes doivent s'afficher

### Scénario de Test 4 : Légende

1. Vérifiez que la légende s'affiche pour chaque couche visible
2. Changez la position de la légende dans les paramètres
3. ✅ La légende doit se repositionner immédiatement

---

## ❌ Dépannage

### Problème : Le widget n'apparaît pas dans la liste

**Solutions :**
1. Vérifiez que tous les fichiers sont dans le bon dossier
2. Vérifiez qu'il n'y a pas d'erreurs de syntaxe dans les fichiers `.tsx`
3. Redémarrez complètement Experience Builder
4. Videz le cache de votre navigateur (Ctrl+Shift+Del)
5. Vérifiez la console du navigateur (F12) pour des erreurs

### Problème : Erreur au démarrage d'Experience Builder

**Solutions :**
1. Vérifiez que le fichier `manifest.json` est valide (pas de virgules en trop)
2. Vérifiez que le fichier `config.json` est valide
3. Assurez-vous que tous les fichiers `.ts` et `.tsx` sont bien encodés en UTF-8

### Problème : Les légendes ne s'affichent pas

**Solutions :**
1. Vérifiez que "Afficher la Légende" est activé dans les paramètres
2. Vérifiez que la couche est visible (icône œil)
3. Développez la couche (cliquez sur la flèche)
4. Certains types de couches peuvent ne pas supporter les légendes

### Problème : Le texte est en anglais au lieu de français

**Solutions :**
1. Vérifiez que le fichier `translations/fr.ts` existe
2. Changez la langue de votre profil ArcGIS Online en français
3. Videz le cache du navigateur

### Problème : Le widget est trop lent avec beaucoup de couches

**Solutions :**
1. Activez le "Mode Compact" pour réduire l'utilisation de ressources
2. Désactivez les curseurs d'opacité si non nécessaires
3. Limitez le nombre de couches visibles simultanément
4. Utilisez des groupes de couches pour organiser

---

## 📊 Logs et Débogage

### Activer les Logs

Pour déboguer le widget, ouvrez la console du navigateur (F12) et cherchez :

```
[Layer Manager] Loading layers...
[Layer Manager] Found X layers
[Layer Manager] Creating legend for layer: [nom]
```

### Erreurs Communes

```
Error: Cannot read property 'view' of undefined
→ Le widget de carte n'est pas correctement connecté
```

```
Error: Legend is not defined
→ L'API ArcGIS n'a pas chargé correctement
```

---

## 💡 Astuces et Bonnes Pratiques

### Performance

1. **Utilisez le Mode Compact** pour les applications avec 20+ couches
2. **Désactivez l'opacité** si non nécessaire (améliore les performances)
3. **Limitez la taille des légendes** pour réduire l'utilisation de mémoire

### UX (Expérience Utilisateur)

1. **Position du widget** : Placez-le dans un panneau latéral
2. **Largeur recommandée** : 300-400px
3. **Hauteur recommandée** : Pleine hauteur de l'écran
4. **Combinez** avec d'autres widgets (Légende, Couches de base)

### Organisation

1. **Nommez** vos couches de manière claire et cohérente
2. **Groupez** les couches par thème ou service
3. **Utilisez** des symbologies simples pour de meilleures légendes

---

## 🆘 Support

### Ressources Utiles

- **Documentation Esri** : https://developers.arcgis.com/experience-builder/
- **Forum Esri** : https://community.esri.com/
- **API ArcGIS JS** : https://developers.arcgis.com/javascript/

### Obtenir de l'Aide

1. Consultez d'abord le fichier README.md
2. Vérifiez les logs dans la console (F12)
3. Posez vos questions sur le forum Esri Community
4. Contactez le support technique Esri

---

## ✅ Checklist Post-Installation

- [ ] Le widget apparaît dans la liste des widgets
- [ ] Le widget peut être ajouté à une application
- [ ] Le widget de carte peut être sélectionné
- [ ] Les couches s'affichent correctement
- [ ] La visibilité fonctionne (icône œil)
- [ ] L'opacité fonctionne (curseur)
- [ ] La recherche fonctionne
- [ ] Les légendes s'affichent
- [ ] Les boutons "Tout développer/réduire" fonctionnent
- [ ] Les traductions en français sont présentes
- [ ] Les personnalisations de couleur fonctionnent
- [ ] Le mode compact fonctionne

---

**Félicitations ! 🎉**

Votre widget Gestionnaire de Couches est maintenant installé et prêt à l'emploi !

N'hésitez pas à l'adapter à vos besoins spécifiques et à partager vos améliorations.

---

**Date de création** : Février 2025  
**Version** : 1.0.0  
**Compatible avec** : ArcGIS Experience Builder 1.19+
