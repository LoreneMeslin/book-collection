-- Deploy book-collection:book/update to pg

BEGIN;

CREATE FUNCTION update_book(
	bid int, btitle text, bauthor text, bedition text, bisbn text, bnumpages posint, btag text, bnote posint
) RETURNS book AS $$
UPDATE book
SET title = btitle,
	author = bauthor,
	"edition" = bedition,
    isbn = bisbn,
	number_pages = bnumpages,
	tag = btag,
	note = bnote
WHERE id = bid
RETURNING *;
$$ LANGUAGE sql;

COMMIT;
