const MessageModel = require('../models/message.model');
const RoomModel = require('../models/room.model');
const UserModel = require('../models/user.model');
const Service = require('./service');

class MessageService extends Service {
    constructor(messageModel, roomModel, userModel) {
        super(messageModel);
        this.roomModel = roomModel;
        this.userModel = userModel;
    }
}

module.exports = new MessageService(MessageModel, RoomModel, UserModel);
