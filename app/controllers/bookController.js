const Book = require('../models/book');

const bookController = {
    allBooks: async (_, res) => {
        const books = await Book.findAll();
        res.json(books);
    }
}

module.exports = bookController;