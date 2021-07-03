'use strict';

const MessageModel = require('../models/message.model');
const Service = require('./service');

exports.MessageService = new Service(MessageModel);
