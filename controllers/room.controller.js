'use strict';

const Controller = require('./controller');
const Service = require('../services/room.services');

exports.RoomController = new Controller(Service);
