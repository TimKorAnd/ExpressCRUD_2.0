'use strict';

//const mongooseConnect = require('./mongoConnect');
const express = require('express');
const app = express();

const router = require('../routes/router');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router);

 module.exports = app;
/*exports.app = app;
exports.mongooseConnect = mongooseConnect;*/
