-- Deploy book-collection:boardgame/insert to pg

BEGIN;

CREATE FUNCTION new_book(
	btitle text, bauthor text, bedition text, bisbn text, bnumpages posint, btag text, bnote posint
) RETURNS book AS $$
INSERT INTO book(
	title,
	author,
	"edition",
    isbn,
	number_pages,
	tag,
	note
)
VALUES
	(btitle, bauthor, bedition, bisbn, bnumpages, btag, bnote)
RETURNING *;
$$ LANGUAGE sql;


COMMIT;
