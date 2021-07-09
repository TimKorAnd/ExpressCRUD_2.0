const Controller = require('./controller');
const roomService = require('../services/room.service');

class RoomController extends Controller {
    constructor(service) {
        super(service);
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

    async getAllRoomsByUserOwner(req, res, next) {
        try {
            const ownerId = req.params.id;
            const items = await this.service
                .getAllDocumentsByField({ ownerId }, { path: 'usersId', model: this.service.userModel });

            res.status(200).json(items);
        } catch (err) {
            this.errorHandler(err, res);
        }
    }
}

module.exports = new RoomController(roomService);
