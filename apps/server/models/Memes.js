const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemesSchema = new Schema({
  name: String,
  url: String,
  caption: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Memes', MemesSchema);