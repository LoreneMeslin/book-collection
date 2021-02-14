-- Revert book-collection:book/insert-json from pg

BEGIN;

DROP FUNCTION new_book(json);

COMMIT;
