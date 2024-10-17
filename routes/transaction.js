const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// Create a transaction
router.post('/create', async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    // Create transaction
    const newTransaction = await Transaction.create({ type, amount, description });

    res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error });
  }
});

module.exports = router;
