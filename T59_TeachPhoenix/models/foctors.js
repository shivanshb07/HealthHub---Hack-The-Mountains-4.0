// models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Doctor', doctorSchema);
