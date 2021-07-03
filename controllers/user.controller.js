'use strict';

const Controller = require('./controller');
const Service = require('../services/user.services');

exports.UserController = new Controller(Service);
