'use strict';

const RoomModel = require('../models/room.model');
const UserModel = require('../models/user.model');
const Service = require('./service');

class RoomService extends Service {
    constructor(model) {
        super(model);
    }

    addUserToRoom(userId, roomId) {
        const _id = (typeof roomId) === 'string' ? roomId.toObjectId() : roomId;
        return this.model.findOneAndUpdate({_id}, {$addToSet: {usersId: userId?.toObjectId()}}, {new: true}).lean();
    }

    leaveUserFromRoom(userId, roomId) {
        const _id = (typeof roomId) === 'string' ? roomId.toObjectId() : roomId;
        return this.model.findOneAndUpdate({_id}, {$pull: {usersId: userId?.toObjectId()}}, {new: true}).lean();
    }

    getAllUsersByRoom(_id) {
        _id = (typeof _id) === 'string' ? _id.toObjectId() : _id;
        return this.model.findOne({_id}).populate({ path: 'usersId', model: UserModel }).lean().exec();
    }
}

module.exports = new RoomService(RoomModel);
