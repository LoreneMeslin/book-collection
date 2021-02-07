-- Revert book-collection:init from pg

BEGIN;

DROP TABLE book;
DROP DOMAIN posint;

COMMIT;
