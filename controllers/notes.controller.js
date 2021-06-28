'use strict';

const notesService = require('../services/notes.service');

class NotesController {
    /**
     * Good idea accept a model instance?
     * but context is lost in
     */
    constructor(modelService) {
        this.model = modelService;
    }

    async createNote(req, res, next) {
        const itemForCreate = req.body; // need validate
        const itemCreated = await this.model.createItem(itemForCreate);
        // compare two items? What for?
        req.params.id = itemCreated.id;
        await this.getNoteById(req, res, next, 201);
    }

    async getAllNotes(req, res, next) {
        //res.send(await notesModel.getAllData()); 'this' lost context when fn passing into router
        res.status(200).json(await this.model.getAllItems());
    }

    async getNoteById(req, res, next, statusSuccess = 200) {
        const id = +req.params.id;
        const item = await this.model.getItemById(id)
        if (!item) {
            return res.status(204).end();
        }
        res.status(statusSuccess).json(item);
    }

    async deleteNoteById(req, res, next) {
        const id = +req.params.id;
        let resStatus = 200;
        try {
            const deletedNotes = await this.model.deleteItemById(id);
            if (deletedNotes instanceof Error) {
                resStatus = 204;
            }
            res.status(resStatus).json(deletedNotes);
        } catch (err) {
            res.status(500).end();
        }
    }

}

module.exports = new NotesController(notesService);
