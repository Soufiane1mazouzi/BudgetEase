const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');

// Define the User model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sync the database and create the User table
async function initializeDatabase() {
    try {
        await sequelize.sync({ force: true });
        console.log('Database initialized with User table.');
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        await sequelize.close();
    }
}

initializeDatabase();
