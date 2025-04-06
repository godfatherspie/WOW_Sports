const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid'); // Import UUID for generating unique user IDs

// Define User schema
const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true, // Ensure userIds are unique
    default: uuidv4, // Generate a unique user ID by default
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
    match: [/.+@.+\..+/, 'Please fill a valid email address'], // Basic email validation
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please fill a valid phone number'], // Basic phone number validation (10 digits)
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'member'], // User can either be admin or member
    default: 'member',
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Pre-save hook: Hash the password before saving the user
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Only hash the password if it has been modified or is new

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    return next(error); // Pass error to the next middleware
  }
});

// Method to compare passwords during login
UserSchema.methods.comparePassword = async function(enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password); // Compare provided password with the hashed password
  } catch (error) {
    throw new Error('Error while comparing passwords'); // Handle any bcrypt comparison errors
  }
};

// Create User model
const User = mongoose.model('User', UserSchema);

// Export User model
module.exports = User;
