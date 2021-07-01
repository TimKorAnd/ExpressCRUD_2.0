'use strict';

const notesModel = require('../models/notes.model');

class NotesService {
    constructor(model) {
        this.model = model;
    }

// TODO validation fields & values necessary
    async createItem(item) {
        try {
            await this.model.create(item);
            return item;
        } catch (err) {
            // TODO log it in controller
            throw `Error DB connection: cant write data.\n ${err.message}`;
        }
    }

    async getAllItems() {
        try {
            return await this.model.find().exec();
        } catch (err) {
            // TODO log it .. and rethrow to the controller
            throw `Error DB connection: cant read data.\n ${err.message} `;
        }
    }

    async getItemById(id) {
        try {
            const item = await this.model.findOne({id: id}).exec();
            if (!item) {
                return new Error(`Item id = ${id} not found`);
            }
            return item;
        } catch (err) {
            // TODO log it .. and rethrow to the controller
            throw `Error DB connection: cant read data.\n ${err.message} `;
        }
    }

// todo validation & forbide patch _id_ or some else protected fields
    async updateItemById(id, patchSource) {
        try {
            const itemTarget = await this.getItemById(id);
            if (itemTarget instanceof Error) {
                return itemTarget;
            }
            const errors = [];
            Object.keys(patchSource).forEach((patchKey) => {
                if (!(patchKey in itemTarget)) {
                    errors.push(new Error(`${patchKey}`));
                }
            })
            if (errors.length > 0) {
                return errors;
            }
            return await this.model.findOneAndUpdate({id: id}, patchSource, {new: true});
        } catch (err) {
            // TODO log it .. and rethrow to the controller
            throw `Error DB IO: ${err.message} `;
        }
    }

    async deleteItemById(id) {
        try {
            const deletedItem = await this.getItemById(id);
            if (!deletedItem) {
                return new Error(`Item id = ${id} not found`);
            }
            await this.model.deleteOne({id});
            return deletedItem;
        } catch (err) {
            // TODO log it .. and rethrow to the controller
            throw `Error DB IO.\n ${err.message} `;
        }
    }

}

module.exports = new NotesService(notesModel);
