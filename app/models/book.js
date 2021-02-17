const db = require('../database');

class Book {
    id;
    title;
    author;
    edition;
    isbn;
    // camelCase en JS main snake_case côté BDD => il faut donc faire un setter pour cette valeur
    numberPages;
    tag;
    note;

    set number_pages(val) {
        this.numberPages = val;
    }

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const { rows } = await db.query('SELECT * FROM book;');

        return rows.map(book => new Book(book));
    }

    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM book WHERE id = $1;', [id]);

        if (!rows[0]) { // si il n'y a pas de livre correspondant à l'id fournis, on renvoie une erreur qui sera catch dans le controller
            throw new Error(`Pas de livre avec l'id ${id}`);
        }

        return new Book(rows[0]);
    }

    async save() {
        const { rows } = await db.query(`
            SELECT *
            FROM new_book($1);`, [this]);
        this.id = rows[0].id;
    }

    async update() {
        await db.query(`
            SELECT *
            FROM update_book($1, $2, $3, $4, $5, $6, $7, $8);
        `, [this.id, this.title, this.author, this.edition, this.isbn, this.numberPages, this.tag, this.note]);
    }
}

module.exports = Book;