const authRoutes = require('./routes/auth'); // Adjust the path if necessary

// Import required modules
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

// Initialize express app
const app = express();
dotenv.config(); // Load environment variables from .env

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define a basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('BudgetEase API is running');
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = db; // Export the db connection
