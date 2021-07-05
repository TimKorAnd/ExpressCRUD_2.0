'use strict';

const Controller = require('./controller');
const service = require('../services/message.services');

module.exports = new Controller(service);
