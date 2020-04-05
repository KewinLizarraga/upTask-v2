const Sequelize = require('sequelize');

const dialect = process.env.DIALECT_DB;
const username = process.env.USER_DB;
const password = process.env.PASS_DB;
const host = process.env.HOST_DB;
const port = process.env.PORT_DB;
const database = process.env.DATABASE;

const URI_DB = `${dialect}://${username}:${password}@${host}:${port}/${database}`;

const sequelize = new Sequelize(URI_DB);

module.exports = {
  URI_DB,
  sequelize
};