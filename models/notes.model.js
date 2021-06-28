'use strict';

const notes = [ // TODO note class (“Task”, “Random Thought”, “Idea”. enum?
    {id: 0, content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
        dates: ['3/5/2021', '5/5/2021'], isActive: true, created: Date.now(), category: 'Task' },
    {id: 1, content: 'Lorem ipsum 1',
        dates: [], isActive: true, created: Date.now(), category: 'Random Thouts' },

    {id: 2, content: 'Lorem ipsum 2',
        dates: [], isActive: true, created: Date.now(), category: 'Random Thouts' },

    {id: 3, content: 'Lorem ipsum 3',
        dates: [], isActive: true, created: Date.now(), category: 'Random Thouts' },

    {id: 4, content: 'Lorem ipsum 4',
        dates: [], isActive: true, created: Date.now(), category: 'Idea' },

    {id: 5, content: 'Lorem ipsum 5',
        dates: [], isActive: true, created: Date.now(), category: 'Idea' },

    {id: 6, content: 'Lorem ipsum 6',
        dates: [], isActive: true, created: Date.now(), category: 'Idea' },

    {id: 7, content: 'Lorem ipsum 7',
        dates: [], isActive: true, created: Date.now(), category: 'Idea' },
];
class NotesModel {
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

module.exports = new NotesModel(notes);
/*
module.exports = {
    getAllData: () => {
        return notes; // await for db
    },
    deleteItemById: id => {};
}
*/

