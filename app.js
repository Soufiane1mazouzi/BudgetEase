// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Sync Sequelize models to initialize the database
sequelize.sync()
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.error("Error creating database:", err));

// Start server on port 3000 and bind to '0.0.0.0'
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
