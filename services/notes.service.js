'use strict';

const modelData = require('../models/notes.model');

class NotesService {
    constructor(data) {
        this.items = data;
    }

    async createItem(item) {
        this.items.push(item);
        return item;
    }

    async getAllItems() {
        return await this.items; // await for db. try catch for db
    }

    async getItemById(id) {
        try {
            return await this.items.find(item => item.id === id);
        } catch (err) {
            console.log('deleteItemById error:', err); // TODO log and
            throw 'Error DB connection';
        }
    }

    async deleteItemById(id) {
        try {
            const deletedItem = await this.getItemById(id);
            if (!deletedItem) {
                return new Error(`id item = ${id} not found`);
            }
            this.items = await this.items.filter((item) => item.id !== id);
            return deletedItem;
        } catch(err) {
            console.log('deleteItemById error:', err); // TODO log and
            throw 'Error DB connection';
        }
    }

}

module.exports = new NotesService(modelData);
