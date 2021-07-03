const Joi = require('joi');

module.exports = {
    create: {
        body: Joi.object({
            id: Joi.number().integer(),
            content: Joi.string().min(1),//{type: String, unique: false, required: true},
            dates: Joi.array().items(Joi.date()),//[{type: Date}],
            isActive: Joi.bool(),// {type: Boolean},
            created: Joi.date(), // {type: Date, default: Date.now},
            category: Joi.string(), //{type: String},
        })
    }
}
