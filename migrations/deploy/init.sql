-- Deploy book-collection:init to pg

BEGIN;

-- création d'un domaine n'autorisant que les valeurs positives
CREATE DOMAIN posint AS int CHECK (value > 0);

CREATE TABLE book (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    author text NOT NULL,
    "edition" text NOT NULL,
    isbn text NOT NULL,
    number_pages posint NOT NULL,
    tag text NOT NULL,
    note posint NOT NULL
);

COMMIT;
