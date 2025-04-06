const express = require('express');
const Student = require('../models/addstudentsdb');
const router = express.Router();

// Add a new student
router.post('/add', async (req, res) => {
  try {
    const { name, phone, email, gender, experience, batch, timeSlot } = req.body;
    const newStudent = new Student({ name, phone, email, gender, experience, batch, timeSlot, droppedForMonth: false });
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error: error.message });
  }
});

module.exports = router;
