'use strict';

const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller');
const roomValidator = require('../validation/room.validation');
const { validate } = require('express-validation');

/* route prefix: /api/v1/rooms  */
router.post('/', validate(roomValidator.create, {}, { abortEarly: false }),
    roomController.createItem.bind(roomController));

router.get('/', roomController.getAllItems.bind(roomController));
router.get('/:id', roomController.getItemById.bind(roomController));

router.patch('/:id', roomController.updateItemById.bind(roomController));

router.delete('/delete/:id', roomController.deleteItemById.bind(roomController));

module.exports = router;
