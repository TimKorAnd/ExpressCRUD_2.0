const { ValidationError } = require('express-validation');
const errorHandler = require('./errorHandler');

module.exports = {
    getValidationErrors: (err, req, res, next) => {
        if (err instanceof ValidationError) {
            res.status(err.statusCode).json(err);
        }
        errorHandler(err, res);
    },
};
