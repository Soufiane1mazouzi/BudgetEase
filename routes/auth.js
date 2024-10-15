// auth.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController'); // Import the registerUser function from userController

// Route for user registration
router.post('/register', registerUser); // When a POST request is made to /register, call registerUser

module.exports = router; // Export the router
