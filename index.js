'use strict';

const PORT = process.env.port || 3000;
const PID = process.pid;
const app = require('./core/express');


app.listen(PORT, () => {
    console.log(`Server started successfully at port ${PORT}, PID is ${PID}`);
});
