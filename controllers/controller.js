'use strict';
const errorHandler = require('../helpers/errorHandler');

class Controller {
    // TODO remove to external cfg file
    static responseMessages = {
        errors: {
            400: "Validation errors in your request",
            404: "The item does not exist",
        },
        success: {
            200: "Ok",
            201: "The item was created successfully",
            204: "No content",
        }
    };

    constructor(service) {
        this.service = service;
        this.errorHandler = errorHandler;
    }

    async createItem(req, res, next) {
        try {
            const itemForCreate = req.body;
            const itemCreated = await this.service.createDocument(itemForCreate);
            res.status(201).json({"messages": Controller.responseMessages.success[201]});
        } catch (err) {
            console.dir(err); // TODO remove
            this.errorHandler(err, res);

        }
    }

    async getAllItems(req, res, next) {
        try {
            const items = await this.service.getAllDocuments();
            res.status(200).json(items);
        } catch (err) {
            this.errorHandler(err, res);
        }
    }

    async getItemById(req, res, next) {
        try {
            const id = req.params.id;
            const item = await this.service.getDocumentById(id);

            res.status(200).json(item);
        } catch (err) {
            this.errorHandler(err, res);
        }
    }

    async updateItemById(req, res, next) {
        try {
            const id = req.params.id;
            const patchSource = req.body;
            const item = await this.service.updateDocumentById(id, patchSource);
            res.status(200).json(item);
        } catch (err) {
            this.errorHandler(err, res);
        }
    }

    async deleteItemById(req, res, next) {
        try {
            const id = req.params.id;
            const deletedNotes = await this.service.deleteDocumentById(id);
            res.status(204).end();
        } catch (err) {
            this.errorHandler(err, res);
        }
    }

}

module.exports = Controller;
