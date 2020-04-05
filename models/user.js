const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { sequelize } = require('../config');
const Project = require('./project');

const User = sequelize.define('users', {
  mail: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate: {
      isEmail: { msg: 'Agrega un Email válido.' },
      notEmpty: { msg: 'El Email no puede ir vacio.' }
    },
    unique: {
      args: true,
      msg: 'Usuario ya registrado. Intente con otro.'
    }
  },
  password: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El password no puede ir vacio' }
    }
  },
  active: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  token: Sequelize.STRING,
  expiration: Sequelize.DATE
}, {
  hooks: {
    beforeCreate: (user) => {
      user.password = bcrypt.hashSync(user.password, 10);
    }
  }
});

User.prototype.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

User.hasMany(Project);

module.exports = User;