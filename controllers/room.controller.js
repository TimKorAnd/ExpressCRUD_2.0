'use strict';

const Controller = require('./controller');
const roomService = require('../services/room.service');
const UserModel = require('../models/room.model');

class RoomController extends Controller {

    constructor(roomService) {
        super(roomService);
    }

    async getAllUsersByRoom(req, res, next) {
        try {
            const roomId = req.params.id;
            const items = (await this.service.getAllUsersByRoom(roomId)).usersId;

            res.status(200).json(items);
        } catch (err) {
            this.errorHandler(err, res);
        }
    }


}

module.exports = new RoomController(roomService);
