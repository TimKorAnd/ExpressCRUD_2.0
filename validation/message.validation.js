const Joi = require('joi');
const messageMaxLength = 2e3; // 2e3 =  2 * (10 ** 3) = 2000

module.exports = {
    create: {
        body: Joi.object({
            ownerId: Joi.string().required(),
            roomId: Joi.string().required(),
            text: Joi.string().max(messageMaxLength).required(),
        })
    },
    patch: {
        body: Joi.object({
            text: Joi.string().max(messageMaxLength).required(),
        })
    }
};
