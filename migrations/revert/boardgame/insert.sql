-- Revert book-collection:boardgame/insert from pg

BEGIN;

DROP FUNCTION new_book(text, text, text, text, posint, text, posint);

COMMIT;
