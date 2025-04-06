const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    sport: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: Number, required: true },
    additionalInfo: { type: String, maxlength: 75 }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
