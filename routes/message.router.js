const express = require('express');
const { validate } = require('express-validation');
const messageController = require('../controllers/message.controller');
const messageValidator = require('../validation/message.validation');

const router = express.Router();

router.post('/', validate(messageValidator.create, {}, { abortEarly: false }),
    messageController.createItem.bind(messageController));

router.get('/', messageController.getAllItems.bind(messageController));
router.get('/:id', messageController.getItemById.bind(messageController));
router.get('/byuser/:id', messageController.getMessagesByUser.bind(messageController));

router.patch('/:id', messageController.updateItemById.bind(messageController));

router.delete('/delete/:id', messageController.deleteItemById.bind(messageController));

module.exports = router;
