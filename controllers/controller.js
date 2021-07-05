'use strict';


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
        }
    };

    constructor(service) {
        this.service = service;
    }

    test() {
            console.log(this.service);
    }

    async createItem(req, res, next) {
        try {
            const itemForCreate = req.body;
            const itemCreated = await this.service.createDocument(itemForCreate);
            return res.status(201).json({"messages": Controller.responseMessages.success[201]});
        } catch (err) {
            // it is necessary to log the error
            console.dir(err);
            if (RegExp(/E11000 duplicate key error collection/, 'gi').test(err.message)) {
                res.status(400).json({ "message": "duplicate field","error": err.keyValue}); // if two field is unique?
            }
        }
    }

    async getAllItems(req, res, next) {
        try {
            const items = await this.service.getAllDocuments();
            if (!items || items.length === 0) {
                return res.status(404).json({"message": Controller.responseMessages.errors[404]});
            }
            res.status(200).json(items);
        } catch (err) {
            // it is necessary to log the error
            return res.status(500).end();
        }
    }

    async getItemById(req, res, next) {
        try {
            const id = req.params.id;
            const item = await this.service.getDocumentById(id)
            if (item instanceof Error) {
                return res.status(404).json({"messages": Controller.responseMessages.errors[404]});
            }
            return res.status(200).json(item);
        } catch (err) {
            // it is necessary to log the error
            return res.status(500).end();
        }
    }

    async updateItemById(req, res, next) {
        try {
            const id = req.params.id;
            const patchSource = req.body;

            // TODO validation fields names only (wo types) remove to userController
            const errors = [];
            const itemTarget = await this.service.getDocumentById(id);
            Object.keys(patchSource).forEach((patchKey) => {
                if (!(patchKey in itemTarget)) {
                    errors.push(new Error(`${patchKey}`));
                }
            })
            if (errors.length > 0) {
                const errorsMessages = errors.map(err => ({
                    "message": "Oops! The value is invalid",
                    "field": err.message
                }));
                return res.status(400).json({
                    "message": Controller.responseMessages.errors[400],
                    "errors": errorsMessages
                });
            }
            // TODO validation fields names only (wo types)

            const item = await this.service.updateDocumentById(id, patchSource);
            if (item instanceof Error) {
                return res.status(404).json({"messages": Controller.responseMessages.errors[404]});
            }

            return res.status(200).json(item);
        } catch (err) {
            // it is necessary to log the error
            return res.status(500).end();
        }
    }

    async deleteItemById(req, res, next) {
        try {
            const id = req.params.id;
            const deletedNotes = await this.service.deleteDocumentById(id);
            if (deletedNotes instanceof Error) {
                return res.status(404).json({"messages": Controller.responseMessages.errors[404]});
            }
            return res.status(204).end();
        } catch (err) {
            // it is necessary to log the error
            return res.status(500).end();
        }
    }

}

module.exports = Controller;
