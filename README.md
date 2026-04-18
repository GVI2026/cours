# Support de cours · Gestion des versions et intégration continue

> :bulb: [**Lien du cours**](https://gvi2026.github.io/cours/)

Ce dépôt sert de base pour héberger le support du cours **Gestion des versions et intégration continue**.

Le site est pensé pour être publié avec **GitHub Pages** à partir du dossier [docs/](docs/). Il repose sur une structure volontairement simple :

- pages HTML statiques,
- **Tailwind CSS** chargé via CDN,
- rendu des diagrammes **Mermaid** côté navigateur,
- fichiers Mermaid séparés au format `.md`.

## Structure du projet

- [docs/index.html](docs/index.html) : landing page du cours
- [docs/cours-01/index.html](docs/cours-01/index.html) : première page de cours placeholder
- [docs/assets/js/mermaid-loader.js](docs/assets/js/mermaid-loader.js) : chargement des diagrammes Mermaid externes
- [docs/mermaid/flowchart-introduction.md](docs/mermaid/flowchart-introduction.md) : flowchart placeholder pour valider le rendu
- [docs/.nojekyll](docs/.nojekyll) : évite le traitement Jekyll et conserve les fichiers Markdown bruts accessibles

## Déploiement avec GitHub Pages

Configurer GitHub Pages pour publier le site depuis le dossier [docs/](docs/) de la branche principale du dépôt.

Une fois l'option activée, la landing page sera servie depuis [docs/index.html](docs/index.html) et le premier cours depuis [docs/cours-01/index.html](docs/cours-01/index.html).

## Test en local

Pour un test rapide, ne pas ouvrir les pages directement en `file://`.

Ce projet charge un script JavaScript et des fichiers Mermaid `.md` séparés. Les navigateurs bloquent ce chargement en mode fichier local pour des raisons de sécurité, ce qui provoque les erreurs CORS observées.

Utiliser à la place un petit serveur HTTP local à la racine du dépôt :

```bash
python3 -m http.server 8000 --directory docs
```
Puis ouvrir :

- `http://localhost:8000/`



ou pour activer un Live Preview :
```bash
npx browser-sync start --server 'docs' --files 'docs/**/*'
```
Puis ouvrir :

- `http://localhost:3000/`


En mode HTTP local :

- les liens fonctionnent correctement,
- le script Mermaid est chargé normalement,
- les fichiers `.md` contenant les diagrammes peuvent être récupérés par le navigateur.

## Diagrammes Mermaid dans des fichiers `.md`

Les diagrammes Mermaid sont stockés dans des fichiers Markdown séparés contenant uniquement la définition Mermaid.

Exemple :

- [docs/mermaid/flowchart-introduction.md](docs/mermaid/flowchart-introduction.md)

Le chargement est réalisé par [docs/assets/js/mermaid-loader.js](docs/assets/js/mermaid-loader.js). Une page peut afficher un diagramme en ajoutant un conteneur HTML avec l'attribut `data-mermaid-src` pointant vers le fichier `.md` à charger.

## Ajouter un nouveau cours

1. Créer un nouveau dossier de type `cours-02` dans [docs/](docs/).
2. Ajouter un fichier `index.html` pour la nouvelle séance.
3. Mettre à jour [docs/index.html](docs/index.html) pour ajouter le lien vers ce nouveau contenu.
4. Ajouter, si nécessaire, de nouveaux diagrammes Mermaid dans [docs/mermaid/](docs/mermaid/).

## Ajouter un nouveau diagramme Mermaid

1. Créer un fichier `.md` dans [docs/mermaid/](docs/mermaid/).
2. Écrire uniquement la définition Mermaid dans ce fichier.
3. Référencer ce fichier depuis une page HTML via `data-mermaid-src`.

## Objectif de cette initialisation

Cette première version permet de valider les points suivants :

- structure de publication GitHub Pages,
- landing page simple et extensible,
- premier cours dans un dossier séparé,
- chargement d'un diagramme Mermaid depuis un fichier `.md` externe.
