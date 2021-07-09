const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getValidationErrors } = require('../helpers/validationErrorsHandler');
const router = require('../routes/router');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.use(getValidationErrors); // TODO important must be after router!!!
app.use(morgan('dev').bind());
// TODO why bind required in my project ?!?!?!? How add to core.js ?!?!?!

module.exports = app;
