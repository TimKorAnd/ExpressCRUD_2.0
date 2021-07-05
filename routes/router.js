'use strict';

const express = require('express');
const router = express.Router();

const defaultRouter = require('../routes/default.router');
const notesRouter = require('../routes/notes.router');
const userRouter = require('../routes/user.router');
const roomRouter = require('../routes/room.router');
const messageRouter = require('../routes/message.router');

router.use('/notes', notesRouter);
router.use('/api/v1/users', userRouter);
router.use('/api/v1/rooms', roomRouter);
router.use('/api/v1/messages', messageRouter);
router.use('/', defaultRouter);

module.exports = router;
