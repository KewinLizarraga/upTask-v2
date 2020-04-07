const express = require('express');
const router = express.Router();

const projectRoute = require('./project.route');
const userRoute = require('./user.route');

router.use('/project', projectRoute);
router.use('/user', userRoute);

module.exports = router;