const Controller = require('./controller');
const messageService = require('../services/message.service');

class MessageController extends Controller {
    constructor(messageService) {
        super(messageService);
    }

    async getItemById(req, res, next) {
        const populateParams = [{ path: 'roomId', model: this.service.roomModel },
            { path: 'ownerId', model: this.service.userModel }];
        super.getItemById(req, res, next, populateParams);
    }

    async getAllItems(req, res, next) {
        const populateParams = [{ path: 'roomId', model: this.service.roomModel },
            { path: 'ownerId', model: this.service.userModel }];
        super.getAllItems(req, res, next, populateParams);
    }

    async getMessagesByUser(req, res, next) {
        try {
            const userId = req.params.id;
            const items = await this.service
                .getAllDocumentsByField({ ownerId: userId.toObjectId() },
                    { path: 'roomId', model: this.service.roomModel });

            res.status(200).json(items);
        } catch (err) {
            this.errorHandler(err, res);
        }
    }
}

module.exports = new MessageController(messageService);
