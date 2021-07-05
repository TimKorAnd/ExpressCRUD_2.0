const express = require('express');
const { validate } = require('express-validation');
const notesController = require('../controllers/notes.controller');
const notesValidator = require('../validation/notes.validation');

const router = express.Router();
// const { validate } = require('../core/core'); // TODO #1 dont work (((

/* route prefix: /notes  */
router.post('/create', validate(notesValidator.create, {}, { abortEarly: false }), notesController.createNote.bind(notesController));

router.get('/', notesController.getAllNotes.bind(notesController));
router.get('/:id', notesController.getNoteById.bind(notesController));

router.patch('/:id', notesController.updateNoteById.bind(notesController));

router.delete('/delete/:id', notesController.deleteNoteById.bind(notesController));

module.exports = router;
