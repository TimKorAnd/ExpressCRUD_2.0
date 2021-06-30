const mongoose = require('mongoose');
const { mongoConfig } = require('./config')


mongoose.connect(mongoConfig.connectionString, mongoConfig.connectionParams)
    .then(() => {
        console.log(`MongoDB: ${mongoConfig.db} connected successfully`);

    })
    .catch((err) => {
        console.log(err);
    });

/*const db = mongoose.connection;
db.on('error', console.error.bind(console, `MongoDB: ${mongoConfig.db} connection error`));
db.once('open', () => {
    console.log(`MongoDB: ${mongoConfig.db} connected successfully`);
});*/

module.exports = mongoose;




