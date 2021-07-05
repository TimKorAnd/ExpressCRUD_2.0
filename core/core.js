'use strict';

/**
 * Idea is make all external imports here, and make available basic (core) action
 */

const mongooseConnect = require('./mongoConnect');
const {getValidationErrors} = require('../helpers/validationErrorsHandler');
//const { validate } = require('express-validation'); // TODO #1 dont work (((
const app = require('./express');

app.use(getValidationErrors);


exports.app = app;
exports.mongooseConnect = mongooseConnect;
// exports.validate = validate; // TODO #1 dont work (((
