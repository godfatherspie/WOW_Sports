const express = require('express');
const User = require('../models/User'); // Import the User model
const bcrypt = require('bcrypt'); // Ensure bcrypt is imported for password hashing
const { v4: uuidv4 } = require('uuid'); // Import UUID for generating unique user IDs
const router = express.Router();

// User Registration Route (POST /api/users/register)
router.post('/register', async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  // Validate required fields
  if (!name || !email || !password || !phone || !address) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with a unique userId
    const userId = uuidv4(); // Generate a unique user ID
    const user = new User({
      userId, // Add userId field
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'User registration failed!', details: error.message });
  }
});

// User Login Route (POST /api/users/login)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required!' });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password!' });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password!' });
    }

    // Return user details (you can add a token here for authentication)
    res.json({
      message: 'Login successful!',
      user: {
        id: user._id,
        userId: user.userId, // Include userId in the response
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed!', details: error.message });
  }
});

// Get User Details Route (GET /api/users/:id)
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }
    res.json({
      id: user._id,
      userId: user.userId, // Include userId in the response
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user details!', details: error.message });
  }
});

// Update User Details Route (PUT /api/users/:id)
router.put('/:id', async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }

    // Update user details if provided
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.address = address || user.address;

    // Hash the new password if provided
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();
    res.json({ message: 'User details updated successfully!', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user details!', details: error.message });
  }
});

// Delete User Route (DELETE /api/users/:id)
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }
    res.json({ message: 'User deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user!', details: error.message });
  }
});

// Export the router
module.exports = router;
