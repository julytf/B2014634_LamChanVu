const express = require("express");
const contacts = require("../controllers/book.controller.js");

const router = express.Router();

router
  .route("/")
  .get(() => {
    throw new Error();
  })
  .post(() => {
    throw new Error();
  })
  .delete(() => {
    throw new Error();
  });
router.route("/:userId").get(() => {
  throw new Error();
});

module.exports = router;
