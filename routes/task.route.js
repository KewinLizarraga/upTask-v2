const express = require('express');
const router = express.Router();
const { TaskController } = require('../controllers');

router.post('/create/:url', TaskController.create);
router.patch('/:id', TaskController.changeStatus);
router.delete('/:id', TaskController.delete);

module.exports = router;