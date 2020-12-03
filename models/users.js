const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    email: {
      type: String,
      require: true,
      lowercase: true,
    },
  })
);

module.exports = User;
