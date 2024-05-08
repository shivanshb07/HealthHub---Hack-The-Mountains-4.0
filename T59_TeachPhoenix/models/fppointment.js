// models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Doctor model
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Appointment', appointmentSchema);
