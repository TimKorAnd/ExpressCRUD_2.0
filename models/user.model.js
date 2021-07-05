'use strict';

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roomId: {
        ref: 'rooms',
        type: Schema.Types.ObjectId,
        default: null
    },
})

module.exports = model('User', userSchema, "users");
