const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        default: null,
    },
    roomId: {
        ref: 'rooms',
        type: Schema.Types.ObjectId,
        default: null,
    },
}, {
    versionKey: false,
    timestamps: true,
    collection: 'users',
});

module.exports = model('User', userSchema, 'users');
