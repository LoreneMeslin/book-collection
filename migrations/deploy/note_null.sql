-- Deploy book-collection:note_null to pg

BEGIN;

-- La note peut être nulle si on ajoute le livre dans la collection afin de l'avoir fini
ALTER TABLE book ALTER note DROP NOT NULL;

COMMIT;
