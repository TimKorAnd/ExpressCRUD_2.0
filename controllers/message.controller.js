'use strict';

const Controller = require('./controller');
const Service = require('../services/message.services');

exports.MessageController = new Controller(Service);
