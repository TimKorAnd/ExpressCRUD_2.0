'use strict';

const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

const notesRouter = require('./routes/notes.router');
const defaultController = require('./controllers/default.controller'); // TODO change it via next(''route);
const bodyParser = require('body-parser');
const PID = process.pid;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/notes', notesRouter);
app.use('/', defaultController); // TODO change it via next('route');

app.listen(PORT, () => {
    console.log(`Server started successfully at port ${PORT}, PID is ${PID}`);
});
