const mysql = require('mysql');

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zouzizouzi',  // Replace with your actual MySQL password
  database: 'budgetease'      // Replace with your actual database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = db;
