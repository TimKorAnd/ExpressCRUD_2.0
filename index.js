require('dotenv').config();

const PORT = process.env.PORT || 3000;
const PID = process.pid;
const app = require('./core/express');
const mongooseConnect = require('./core/mongoConnect');

(async () => {
    try {
        await mongooseConnect.connect();
        app.listen(PORT, () => {
            console.log(`${new Date().toString()}\n...Server started successfully at port ${PORT}, PID is ${PID}.\n`);
        });
    } catch (err) {
        console.log(`Error(s) when started: ${err.message}`);
    }
})();
