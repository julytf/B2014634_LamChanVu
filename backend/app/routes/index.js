const express = require("express");
const booksRouter = require("book.route")

const router = express.Router();

router
  .use("/api/books", booksRouter);

module.exports = router;
