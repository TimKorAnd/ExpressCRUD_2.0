const { ValidationError } = require('express-validation');
const errorHandler = require('../helpers/errorHandler');

module.exports = {
    getValidationErrors: (err, req, res, next) => {
        if (err instanceof ValidationError) {
            res.status(err.statusCode).json(err);
        }
        //return res.status(500).json(err);
        errorHandler(err, res);
    }
}
