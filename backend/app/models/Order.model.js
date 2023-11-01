const { Schema, model } = require("mongoose");

const orderDetailSchema = new Schema({
  book: {
    type: Schema.ObjectId,
    ref: "Book",
  },
  quantity: Number,
});

const orderSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  status: String,
  address: string,
  details: [orderDetailSchema],
});

module.exports = model("Order", orderSchema);
