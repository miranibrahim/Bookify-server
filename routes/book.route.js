const express = require('express');
const { getAllBooks, createBook, getBook } = require('../controllers/book.controller');

const router = express.Router();

router.get('/books', getAllBooks);
router.post('/books', createBook);
router.get('/books/:id', getBook);

module.exports = router;
