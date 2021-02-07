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
    }
}

module.exports = bookController;