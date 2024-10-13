const express = require('express');
const app = express();

// Set up a basic route
app.get('/', (req, res) => {
  res.send('BudgetEase API is running');
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
