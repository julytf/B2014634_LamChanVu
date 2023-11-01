const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  Role: String,
});

module.exports = model("User", userSchema);
