const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to BudgetEase API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
