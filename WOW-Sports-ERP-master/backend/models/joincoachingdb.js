const mongoose = require('mongoose');

const joinCoachingSchema = new mongoose.Schema({
    sport: String,
    name: String,
    email: String,
    phone: String,
    gender: String,
    experience: String,
    timeSlot: String,
    time: String,
    goals: String
});

module.exports = mongoose.model('joincoachingdb', joinCoachingSchema);
