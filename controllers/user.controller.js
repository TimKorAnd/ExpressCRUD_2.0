'use strict';

const Controller = require('./controller');
const userService = require('../services/user.service');
const roomService = require('../services/room.service');


class UserController extends Controller {

    constructor(userService, roomService) {
        super(userService);
        this.roomService = roomService; // service VS other f.e. roomService.. not good
    }


    async joinToRoom(req, res, next) {
        try {
            const userId = req.body.userId;
            const joinRoomId = req.body.roomId;
            const leftRoomId = (await this.service.updateDocumentById(userId, {roomId: joinRoomId.toObjectId()}, {new: false}))
                .roomId;

            // if (leftRoomId.toString() === joinRoomId.toString() {...})
            const leftRoom = await this.roomService.leaveUserFromRoom(userId, leftRoomId);
            const joinRoom = await this.roomService.addUserToRoom(userId, joinRoomId);

            res.status(200).json({ message:
                    {
                        status: 'successful',
                        userId,
                        'leftRoomId': leftRoom?._id ?? 'not left the room, because user did`t have a room',
                        'joinRoomId': joinRoom?._id
                    }
            });

        } catch (err) {
            this.errorHandler(err, res);
        }
    }

    async leaveFromRoom(req, res, next) {
        try {
            const userId = req.body.userId;
            const leftRoomId = (await this.service.updateDocumentById(userId, {roomId: null}, {new: false}))
                .roomId;

            // if (leftRoomId === null)
            const leftRoom = await this.roomService.leaveUserFromRoom(userId, leftRoomId);
            res.status(200).json({ message:
                    {
                        status: 'successful',
                        userId,
                        'leftRoomId': leftRoom?._id ?? 'not left the room, because user did`t have a room',
                    }
            });
        } catch (err) {
            this.errorHandler(err, res);
        }
    }


}

const userController = new UserController(userService, roomService);
userController.test();

module.exports = userController;
