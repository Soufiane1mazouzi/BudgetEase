const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');

const app = express();

app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

sequelize.sync()
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.error("Error creating database:", err));

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
