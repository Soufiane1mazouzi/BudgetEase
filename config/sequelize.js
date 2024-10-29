const { Sequelize } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Stores the database in the project root
});

// Test the connection to confirm it's working
sequelize.authenticate()
    .then(() => console.log("Connected to SQLite database"))
    .catch(err => console.error("Unable to connect to database:", err));

module.exports = sequelize;
