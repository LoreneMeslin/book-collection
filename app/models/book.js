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

    set number_pages(val){
        this.numberPages = val;
    }

    constructor(data = {}){
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const { rows } = await db.query('SELECT * FROM book;');

        return rows.map(book => new Book(book));
    }
}

module.exports = Book;