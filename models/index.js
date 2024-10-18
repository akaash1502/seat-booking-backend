const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
    config.db.database, 
    config.db.username, 
    config.db.password, 
    {
        host: config.db.host,
        dialect: config.db.dialect
    }
);

// Import models
const Seat = require('./seat')(sequelize);
// const User = require('./user')(sequelize);

sequelize.sync();  // Ensure tables are created

module.exports = { sequelize, Seat };
