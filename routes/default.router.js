'use strict';

const express = require('express');
const router = express.Router();

const defaultController = require('../controllers/default.controller');

router.use('/', defaultController);

module.exports = router;
