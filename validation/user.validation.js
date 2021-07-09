const Joi = require('joi');

module.exports = {
    create: {
        body: Joi.object({
            name: Joi.string().alphanum().min(3).max(30)
                .required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            avatarUrl: Joi.string(),
            roomId: Joi.string(),
        }),
    },
    patch: {
        body: Joi.object({
            name: Joi.string().alphanum().min(3).max(30)
                .optional(),
            email: Joi.string().email()
                .optional(), // TODO when auth need change flow/ how about unique check by Mongo
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).optional(),
            avatarUrl: Joi.string().optional(),
            roomId: Joi.string().optional(),
        }),
    },
    joinToRoom: {
        body: Joi.object({
            roomId: Joi.string().required(),
            userId: Joi.string().required(),
        }),
    },
    leaveFromRoom: {
        body: Joi.object({
            userId: Joi.string().required(),
        }),
    },
};
