'use strict';

const express = require('express');
const router = express.Router();

const defaultRouter = require('../routes/default.router');
const notesRouter = require('../routes/notes.router');

router.use('/notes', notesRouter);
router.use('/', defaultRouter);

module.exports = router;
