// Routes

const express = require("express");
const {
  addNewBook,
  getAllBooks,
  deleteBook,
} = require("../controllers/BookController");
const router = express.Router();

// Get all books
router.get("/api/books", getAllBooks);

// Add a new book
router.post("/api/books", addNewBook);

// Delete a book
router.delete("/api/books/:id", deleteBook);

module.exports = router;
