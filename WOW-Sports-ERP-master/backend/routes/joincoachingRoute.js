const express = require('express');
const joinCoaching = require('../models/joincoachingdb');
const router = express.Router();

// Route to handle form submission
router.post('/apply', async (req, res) => {
    try {
        const newApplication = new joinCoaching(req.body);
        await newApplication.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving application', error: error.message });
    }
});

module.exports = router;
