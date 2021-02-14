const { Router } = require('express');
const bookController = require('./controllers/bookController');
const { validateBody } = require('./services/validator');
const bookSchema = require('./schemas/book');

const router = Router();

router.get('/books', bookController.allBooks);
router.get('/books/:id', bookController.oneBook);

router.post('/books', validateBody(bookSchema), bookController.newBook);

module.exports = router;