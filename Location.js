const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  description: String,
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
