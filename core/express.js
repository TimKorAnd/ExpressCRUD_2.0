'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev').bind()); // TODO why bind required in my project ?!?!?!? How add to core.js ?!?!?!

const router = require('../routes/router');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router);

module.exports = app;
