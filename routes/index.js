const express = require('express');
const router = express.Router();

const projectRoute = require('./project.route');
const taskRoute = require('./task.route');
const userRoute = require('./user.route');

router.use('/project', projectRoute);
router.use('/task', taskRoute);
router.use('/user', userRoute);

module.exports = router;