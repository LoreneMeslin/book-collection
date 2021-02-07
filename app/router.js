const { Router } = require('express');
const bookController = require('./controllers/bookController');

const router = Router();

router.get('/books', bookController.allBooks);

module.exports = router;