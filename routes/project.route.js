const express = require('express');
const router = express.Router();
const { ProjectController } = require('../controllers');

router.get('/home', ProjectController.home);
router.post('/new-project/:idUser', ProjectController.newProject);
router.get('/:url', ProjectController.projectByUrl);
router.put('/:idProject', ProjectController.updateProject);
router.delete('/:idProject', ProjectController.deleteProject);

module.exports = router;