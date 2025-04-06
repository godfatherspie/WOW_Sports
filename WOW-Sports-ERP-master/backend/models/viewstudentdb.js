const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  gender: String,
  experience: String,
  batch: String,
  timeSlot: String,
});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = Student;
