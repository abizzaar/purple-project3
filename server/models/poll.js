const mongoose = require('mongoose');

const poll = new mongoose.Schema({
  question: String,
  description: String,
  optionIds: [String]
});

module.exports = mongoose.model('Poll', poll);
