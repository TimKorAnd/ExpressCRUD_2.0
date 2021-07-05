'use strict';

const Controller = require('./controller');
const service = require('../services/user.services');

class UserController extends Controller {

    constructor(service) {
        super(service);
    }

    /**
     * TODO maybe isUserRegistered more useful method?
     * @param email
     * @returns {Promise<Query<LeanDocument<Document<any, any>> | LeanDocument<null[number]>[], Document<any, any>, {}>>}
     */
    async isEmailExists(email) {
        return this.service.model.findOne({email}).lean(); // TODO remake thru getItemById
    }

    async createItem(req, res, next) {
        if (!! await this.isEmailExists(req.body.email)) {
            return res.status(403).json({message: `email ${req.body.email} already exists`});
        }
        return await super.createItem(req, res, next);
    }
}

const userController = new UserController(service);
userController.test();

module.exports = userController;
