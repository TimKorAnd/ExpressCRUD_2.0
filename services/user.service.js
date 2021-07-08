'use strict';

const UserModel = require('../models/user.model');
const RoomModel = require('../models/room.model');
const roomService = require('../services/room.service');
const Service = require('./service');

class UserService extends Service {
    constructor(userModel) {
        super(userModel);
    }

    // here should write method specific for UserService only, and no need repeated common others


}



module.exports = new UserService(UserModel);
