const mongoose = require('mongoose');
const { mongoConfig } = require('./config');

// eslint-disable-next-line no-extend-native
String.prototype.toObjectId = function () {
    return typeof this === 'string' ? mongoose.Types.ObjectId(this) : this;
};

exports.connect = () => mongoose.connect(mongoConfig.connectionString, mongoConfig.connectionParams)
    .then(() => {
        console.log(`${Date()}\n...MongoDB: ${mongoConfig.db} connected successfully.\n`);
    })
    .catch((err) => {
        console.log(`${Date()}\n...Error MongoDB: ${mongoConfig.db} connected:\n${err}`);
    });
