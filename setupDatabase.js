const sequelize = require('./config/sequelize'); // Corrected path
const { DataTypes } = require('sequelize');

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
