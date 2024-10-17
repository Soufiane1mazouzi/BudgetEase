const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create the express app
const app = express();

// Middleware to parse request bodies
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',  // Replace with your actual MySQL password
    database: 'BudgetEase'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to BudgetEase API');
});

// Import your auth routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);  // All auth routes will be prefixed with /auth

// Start the server and bind to 0.0.0.0
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
