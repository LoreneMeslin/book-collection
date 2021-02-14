-- Deploy book-collection:book/insert-json to pg

BEGIN;

-- une version monoparam qui bénéficie de la souplesse du connecteur pg
-- l'objet passé côté JS est transformé en sa représentation JSON côté SQL
CREATE FUNCTION new_book(book json) RETURNS book AS $$
INSERT INTO book(
	title, author,
	"edition", isbn,
	number_pages, tag,
	note
) VALUES
(
    -- on parcourt le JSON pour récupérer une à une les propriétés qui nous intéressent
    -- l'opérateur ->> retourne toujours du texte, il faut le caster en autre chose si besoin
	book->>'title', book->>'author',
	book->>'edition', book->>'isbn',
	(book->>'numberPages')::int, book->>'tag',
    (book->>'note')::int
)
RETURNING *;
$$ LANGUAGE sql;

COMMIT;
