'use strict';

const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    ownerId: {
        ref: 'users',
        type: Schema.Types.ObjectId,
        require: true
    },
    description: {
        type: String,
        default: ''
    },
    usersId: [
        {
            ref: 'users',
            type: Schema.Types.ObjectId
        }
    ],
});

module.exports = model('Room', roomSchema, 'rooms');
