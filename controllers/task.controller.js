const { Task, Project } = require('../models');

module.exports = {
  create: async (req, res, next) => {
    const projectUrl = req.params.url;
    const { name } = req.body;
    const state = 0;    // 0 === incompleto
    try {
      const project = await Project.findOne({ where: { url: projectUrl } });
      const projectId = project.id;
      const task = await Task.create({ name, state, projectId });
      res.status(200).json({ task, message: 'Tarea creada.' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  changeStatus: async (req, res, next) => {
    const { id } = req.params;
    let state = 0;
    try {
      const task = await Task.findOne({ where: { id } });
      if (task.state === state) state = 1;
      task.state = state;
      const result = await task.save();
      res.status(200).json({ result, message: 'Estado de tarea actualizado.' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  delete: async (req, res, next) => {
    const { id } = req.params;
    try {
      const task = await Task.destroy({ where: { id } });
      res.status(200).json({ task, message: 'Tarea eliminada.' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}