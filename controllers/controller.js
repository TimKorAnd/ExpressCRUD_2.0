'use strict';


class Controller {

    static responseMessages = {
        errors: {
            400: "Validation errors in your request",
            404: "The item does not exist",
        },
        success: {
            200: "Ok",
            201: "The item was created successfully",
        }
    }

    constructor(service) {
        this.service = service;
    }

    async createItem(req, res, next) {
        try {
            const itemForCreate = req.body; // need validate
            const itemCreated = await this.service.createDocument(itemForCreate);
            // compare two items? What for?
            req.params.id = itemCreated.id;
            await this.getNoteById(req, res, next, 201);
        } catch (err) {
            // it is necessary to log the error
            res.status(500).end();
        }
    }

    async getAllItems(req, res, next) {
        try {
            const notes = await this.service.getAllDocuments();
            if (!notes || notes.length === 0) {
                res.status(404).json({"message": NotesController.responseMessages.errors[404]});
                return; // is redundant?
            }
            res.status(200).json(notes);
        } catch (err) {
            // it is necessary to log the error
            res.status(500).end();
        }
    }

   /* async getNoteById(req, res, next, statusSuccess = 200) {
        try {
            const id = +req.params.id;
            const item = await this.service.getItemById(id)
            if (item instanceof Error) {
                res.status(404).json({"messages": NotesController.responseMessages.errors[404]});
                return;
            }
            if (statusSuccess === 201) {
                res.status(statusSuccess).json({"messages": NotesController.responseMessages.success[statusSuccess]});
                return;
            }
            res.status(statusSuccess).json(item);
        } catch (err) {
            // it is necessary to log the error
            res.status(500).end();
        }
    }

    async updateNoteById(req, res, next) {
        try {
            const id = +req.params.id;
            const patchSource = req.body;
            const note = await this.service.updateItemById(id, patchSource);
            if (note instanceof Error) {
                res.status(404).json({"messages": NotesController.responseMessages.errors[404]});
                return;
            }
            if (Array.isArray(note) && note.every(value => value instanceof Error)) {
                const errorsMessages = note.map(err => ({
                    "message": "Oops! The value is invalid",
                    "field": err.message
                }));
                res.status(400).json({
                    "message": NotesController.responseMessages.errors[400],
                    "errors": errorsMessages
                });
                return;
            }
            res.status(200).json(note);
        } catch (err) {
            // it is necessary to log the error
            res.status(500).end();
        }
    }

    async deleteNoteById(req, res, next) {
        try {
            const id = +req.params.id;
            const deletedNotes = await this.service.deleteItemById(id);
            if (deletedNotes instanceof Error) {
                res.status(404).json({"messages": NotesController.responseMessages.errors[404]});
                return;
            }
            res.status(204).end();
        } catch (err) {
            // it is necessary to log the error
            res.status(500).end();
        }
    }*/

}

module.exports = Controller;