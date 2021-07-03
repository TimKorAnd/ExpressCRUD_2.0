'use strict';

const UserModel = require('../models/user.model');
const Service = require('./service');

exports.UserService = new Service(UserModel)
