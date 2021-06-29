'use strict';

const modelData = require('../models/notes.model');

class NotesService {
    constructor(data) {
        this.items = data;
    }
// TODO validation fields & values necessary
    async createItem(item) {
        await this.items.push(item);
        return item;
    }

    async getAllItems() {
        return await this.items; // await for db. try catch for db
    }

    async getItemById(id) {
        try {
            const item =  await this.items.find(item => item.id === id);
            if (!item) {
                return new Error(`Item id = ${id} not found`);
            }
            return item;
        } catch (err) {
            // TODO log it
            throw 'Error DB connection';
        }
    }
// todo validation & forbide patch _id_ or some else protected fields
    async updateItemById(id, patchSource) {
        const itemTarget = await this.getItemById(id);
        if (itemTarget instanceof Error) {
            return itemTarget;
        }
        const errors = [];
        Object.keys(patchSource).forEach((patchKey) => {
            if (!itemTarget.hasOwnProperty(patchKey)) {
                 errors.push(new Error(`${patchKey}`));
            }
        })
        if (errors.length > 0) {
            return errors;
        }
        return Object.assign(itemTarget, patchSource);
    }

    async deleteItemById(id) {
        try {
            const deletedItem = await this.getItemById(id);
            if (!deletedItem) {
                return new Error(`Item id = ${id} not found`);
            }
            this.items = await this.items.filter((item) => item.id !== id);
            return deletedItem;
        } catch(err) {
            // TODO log it
            throw 'Error DB connection';
        }
    }

}

module.exports = new NotesService(modelData);
