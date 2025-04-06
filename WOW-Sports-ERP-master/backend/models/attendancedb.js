const mongoose = require('mongoose');

// Define the Attendance schema
const attendanceSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    phone: String,
    email: { type: String, required: true },
    gender: String,
    experience: String,
    batch: String,
    timeSlot: String,
    attendanceDate: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent'], required: true }
}, { collection: 'attendance' });

// Create the Attendance model
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
