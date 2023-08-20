const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  url: String,
  caption: String,
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Memes", MemesSchema);
