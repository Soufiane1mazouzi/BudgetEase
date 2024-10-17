const express = require('express');
const app = express();

app.use(express.json()); // Parse incoming JSON requests

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to BudgetEase API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
