const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendancedb'); // Import the Attendance model
// No need to define Attendance here again

// POST route to mark or update attendance
router.post('/mark', async (req, res) => {
    const { studentName, phone, email, gender, experience, batch, timeSlot, attendanceDate, status } = req.body;

    try {
        // Validate input
        if (!studentName || !attendanceDate || !status) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Check if attendance already exists for this student and date
        const existingRecord = await Attendance.findOne({ studentName, attendanceDate });

        if (existingRecord) {
            // Update existing record
            existingRecord.status = status;
            await existingRecord.save();
            return res.status(200).json({ message: 'Attendance updated successfully', record: existingRecord });
        }

        // Create a new attendance record
        const newRecord = new Attendance({
            studentName,
            phone,
            email,
            gender,
            experience,
            batch,
            timeSlot,
            attendanceDate,
            status
        });

        await newRecord.save();
        res.status(201).json({ message: 'Attendance marked successfully', record: newRecord });
    } catch (error) {
        console.error('Error marking attendance:', error.message);
        res.status(500).json({ message: 'Failed to mark attendance', error: error.message });
    }
});

// GET route to view all attendance records, with optional filters
router.get('/view', async (req, res) => {
    const { date, timeSlot } = req.query;

    try {
        // Build the query object based on optional filters
        const query = {};
        if (date) query.attendanceDate = date;
        if (timeSlot) query.timeSlot = timeSlot;

        const records = await Attendance.find(query);
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching attendance records:', error.message);
        res.status(500).json({ message: 'Failed to fetch records', error: error.message });
    }
});

// GET route to fetch attendance of a specific student by name
router.get('/view/:studentName', async (req, res) => {
    const { studentName } = req.params;

    try {
        const records = await Attendance.find({ studentName });
        if (records.length === 0) {
            return res.status(404).json({ message: 'No records found for this student' });
        }
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching student attendance:', error.message);
        res.status(500).json({ message: 'Failed to fetch student records', error: error.message });
    }
});

module.exports = router;
