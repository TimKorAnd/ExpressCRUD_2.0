const Controller = require('./controller');
const messageService = require('../services/message.service');

class MessageController extends Controller {
    constructor(messageService) {
        super(messageService);
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
