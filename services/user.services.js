'use strict';

const UserModel = require('../models/user.model');
const Service = require('./service');

module.exports = new Service(UserModel);
