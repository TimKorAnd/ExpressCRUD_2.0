'use strict';

const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    ownerId: {
        ref: 'users',
        type: Schema.Types.ObjectId,
        required: true
    },
    roomId: {
        ref: 'rooms',
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = model('Message', messageSchema, 'messages');
