const Joi = require('joi');

module.exports = {
    create: {
        body: Joi.object({
            title: Joi.string().alphanum().min(1).max(30)
                .required(),
            ownerId: Joi.string().required(),
            description: Joi.string().max(30),
            usersId: Joi.array().items(Joi.string()),
        }),
    },
    patch: {
        body: Joi.object({
            title: Joi.string().alphanum().min(1).max(30)
                .optional(), // TODO how check unique
            ownerId: Joi.string().required().optional(),
            description: Joi.string().max(30).optional(),
            usersId: Joi.array().items(Joi.string()).optional(),
        }),
    },
};
