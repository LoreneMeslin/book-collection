# Gestion d'une collection de livres
API permettant de gérer une collection de livres.

## Stack
Ce projet utilise:
- Node 10+
  - Express
  - Joi
- PostgreSQL 11+
  - Sqitch

## Structure des données
**MCD:**
```
LIVRE: titre, auteur, edition, nombre de pages, théme, ISBN, note
```

## Installation

Il faut d'abord créer une BDD en local et rentrer les infos de connexion dans le fichier .env (cf.env.example).
Une fois la BDD créer, vous pouvez lancer le serveur node en vous plaçant dans le dossier puis écrire la commande:

```javascript
npm start
```
L'API a pour l'instant quatre routes disponible.

Une route GET permettant d'avoir la liste complète des livres présents dans la collection:

```javascript
GET {votre_url}/books
```

Une deuxième route GET prenant un id en paramètre pour avoir les infos d'un livre en particulier:

```javascript
GET {votre_url}/books/:id
```

Une route POST pour ajouter des nouveaux livres dans la collection:

```javascript
POST {votre_url}/books
```

Une route PATCH prenant un id en paramètre pour mettre à jour les infos d'un livre:

```javascript
PATCH {votre_url}/books/:id
```