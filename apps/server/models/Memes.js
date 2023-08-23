const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  url: String,
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  userId: String,
  prompt: String,
});

module.exports = mongoose.model("Memes", MemesSchema);
