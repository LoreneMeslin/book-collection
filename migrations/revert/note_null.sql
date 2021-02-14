-- Revert book-collection:note_null from pg

BEGIN;

ALTER TABLE book ALTER note SET NOT NULL;

COMMIT;
