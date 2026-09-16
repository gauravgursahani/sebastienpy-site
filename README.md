# sebastienpy.com

Site bilingue (FR / EN) de Sébastien Py, photographe de mariage à Lille.
Live : https://sebastienpy.com — déployé par Netlify à chaque push sur `main`.

## Structure

Le site tenait dans un seul fichier. Depuis l'ajout de la page portfolio il
est découpé, pour que les deux pages partagent les mêmes styles et les mêmes
textes au lieu de les dupliquer :

| Fichier          | Rôle |
|------------------|------|
| `index.html`     | Accueil : hero, carrousel, approche, témoignages, à propos, prestations, FAQ, contact |
| `portfolio.html` | Page dédiée : les 50 images en grille |
| `site.css`       | **Tous** les styles + les polices encodées dans le fichier |
| `site.js`        | **Tous** les textes (FR/EN), la bascule de langue, l'en-tête, la visionneuse, les mentions légales |
| `images/`        | `hero`, `break-*`, `portrait`, et `pf-*` pour le portfolio |

## Où modifier quoi

**Les textes** → `site.js`, dictionnaire `I18N`. Une seule entrée par clé,
en `fr` et en `en`. Les deux pages lisent le même dictionnaire : corriger une
phrase ici la corrige partout. Ne jamais écrire un texte en dur dans le HTML.

**Le téléphone, l'Instagram, le lien des avis** → `site.js`, bloc `CONFIG`.

**Les images du carrousel de l'accueil** → `index.html`, section `#portfolio`.
Douze images choisies ; l'ordre est celui du HTML.

**Les images du portfolio** → `portfolio.html`, div `.grid`.

### Ajouter une image

Chaque photo existe en deux tailles, générées depuis l'original :

    images/pf-NOM.jpg      1800 px  → visionneuse et carrousel
    images/pf-NOM-t.jpg     900 px  → vignette de la grille

Le `style="background-image:url(data:…)"` sur chaque `<img>` est une
micro-vignette de 20 px : elle occupe la place pendant le chargement pour
éviter que la page ne sursaute. `width`/`height` et `aspect-ratio` jouent le
même rôle — les garder cohérents avec l'image réelle.

## Réglages côté Netlify (déjà faits)

1. **Forms → Notifications** → e-mail de Sébastien à chaque demande.
2. **Form detection** activée.

## À faire

- **Mentions légales** : le statut et le SIRET ont été retirés à la demande de
  Sébastien (11/09/2026). La loi LCEN art. 6-III les rend obligatoires pour un
  site professionnel — à rétablir dans `site.js` (`lg.legalBody`) dès que le
  numéro est disponible.
- **Images inutilisées** : `images/gallery-01…24.jpg` ne servent plus depuis le
  passage au carrousel. À supprimer un jour, sans urgence.
