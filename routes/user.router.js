'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidator = require('../validation/user.validation');
//const { validate } = require('../core/core'); // TODO #1 dont work (((
const { validate } = require('express-validation');

/* route prefix: /api/v1/user  */
router.post('/', validate(userValidator.create, {}, { abortEarly: false }),
    userController.createItem.bind(userController));

router.get('/', userController.getAllItems.bind(userController));
router.get('/:id', userController.getItemById.bind(userController));

router.patch('/:id', userController.updateItemById.bind(userController));

router.delete('/delete/:id', userController.deleteItemById.bind(userController));

module.exports = router;
