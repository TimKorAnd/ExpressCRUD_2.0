'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidator = require('../validation/user.validation');
//const { validate } = require('../core/core'); // TODO #1 dont work (((
const { validate } = require('express-validation');

const joiValidationOptions = { abortEarly: false };
/* route prefix: /api/v1/users  */
router.post('/', validate(userValidator.create, {}, joiValidationOptions),
    userController.createItem.bind(userController));

router.get('/', userController.getAllItems.bind(userController));
router.get('/:id', userController.getItemById.bind(userController));


router.patch('/:id', validate(userValidator.patch, {}, joiValidationOptions),
    userController.updateItemById.bind(userController));

router.delete('/delete/:id', userController.deleteItemById.bind(userController));

router.post('/join-to-room', validate(userValidator.joinToRoom, {}, joiValidationOptions),
    userController.joinToRoom.bind(userController));

router.post('/leave-from-room', validate(userValidator.leaveFromRoom, {}, joiValidationOptions),
    userController.leaveFromRoom.bind(userController));





module.exports = router;
