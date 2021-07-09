const MessageModel = require('../models/message.model');
const RoomModel = require('../models/room.model');
const Service = require('./service');

class MessageService extends Service {
    constructor(messageModel, roomModel) {
        super(messageModel);
        this.roomModel = roomModel;
    }
}

module.exports = new MessageService(MessageModel, RoomModel);
