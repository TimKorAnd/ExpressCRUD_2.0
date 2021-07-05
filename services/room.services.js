'use strict';

const roomModel = require('../models/room.model');
const Service = require('./service');

module.exports = new Service(roomModel);
