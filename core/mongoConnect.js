'use strict';

const mongoose = require('mongoose');
const {mongoConfig} = require('./config');


exports.connect = () => mongoose.connect(mongoConfig.connectionString, mongoConfig.connectionParams)
    .then(() => {
        console.log(`${Date()}\n...MongoDB: ${mongoConfig.db} connected successfully.\n`);

    })
    .catch((err) => {
        console.log(`${Date()}\n...Error MongoDB: ${mongoConfig.db} connected:\n${err}`);
    });

//module.exports = mongoose;




