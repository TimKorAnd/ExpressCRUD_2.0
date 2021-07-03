'use strict';

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    roomId: {
        ref: 'Room',
        type: Schema.Types.ObjectId
    },
})

module.exports = model('User', userSchema)
