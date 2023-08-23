const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemesSchema = new Schema({
  url: String,
  prompt: String,
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  user: String,
});

module.exports = mongoose.model("Memes", MemesSchema);
