const mongoose = require("mongoose");
//add ability to add images
const ShopSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    require: true
  },
  colour: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  size: {
    type: String,
    require: true
  },
  quantity: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("content", ShopSchema);
