const express = require('express');

const router = express.Router();

const defaultRouter = require('./default.router');
const userRouter = require('./user.router');
const roomRouter = require('./room.router');
const messageRouter = require('./message.router');

router.use(`${process.env.ROUTE_PREFIX_PROD}users`, userRouter);
router.use(`${process.env.ROUTE_PREFIX_PROD}rooms`, roomRouter);
router.use(`${process.env.ROUTE_PREFIX_PROD}messages`, messageRouter);

router.use(`${process.env.ROUTE_PREFIX_PROD}`, defaultRouter);

module.exports = router;
