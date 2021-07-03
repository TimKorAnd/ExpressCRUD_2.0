'use strict';

const { Schema, model } = require('mongoose')
//const mongoose = require('../core/mongoConnect')


//const notesSchema = new mongoose.Schema({
const noteSchema = new Schema({
    id: {type: Number},
    content: {type: String, unique: false, required: true},
    dates: [{type: Date}],
    isActive: {type: Boolean},
    created: {type: Date, default: Date.now},
    category: {type: String}, // TODO ref to collection of category : “Task”, “Random Thought”, “Idea”. {type: String, ref: 'Role'}
})

module.exports = model('Notes', noteSchema)

