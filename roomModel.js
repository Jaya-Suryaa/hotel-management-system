const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: 'Available' } // If you have a status field
});

module.exports = mongoose.model('Room', roomSchema);
