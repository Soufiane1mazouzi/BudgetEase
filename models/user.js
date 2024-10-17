const db = require('../config/db'); // Import the MySQL connection

// User model to handle user creation
const User = {};

// Define a method to create a new user
User.create = (userData) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [userData.username, userData.password], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = User;
