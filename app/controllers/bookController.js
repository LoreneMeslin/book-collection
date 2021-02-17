const Book = require('../models/book');

const bookController = {
    allBooks: async (_, res) => {
        const books = await Book.findAll();
        res.json(books);
    },

    oneBook: async (req, res) => {
        const { id } = req.params;
        try {
            const book = await Book.findOne(id);
            res.json(book);
        } catch (err) {
            res.status(404).json(err.message);
        }
    },

    newBook: async (req, res) => {
        const newBookData = req.body;
        console.log(newBookData);
        const newBook = new Book(newBookData);
        // il faut await si on veut pouvoir avoir le nouvel id créer par la BDD
        await newBook.save();

        res.json(newBook);
    },

    updateBook: async (req, res) => {
        const { id } = req.params;
        const updatedBookData = req.body;
        const book = await Book.findOne(id);
        if (updatedBookData.title) {
            book.title = updatedBookData.title;
        }
        if (updatedBookData.author) {
            book.author = updatedBookData.author;
        }
        if (updatedBookData.edition) {
            book.edition = updatedBookData.edition;
        }
        if (updatedBookData.isbn) {
            book.isbn = updatedBookData.isbn;
        }
        if (updatedBookData.numberPages) {
            book.numberPages = updatedBookData.numberPages;
        }
        if (updatedBookData.tag) {
            book.tag = updatedBookData.tag;
        }
        if (updatedBookData.note) {
            book.note = updatedBookData.note;
        }

        await book.update();

        res.json(book);
    }
}

module.exports = bookController;