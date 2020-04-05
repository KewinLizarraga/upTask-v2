const Sequelize = require('sequelize');
const slug = require('slug');
const shortid = require('shortid');
const { sequelize } = require('../config');

const Project = sequelize.define('projects', {
  name: Sequelize.STRING(60),
  url: Sequelize.STRING(100)
}, {
  hooks: {
    beforeCreate: (project) => {
      const url = slug(project.name).toLowerCase();
      project.url = `${url}-${shortid.generate()}`;
    }
  }
});

module.exports = Project;