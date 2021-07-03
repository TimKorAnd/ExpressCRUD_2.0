'use strict';

const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    title: String,
    ownerId: Schema.ObjectId,
    description: String,
    usersId: {
        ref: 'User',
        type: Schema.ObjectId
    },
})

module.exports = model('Room', roomSchema)
