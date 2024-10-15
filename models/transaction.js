const db = require('../app'); // Import the MySQL connection

const Transaction = {};

// Define a method to create a new transaction
Transaction.create = (transactionData, callback) => {
  const query = 'INSERT INTO transactions (user_id, amount, type, description) VALUES (?, ?, ?, ?)';
  db.query(query, [
    transactionData.user_id, 
    transactionData.amount, 
    transactionData.type, 
    transactionData.description
  ], callback);
};

module.exports = Transaction;
