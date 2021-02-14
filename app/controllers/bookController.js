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
    }
}

module.exports = bookController;