const Sequelize = require('sequelize');
const { sequelize } = require('../config');
const Project = require('./project');

const Task = sequelize.define('tasks', {
  name: Sequelize.STRING(100),
  state: Sequelize.INTEGER(1)
});

Task.belongsTo(Project);

module.exports = Task;