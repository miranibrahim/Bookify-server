const { getBooks, getBookById, addBook } = require("../models/book.model");

const getAllBooks = async (req, res) => {
  try {
    const books = await getBooks();
    res.send(books);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await getBookById(id);
    res.send(book);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = req.body;
    const result = await addBook(newBook);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
};
