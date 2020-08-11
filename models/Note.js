const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  label: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("note", NoteSchema);
