// routes/doctors.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/foctors.js');

// Create a new doctor
router.post('/', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    const savedDoctor = await doctor.save();
    res.json(savedDoctor);
  } catch (error) {
    res.status(400).json({ error: 'Error creating a doctor' });
  }
});

// Get a list of doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching doctors' });
  }
});

// Add more routes for updating, deleting doctors, and other CRUD operations.

module.exports = router;
