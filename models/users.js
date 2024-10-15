// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path if necessary

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users', // Specify the table name
    timestamps: true,   // Automatically create createdAt and updatedAt fields
});

module.exports = User;
