let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// User Data

let Card = mongoose.model(
  "Card",
  new Schema({
    name: {
      type: String,
      require: true,
      uppercase: true,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
    },
    avatar: {
      type: Buffer,
    },
    number: {
      type: Number,
      minlength: 10,
      maxlength: 12,
      require: true,
    },
    address: {
      type: String,
      minlength: 15,
      require: true,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
    },
  })
);

module.exports = Card;
