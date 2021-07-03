'use strict';

const RoomModel = require('../models/room.model');
const Service = require('./service');

exports.RoomService = new Service(RoomModel)
