const express = require('express');
const { validate } = require('express-validation');
const roomController = require('../controllers/room.controller');
const roomValidator = require('../validation/room.validation');

const router = express.Router();

/* route prefix: /api/v1/rooms  */
router.post('/', validate(roomValidator.create, {}, { abortEarly: false }),
    roomController.createItem.bind(roomController));

router.get('/', roomController.getAllItems.bind(roomController));
router.get('/:id', roomController.getItemById.bind(roomController));
router.get('/:id/users', roomController.getAllUsersByRoom.bind(roomController));
router.get('/:id/byowner', roomController.getAllRoomsByUserOwner.bind(roomController));

router.patch('/:id', roomController.updateItemById.bind(roomController));

router.delete('/delete/:id', roomController.deleteItemById.bind(roomController));

module.exports = router;
