const express = require('express');

const router = express.Router();

const defaultRouter = require('./default.router');
const userRouter = require('./user.router');
const roomRouter = require('./room.router');
const messageRouter = require('./message.router');

router.use('/api/v1/users', userRouter);
router.use('/api/v1/rooms', roomRouter);
router.use('/api/v1/messages', messageRouter);
router.use('/', defaultRouter);

module.exports = router;
