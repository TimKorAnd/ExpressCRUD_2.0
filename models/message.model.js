'use strict';

const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
    ownerId: {
        ref: 'User',
        type: Schema.ObjectId
    },
    roomId: {
        ref: 'Room',
        type: Schema.Types.ObjectId
    },
    text: String,
})

module.exports = model('Message', messageSchema)
