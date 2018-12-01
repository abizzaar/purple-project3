const mongoose = require('mongoose');

const option = new mongoose.Schema({
  name: String,
  votes: Number
});

module.exports = mongoose.model('Option', option);