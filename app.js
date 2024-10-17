const express = require('express'); 
const bodyParser = require('body-parser');
const mysql = require('mysql');
const authRoutes = require('./routes/auth');  // Import your authentication routes

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'your_new_password', // Use the password you set for MySQL
    database: 'budgetease', // Ensure this matches your database name
});

// Connect to MySQL database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database!');
});

// Use routes
app.use('/auth', authRoutes);  // This will route auth requests to the auth.js file

// Listen on a specified port and bind to '0.0.0.0' to make sure it works on all interfaces
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
