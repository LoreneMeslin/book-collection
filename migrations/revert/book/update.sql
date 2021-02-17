-- Revert book-collection:book/update from pg

BEGIN;

DROP FUNCTION update_book(int, text, text, text, text, posint, text, posint);

COMMIT;
