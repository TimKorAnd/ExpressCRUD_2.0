'use strict';

const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes.controller');
const defaultController = require('../controllers/default.controller'); // TODO change it via next(''route);

//router.get('/notes', notesController.getAllNotes); // lost context if use 'this' in controller fn

/* route prefix: /notes  */
router.post('/create', notesController.createNote.bind(notesController));

router.get('/', notesController.getAllNotes.bind(notesController));
router.get('/:id', notesController.getNoteById.bind(notesController));

router.patch('/:id', notesController.updateNoteById.bind(notesController));

router.delete('/delete/:id', notesController.deleteNoteById.bind(notesController));

module.exports = router;
