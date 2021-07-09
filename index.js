const PORT = process.env.port || 3000;
const PID = process.pid;
// const { app, mongooseConnect } = require('./core/core');
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
