const express = require("express");
const contacts = require("../controllers/book.controller.js");

const router = express.Router();

router.route("/login").post(() => {
  throw new Error();
});

router.route("/register").post(() => {
  throw new Error();
});

module.exports = router;
