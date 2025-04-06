const express = require('express');
const router = express.Router();
const Student = require('../models/viewstudentdb');

// Fetch all students from the existing 'students' table
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();  // Fetch all students from the 'students' collection
        res.json(students);  // Send back the students as a JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Remove a student by ID
router.delete('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletedStudent = await Student.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Drop a student for the month (we'll assume this just adds a field indicating the drop)
router.put('/drop/:id', async (req, res) => {
    try {
        const studentId = req.params.id;

        // Update the student to mark them as dropped for the month
        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            { $set: { droppedForMonth: true } }, // Add or update this field
            { new: true }  // Return the updated document
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: `${updatedStudent.name} dropped for the month.` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
