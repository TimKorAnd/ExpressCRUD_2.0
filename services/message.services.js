'use strict';

const MessageModel = require('../models/message.model');
const Service = require('./service');

module.exports = new Service(MessageModel);
