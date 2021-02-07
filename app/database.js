const { Pool } = require('pg');

/* les informations de connexion sont récupérées dans l'environnement
    - PGHOST pour l'hôte
    - PGUSER pour l'utilisateur
    - PGPASSWORD pour le mot de passe
    - PGDATABASE pour la base de données
    - et si applicable PGPORT pour le port
*/
const db = new Pool();

module.exports= db;