const express = require('express');
const router = express.Router();
const Booking = require('../models/bookforplaydb');

router.post('/create', async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = new Booking(bookingData);
        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully!', booking: newBooking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Failed to create booking', error });
    }
});

module.exports = router;
