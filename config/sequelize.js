const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: console.log,
});

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

module.exports = sequelize;
