'use strict';

const {Schema, model} = require('mongoose')
//const mongoose = require('../core/mongoConnect')


//const notesSchema = new mongoose.Schema({
const notesSchema = new Schema({
    id: {type: Number},
    content: {type: String, unique: false, required: true},
    dates: [{type: Date}],
    isActive: {type: Boolean},
    created: {type: Date, default: Date.now},
    category: {type: String}, // TODO ref to collection of category : “Task”, “Random Thought”, “Idea”. {type: String, ref: 'Role'}
})

module.exports = model('Notes', notesSchema)


/*const notes = [ // TODO note class (“Task”, “Random Thought”, “Idea”. enum?
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

module.exports = notes;*/

