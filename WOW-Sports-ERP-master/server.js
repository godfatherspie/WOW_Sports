const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('C:/Users/shrav/firstapp/backend/wow_sports_fitness.db', (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
        process.exit(1);
    }
    console.log('Connected to the SQLite database.');
});

// Base Route
app.get('/', (req, res) => {
    res.send('Wow Sports and Fitness API is running...');
});

// Routes for `applications` Table

// Route to handle form submission
app.post('/api/applications/apply', (req, res) => {
    const { sport, name, email, phone, gender, experience, timeSlot, time, goals } = req.body;

    const query = `
        INSERT INTO enquirycoaching (sport, name, email, phone, gender, experience, timeSlot, time, goals)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [sport, name, email, phone, gender, experience, timeSlot, time, goals], function (err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Error saving data' });
        }
        res.status(200).json({ message: 'Application submitted successfully' });
    });
});

// Add a New Student
app.post('/api/applications/add', (req, res) => {
    const { name, phone, email, gender, experience, batch, timeSlot } = req.body;

    if (!name || !phone || !email || !gender || !experience || !batch || !timeSlot) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = `
        INSERT INTO students (name, phone, email, gender, experience, batch, time_slot)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [name, phone, email, gender, experience, batch, timeSlot];

    db.run(sql, params, function (err) {
        if (err) {
            console.error('Error adding student:', err.message);
            return res.status(500).json({ error: 'Failed to add student' });
        }
        res.status(201).json({ id: this.lastID, message: 'Student added successfully' });
    });
});

// Fetch All Students
app.get('/api/applications/students', (req, res) => {
    const sql = `SELECT * FROM students`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error fetching students:', err.message);
            return res.status(500).json({ error: 'Failed to fetch students' });
        }
        res.json(rows);
    });
});

// Add a new booking
app.post('/api/applications/bookforplay', (req, res) => {
    const { sport, name, email, phone, date, time, additionalInfo } = req.body;

    // Check for missing required fields
    if (!sport || !name || !email || !phone || !date || !time) {
        return res.status(400).json({ error: 'All required fields must be provided.' });
    }

    const query = `
        INSERT INTO bookings (sport, name, email, phone, date, time, additional_info)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [sport, name, email, phone, date, time, additionalInfo || ''];

    db.run(query, params, function (err) {
        if (err) {
            console.error('Error inserting booking:', err.message);
            return res.status(500).json({ error: 'Failed to add booking.' });
        }
        res.status(201).json({ id: this.lastID, message: 'Booking added successfully.' });
    });
});

app.get('/api/applications/bookforplay', (req, res) => {
    const sql = `SELECT * FROM bookings`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error fetching bookings:', err.message);
            return res.status(500).json({ error: 'Failed to fetch bookings' });
        }
        res.json(rows);
    });
});

// Routes for `attendance` Table

// Save Attendance
app.post('/api/applications/attendance', (req, res) => {
    const { attendance, attendanceDate, selectedTimeSlot } = req.body;

    if (!attendanceDate || !selectedTimeSlot) {
        return res.status(400).json({ error: 'Both date and time slot are required' });
    }

    if (Object.keys(attendance).length === 0) {
        return res.status(400).json({ error: 'No attendance data provided' });
    }

    const attendancePromises = [];

    for (const studentName in attendance) {
        const status = attendance[studentName];
        const date = attendanceDate;
        const timeSlot = selectedTimeSlot;

        const queryCheck = `
            SELECT attendance_status FROM attendance
            WHERE student_name = ? AND attendance_date = ? AND time_slot = ?`;

        const checkAttendancePromise = new Promise((resolve, reject) => {
            db.get(queryCheck, [studentName, date, timeSlot], (err, row) => {
                if (err) {
                    console.error(`Error checking attendance for ${studentName}: ${err.message}`);
                    return reject(`Error checking attendance for ${studentName}: ${err.message}`);
                }

                if (row) {
                    const queryUpdate = `
                        UPDATE attendance
                        SET attendance_status = ?
                        WHERE student_name = ? AND attendance_date = ? AND time_slot = ?`;

                    db.run(queryUpdate, [status, studentName, date, timeSlot], function (err) {
                        if (err) {
                            console.error(`Error updating attendance for ${studentName}: ${err.message}`);
                            return reject(`Error updating attendance for ${studentName}: ${err.message}`);
                        }
                        resolve(`Attendance updated for ${studentName}`);
                    });
                } else {
                    const queryInsert = `
                        INSERT INTO attendance (student_name, attendance_status, attendance_date, time_slot)
                        VALUES (?, ?, ?, ?)`;

                    db.run(queryInsert, [studentName, status, date, timeSlot], function (err) {
                        if (err) {
                            console.error(`Error inserting attendance for ${studentName}: ${err.message}`);
                            return reject(`Error inserting attendance for ${studentName}: ${err.message}`);
                        }
                        resolve(`Attendance saved for ${studentName}`);
                    });
                }
            });
        });

        attendancePromises.push(checkAttendancePromise);
    }

    Promise.allSettled(attendancePromises)
        .then(results => {
            const errors = results.filter(result => result.status === 'rejected');
            const successMessages = results.filter(result => result.status === 'fulfilled').map(result => result.value);

            if (errors.length > 0) {
                res.status(500).json({
                    message: 'Some attendance records failed to process.',
                    errors: errors.map(error => error.reason)
                });
            } else {
                res.json({
                    message: 'Attendance processed successfully',
                    details: successMessages
                });
            }
        })
        .catch(err => {
            console.error('Error processing attendance:', err);
            res.status(500).json({ error: 'An error occurred while processing attendance' });
        });
});

// Routes for `fees` Table

// Add Fee Record
app.post('/api/applications/fee', (req, res) => {
    const { studentName, feeStatus, feeAmount, paymentMethod } = req.body;

    if (!studentName || !feeStatus || !feeAmount || !paymentMethod) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = `
        INSERT INTO fees (student_name, fee_status, fee_amount, payment_method)
        VALUES (?, ?, ?, ?)
    `;
    const params = [studentName, feeStatus, feeAmount, paymentMethod];

    db.run(sql, params, function (err) {
        if (err) {
            console.error('Error adding fee record:', err.message);
            return res.status(500).json({ error: 'Failed to add fee record' });
        }
        res.status(201).json({ id: this.lastID, message: 'Fee record added successfully' });
    });
});

// Update Fee Status
app.put('/api/applications/fee/:id', (req, res) => {
    const { id } = req.params;
    const { feeStatus, feeAmount, paymentMethod } = req.body;

    const sql = `
        UPDATE fees
        SET fee_status = ?, fee_amount = ?, payment_method = ?
        WHERE id = ?
    `;
    const params = [feeStatus, feeAmount, paymentMethod, id];

    db.run(sql, params, function (err) {
        if (err) {
            console.error('Error updating fee record:', err.message);
            return res.status(500).json({ error: 'Failed to update fee record' });
        }
        res.json({ message: 'Fee record updated successfully' });
    });
});

// Fetch All Fee Records
app.get('/api/applications/fees', (req, res) => {
    const sql = `SELECT * FROM fees`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error fetching fees:', err.message);
            return res.status(500).json({ error: 'Failed to fetch fees' });
        }
        res.json(rows);
    });
});

// Global 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('An error occurred:', err.message);
    res.status(500).json({ error: 'An internal error occurred' });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
