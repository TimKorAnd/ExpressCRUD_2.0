const express = require('express');
const defaultController = require('../controllers/default.controller');

const router = express.Router();
router.use('/', defaultController);

module.exports = router;
