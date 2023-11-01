const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: String,
  price: Number,
});

module.exports = model("Book", bookSchema);
