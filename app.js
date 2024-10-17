const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');  // Add more routes as needed

// Use routes
app.use('/auth', authRoutes);  // You can add more routes here

// Listen on a specified port and bind to '0.0.0.0' to make sure it works on all interfaces
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
