// routes/appointments.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/fppointment');

// Create a new appointment
router.post('/', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    const savedAppointment = await appointment.save();
    res.json(savedAppointment);
  } catch (error) {
    res.status(400).json({ error: 'Error creating an appointment' });
  }
});

// Get a list of appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching appointments' });
  }
});

// Add more routes for updating, deleting appointments, and other CRUD operations.

module.exports = router;
