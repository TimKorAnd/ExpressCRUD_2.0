'use strict';

const Controller = require('./controller');
const Service = require('../services/room.services');

module.exports = new Controller(Service);
