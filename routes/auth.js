// Import required modules
const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router object
const { registerUser } = require('../controllers/userController'); // Import the registerUser function from userController

// Define the registration route
router.post('/register', registerUser); // Map the POST request on /register to the registerUser function

module.exports = router; // Export the router for use in app.js
