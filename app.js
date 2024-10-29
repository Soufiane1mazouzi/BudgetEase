const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
