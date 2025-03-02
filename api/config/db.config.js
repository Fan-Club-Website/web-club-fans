const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.info(`Connected to database ${MONGODB_URI}`);
    })
    .catch((err) => {
        console.error(`Fail in connect to database ${MONGODB_URI}`, err);
        process.exit(0);
    });

process.on('SIGINT', () => {
    mongoose.connection.close()
        .then(() => {
            console.info(`Closing connection to ${MONGODB_URI}`);
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(0);
        });
});
