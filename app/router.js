const { Router } = require('express');
const bookController = require('./controllers/bookController');

const router = Router();

router.get('/books', bookController.allBooks);
router.get('/books/:id', bookController.oneBook);

router.post('/books', bookController.newBook);

module.exports = router;