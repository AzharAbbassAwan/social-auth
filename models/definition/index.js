const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config.json')

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
        pool: config.db.pool,
        logging: config.db.logging,
    }
  );

const User = require('./user')(sequelize, DataTypes);

const db = {
    sequelize,
    Sequelize,
    User
}
module.exports = db;