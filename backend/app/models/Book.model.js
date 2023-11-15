const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: String,
  price: Number,
  image: String,
});

module.exports = model("Book", bookSchema);
