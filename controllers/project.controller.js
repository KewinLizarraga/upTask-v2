const { Project, Task, User } = require('../models');

module.exports = {
  home: async (req, res, next) => {
    try {
      const project = await Project.findAll();
      res.status(200).json(project);
    } catch (error) {
      console.log('Error in home: ', error);
      next(error);
    }
  },
  newProject: async (req, res, next) => {
    const { name } = req.body;
    const userId = req.params.idUser;
    try {
      const project = await Project.create({ name, userId });
      res.status(200).json({ project, message: 'Se creo el proyecto.' });
    } catch (error) {
      console.log('Error in newProject: ', error);
      next(error);
    }
  },
  projectByUrl: async (req, res, next) => {
    const projectUrl = req.params.url;
    try {
      const project = await Project.findAll({ where: { url: projectUrl } });
      res.status(200).json(project);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  updateProject: async (req, res, next) => {
    const { name } = req.body;
    const projectId = req.params.idProject;
    try {
      const project = await Project.update({ name }, { where: { id: projectId } });
      res.status(200).json({ project, message: 'Se actualizo el proyecto.' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  deleteProject: async (req, res, next) => {
    const projectId = req.params.idProject;
    try {
      const project = await Project.destroy({ where: { id: projectId } });
      res.status(200).json({ project, message: 'Se elimino el proyecto.' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
}