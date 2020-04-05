require('dotenv').config('');

module.exports = {
  PORT: process.env.PORT_API,
  URI_DB: require('./db').URI_DB,
  sequelize: require('./db').sequelize
}